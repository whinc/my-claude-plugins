#!/bin/bash

# Utility functions for bash scripts

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Logging function with timestamp
log_info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} → $1"
}

log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ✓ $1"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ✗ $1" >&2
}

log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ⚠ $1"
}

# Calculate and format duration
format_duration() {
    local duration=$1
    local minutes=$((duration / 60))
    local seconds=$((duration % 60))
    
    if [ $minutes -gt 0 ]; then
        echo "${minutes}m ${seconds}s"
    else
        echo "${seconds}s"
    fi
}

# Get latest commit ID from GitHub repository
# Usage: get_latest_commit "owner/repo"
# Returns: 7-character commit SHA (short ID)
get_latest_commit() {
    local repo_path="$1"
    
    # Use GitHub CLI to get the latest commit
    local commit_id=$(gh api "repos/${repo_path}/commits" --jq '.[0].sha[0:7]' 2>/dev/null)
    
    if [ -z "$commit_id" ]; then
        log_error "Failed to fetch latest commit for ${repo_path}"
        return 1
    fi
    
    echo "$commit_id"
    return 0
}

# Find cached file for a repository
# Usage: find_cached_file "output_dir" "repo_name"
# Returns: cached file path if exists, empty string otherwise
find_cached_file() {
    local output_dir="$1"
    local repo_name="$2"
    
    # Look for files matching pattern: repo_name.*.xml
    local cached_file=$(ls "${output_dir}/${repo_name}".*.xml 2>/dev/null | head -n 1)
    
    if [ -n "$cached_file" ] && [ -f "$cached_file" ]; then
        echo "$cached_file"
        return 0
    fi
    
    return 1
}

# Extract commit ID from cached filename
# Usage: extract_commit_from_filename "path/to/repo.abc1234.xml"
# Returns: commit ID (e.g., "abc1234")
extract_commit_from_filename() {
    local filename="$1"
    local basename=$(basename "$filename" .xml)
    
    # Extract commit ID after the last dot
    local commit_id="${basename##*.}"
    echo "$commit_id"
}

# Clean up old cache files for a repository
# Usage: cleanup_old_cache "output_dir" "repo_name" "keep_commit_id"
cleanup_old_cache() {
    local output_dir="$1"
    local repo_name="$2"
    local keep_commit_id="$3"
    
    # Find all cached files for this repo
    local old_files=$(ls "${output_dir}/${repo_name}".*.xml 2>/dev/null)
    
    for file in $old_files; do
        local file_commit=$(extract_commit_from_filename "$file")
        
        # Remove if it's not the version we want to keep
        if [ "$file_commit" != "$keep_commit_id" ]; then
            rm -f "$file"
            log_info "Removed old cache: $(basename "$file")"
        fi
    done
}
