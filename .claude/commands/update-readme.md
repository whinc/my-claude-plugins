---
allowed-tools: Bash(node .claude/scripts/update-readme.mjs)
description: Update plugin README files by scanning plugins directory and extracting metadata using Node.js with zx
---

## Context
- Current working directory: `${CLAUDE_PLUGIN_ROOT}`
- Plugins directory: `${CLAUDE_PLUGIN_ROOT}/plugins/`
- Main README: `${CLAUDE_PLUGIN_ROOT}/README.md`
- Current timestamp: !`date '+%Y-%m-%d %H:%M:%S'`

## Your task

Update the plugin marketplace README files using the refactored Node.js script that provides better readability, error handling, and maintainability compared to the original bash implementation.

## Execution

Run the Node.js script to:
1. Scan plugins and extract metadata using native JSON parsing
2. Generate standardized plugin entries with proper error handling
3. Update the main README.md with current plugin information
4. Create timestamped backups before making changes
5. Provide detailed logging and progress feedback

```bash
echo "🚀 Running README update script..."
node .claude/scripts/update-readme.mjs
```

The script provides these improvements over the bash version:
- **zx Library**: Uses Google's zx for powerful shell integration and simplified syntax
- **Better Error Handling**: Graceful failures with descriptive error messages using zx's `nothrow()` and `.ok` properties
- **JSON Parsing**: Built-in `fs.readJson()` instead of fragile regex matching
- **Shell Commands**: Native shell command execution with proper escaping and error handling
- **Template Literals**: Clean multiline strings for markdown generation
- **Organized Structure**: All Claude-related files centralized in `.claude/` directory
- **Comprehensive Logging**: Progress indicators and status updates
- **Backup Management**: Automatic backup creation using shell commands

The script will preserve all manually written content while updating the main marketplace README with accurate plugin information extracted from plugin.json files.