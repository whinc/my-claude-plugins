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
    "taro-docs|NervJS/taro-docs|--compress --include 'docs/**/*.{mdx,md}'"
    "ahooks|alibaba/hooks|--compress --include 'packages/**/*.en-US.md'"
    # Add more repositories here:
    # "react|facebook/react|--compress --style markdown"
    # "vue|vuejs/core|--compress --include 'packages/**/*.ts'"
)

# Process a single repository
process_repo() {
    local repo_config="$1"
    local start_time=$(date +%s)
    
    # Parse configuration
    IFS='|' read -r repo_name repo_path extra_params <<< "$repo_config"
    
    log_info "Processing repository: ${repo_name} (${repo_path})"
    
    # Build output file path
    local output_file="${OUTPUT_DIR}/${repo_name}.xml"
    
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
    
    log_info "Starting repomix batch processing..."
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
        if process_repo "$repo_config"; then
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
main