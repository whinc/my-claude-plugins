#!/bin/bash

# Repomix batch processing script
# Purpose: Package multiple repositories with customizable repomix parameters

# Get script directory and source utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/util.sh"

# Configuration: Output directory
OUTPUT_DIR="repomix-output"

# Repository configurations
# Format: "repository_name|owner/repo|additional_parameters"
# Example parameters: --compress, --style markdown, --include "src/**/*.ts"
REPOS=(
    # "taro-docs|NervJS/taro-docs|--compress --include 'docs/**/*.{mdx,md}'"
    # "ahooks|alibaba/hooks|--compress --include 'packages/**/*.en-US.md'"
    "formily|alibaba/formily|--compress --include 'docs/**/*.zh-CN.md,packages/{antd,react,core,reactive}/docs/**/*.md'"
    # Add more repositories here:
    # "react|facebook/react|--compress --style markdown"
    # "vue|vuejs/core|--compress --include 'packages/**/*.ts'"
)

# Show usage information
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --no-cache    Ignore local cache and force re-download"
    echo "  --help, -h    Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                # Process with caching"
    echo "  $0 --no-cache     # Force re-download all repositories"
}

# Process a single repository
process_repo() {
    local repo_config="$1"
    local no_cache="$2"
    local start_time=$(date +%s)
    
    # Parse configuration
    IFS='|' read -r repo_name repo_path extra_params <<< "$repo_config"
    
    log_info "Processing repository: ${repo_name} (${repo_path})"

    # Handle cache logic based on --no-cache flag
    local latest_commit=""
    local cached_file=""
    local output_file

    if [ "$no_cache" = true ]; then
        log_info "Cache disabled, but fetching commit ID for filename"
        # Still get commit ID for filename even in no-cache mode
        latest_commit=$(get_latest_commit "$repo_path")
        if [ $? -ne 0 ]; then
            log_warning "Failed to get commit ID for ${repo_path}, using filename without commit"
            output_file="${OUTPUT_DIR}/${repo_name}.xml"
        else
            log_info "Using commit ID for filename: ${latest_commit}"
            output_file="${OUTPUT_DIR}/${repo_name}.${latest_commit}.xml"
        fi

        # Remove existing file(s) with same name pattern if they exist (since we're forcing re-download)
        local existing_files=$(ls "${OUTPUT_DIR}/${repo_name}".*.xml 2>/dev/null)
        if [ -n "$existing_files" ]; then
            log_info "Removing existing files for ${repo_name}"
            rm -f $existing_files
        fi
    else
        # Get latest commit ID from GitHub
        log_info "Fetching latest commit ID..."
        latest_commit=$(get_latest_commit "$repo_path")
        if [ $? -ne 0 ]; then
            log_error "Failed to get commit ID for ${repo_path}, skipping cache check"
            latest_commit=""
        else
            log_info "Latest commit: ${latest_commit}"
        fi

        # Check for cached version
        if [ -n "$latest_commit" ]; then
            cached_file=$(find_cached_file "$OUTPUT_DIR" "$repo_name")

            if [ -n "$cached_file" ]; then
                local cached_commit=$(extract_commit_from_filename "$cached_file")

                if [ "$cached_commit" = "$latest_commit" ]; then
                    log_success "Using cached version (commit: ${latest_commit})"
                    log_success "Cached file: ${cached_file}"
                    return 0
                else
                    log_info "Cache outdated (${cached_commit} → ${latest_commit}), re-downloading..."
                fi
            fi
        fi

        # Build output file path with commit ID
        if [ -n "$latest_commit" ]; then
            output_file="${OUTPUT_DIR}/${repo_name}.${latest_commit}.xml"
        else
            output_file="${OUTPUT_DIR}/${repo_name}.xml"
        fi
    fi
    
    # Build and execute repomix command
    local command="npx repomix@latest --remote ${repo_path} --output ${output_file}"
    if [ -n "$extra_params" ]; then
        command="${command} ${extra_params}"
    fi
    
    log_info "Running: ${command}"
    eval "${command}"
    
    # Check result
    if [ $? -eq 0 ]; then
        local end_time=$(date +%s)
        local duration=$((end_time - start_time))

        # Clean up old cached files
        if [ -n "$latest_commit" ]; then
            # Always clean up old files when we have a commit ID
            cleanup_old_cache "$OUTPUT_DIR" "$repo_name" "$latest_commit"
        fi

        log_success "Completed ${repo_name} in $(format_duration $duration)"
        log_success "Output: ${output_file}"
        return 0
    else
        log_error "Failed to process ${repo_name}"
        return 1
    fi
}

# Main execution
main() {
    local total_start=$(date +%s)
    local failed_count=0
    local success_count=0
    local NO_CACHE=false

    # Parse CLI arguments
    for arg in "$@"; do
        case $arg in
            --no-cache)
                NO_CACHE=true
                shift
                ;;
            --help|-h)
                show_usage
                exit 0
                ;;
            *)
                log_error "Unknown argument: $arg"
                show_usage
                exit 1
                ;;
        esac
    done

    log_info "Starting repomix batch processing..."
    if [ "$NO_CACHE" = true ]; then
        log_info "Cache disabled (force re-download)"
    fi
    log_info "Total repositories: ${#REPOS[@]}"
    
    # Create output directory
    log_info "Creating output directory: ${OUTPUT_DIR}"
    mkdir -p "${OUTPUT_DIR}"
    if [ $? -ne 0 ]; then
        log_error "Failed to create output directory"
        exit 1
    fi
    log_success "Output directory ready"
    
    # Process each repository
    for repo_config in "${REPOS[@]}"; do
        if process_repo "$repo_config" "$NO_CACHE"; then
            ((success_count++))
        else
            ((failed_count++))
        fi
        echo "" # Empty line for readability
    done
    
    # Summary
    local total_end=$(date +%s)
    local total_duration=$((total_end - total_start))
    
    log_info "==================== Summary ===================="
    log_info "Total repositories: ${#REPOS[@]}"
    log_success "Successful: ${success_count}"
    if [ $failed_count -gt 0 ]; then
        log_error "Failed: ${failed_count}"
    fi
    log_info "Total duration: $(format_duration $total_duration)"
    log_info "================================================="
    
    if [ $failed_count -eq 0 ]; then
        log_success "All done!"
        exit 0
    else
        log_error "Some repositories failed to process"
        exit 1
    fi
}

# Run main function
main "$@"