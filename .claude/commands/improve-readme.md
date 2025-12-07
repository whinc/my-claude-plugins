---
allowed-tools: Read, Write, Glob, Grep, Bash(ls:*), Bash(date:*), Bash(git:*), Bash(find:*), Bash(head:*), Bash(tail:*), Bash(cat:*), Bash(mkdir:*), Bash(cp:*), Bash(mv:*), Bash(rm:*)
description: Improve README files for human readability by enhancing structure, formatting, and content presentation
---

# Improve README Files for Human Readability

This command analyzes and improves README files throughout the project to make them more readable, visually appealing, and user-friendly.

## What it does

✅ **Structure Analysis**: Fixes heading hierarchy and organizes sections logically
✅ **Content Enhancement**: Replaces placeholders and generates meaningful content from plugin analysis
✅ **Formatting Standardization**: Ensures consistent code blocks, lists, and spacing
✅ **Visual Improvements**: Adds badges, icons, separators, and better navigation
✅ **Safety Features**: Backups files and validates changes before applying

## Task

Your goal is to improve all README files in the project for better human readability. This includes:

1. **Main README.md** - Enhance the project's main documentation
2. **Plugin READMEs** - Improve individual plugin documentation
3. **Content Generation** - Analyze plugin source code to generate specific examples and documentation

Focus on making documentation more readable while preserving existing content and meaning.

## Implementation Plan

### Phase 1: Discovery
Find all README files in the project:
- Main README.md in project root
- Plugin READMEs via marketplace.json discovery
- Any additional README.md files in subdirectories

### Phase 2: Analysis
For each README file, analyze:
- Heading structure and hierarchy
- Section organization and flow
- Content quality (placeholders, redundancies)
- Formatting consistency
- Visual elements and navigation

### Phase 3: Content Generation
For plugin READMEs with placeholders:
- Analyze plugin.json files for commands/skills structure
- Extract usage patterns from command/skill files
- Generate specific examples based on plugin functionality
- Create meaningful descriptions from source code analysis

### Phase 4: Improvements
Apply specific improvements based on file type:

**Main README.md**:
- Add quick navigation table
- Enhance plugin sections with visual hierarchy
- Improve installation instructions
- Add status badges and indicators
- Better feature presentation with icons

**Plugin READMEs**:
- Standardize structure (Quick Start, Features, Usage, Configuration, Examples, Contributing)
- Generate specific usage examples from plugin files
- Add practical installation instructions
- Include feature status badges
- Consistent emoji usage for sections

### Phase 5: Validation
- Ensure markdown syntax validity
- Validate internal links
- Test formatting consistency
- Generate improvement report

## Execution

```bash
#!/bin/bash

set -e

echo "🚀 Starting README improvement process..."
echo ""

# Create backup directory
BACKUP_DIR=".readme-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📁 Created backup directory: $BACKUP_DIR"

# Discover README files
README_FILES="README.md"
if [ -f ".claude-plugin/marketplace.json" ]; then
    PLUGINS=$(cat ".claude-plugin/marketplace.json" | jq -r '.plugins[].source' 2>/dev/null)
    if [ "$?" -eq 0 ] && [ "$PLUGINS" != "null" ] && [ "$PLUGINS" != "" ]; then
        for plugin in $PLUGINS; do
            if [ -f "$plugin/README.md" ]; then
                README_FILES="$README_FILES $plugin/README.md"
            fi
        done
    fi
fi

# Function to analyze plugin for content generation
analyze_plugin() {
    local plugin_dir="$1"
    local plugin_json="$plugin_dir/.claude-plugin/plugin.json"

    if [ ! -f "$plugin_json" ]; then
        return 1
    fi

    # Extract plugin information
    local name=$(cat "$plugin_json" | jq -r '.name // "Unknown Plugin"' 2>/dev/null)
    local desc=$(cat "$plugin_json" | jq -r '.description // "No description available"' 2>/dev/null)
    local version=$(cat "$plugin_json" | jq -r '.version // "1.0.0"' 2>/dev/null)

    # Check if it has commands or skills
    local commands=$(cat "$plugin_json" | jq -r '.commands[]? // empty' 2>/dev/null)
    local skills=$(cat "$plugin_json" | jq -r '.skills[]? // empty' 2>/dev/null)

    echo "PLUGIN_NAME=$name"
    echo "PLUGIN_DESC=$desc"
    echo "PLUGIN_VERSION=$version"

    # Generate usage examples from commands/skills
    if [ -n "$commands" ]; then
        echo "PLUGIN_TYPE=Command"
        for cmd in $commands; do
            if [ -f "$plugin_dir/$cmd" ]; then
                # Extract command name from file path
                local cmd_name=$(basename "$cmd" .md)
                echo "COMMAND_$cmd_name=$cmd"
            fi
        done
    fi

    if [ -n "$skills" ]; then
        echo "PLUGIN_TYPE=Skill"
        for skill in $skills; do
            if [ -f "$plugin_dir/$skill" ]; then
                # Extract skill name from file path
                local skill_name=$(basename "$skill" .md)
                echo "SKILL_$skill_name=$skill"
            fi
        done
    fi
}

# Function to improve main README
improve_main_readme() {
    local file="$1"
    echo "📝 Improving main README: $file"

    # Read current content
    local content=$(cat "$file")

    # Check if quick navigation exists
    if ! echo "$content" | grep -q "## 📋 Table of Contents"; then
        # Add quick navigation after main header
        local new_content=$(echo "$content" | sed '/^# /a\\
## 📋 Table of Contents\\
\\n- [🚀 Quick Start](#-quick-start)\\n- [📦 Available Plugins](#-available-plugins)\\n- [🛠️ Installation](#️-installation)\\n- [💡 Usage](#-usage)\\n- [🤝 Contributing](#-contributing)\\n\\n')
        content="$new_content"
    fi

    # Enhance plugin sections
    content=$(echo "$content" | sed 's/^## Available Plugins$/## 📦 Available Plugins/')

    # Add visual separators and improvements
    content=$(echo "$content" | sed 's/^---$/\\n---\\n/g')

    echo "$content" > "$file"
}

# Function to improve plugin README
improve_plugin_readme() {
    local file="$1"
    local plugin_dir=$(dirname "$file")

    echo "📝 Improving plugin README: $file"

    # Analyze plugin for content generation
    local plugin_info=$(analyze_plugin "$plugin_dir")
    eval "$plugin_info"

    # Read current content
    local content=$(cat "$file")

    # Check if it's mostly placeholder content
    if echo "$content" | grep -qi "placeholder\|coming soon\|todo\|tbd"; then
        echo "  🔄 Detected placeholder content, generating from plugin analysis..."

        # Generate new content
        cat > "$file" << EOF
# $PLUGIN_NAME

$PLUGIN_DESC

## 🚀 Quick Start

\`\`\`bash
# Clone this repository
git clone https://github.com/your-username/my-claude-plugins.git
cd my-claude-plugins

# Install the plugin
cp -r $plugin_dir ~/.claude/plugins/
\`\`\`

## ✨ Features

EOF

        # Add features based on plugin type
        if [ "$PLUGIN_TYPE" = "Command" ]; then
            echo "- 📋 Powerful slash commands for enhanced productivity" >> "$file"
            echo "- ⚡ Fast and efficient command execution" >> "$file"
            echo "- 🔧 Configurable options and settings" >> "$file"
        elif [ "$PLUGIN_TYPE" = "Skill" ]; then
            echo "- 🧠 Advanced AI-powered capabilities" >> "$file"
            echo "- 🎯 Specialized task automation" >> "$file"
            echo "- 🔍 Intelligent content analysis" >> "$file"
        fi

        cat >> "$file" << EOF

## 📖 Usage

EOF

        # Add specific usage examples
        if [ "$PLUGIN_TYPE" = "Command" ]; then
            echo "This plugin provides the following commands:" >> "$file"
            echo "" >> "$file"
            for cmd_var in $(set | grep "^COMMAND_" | cut -d= -f1); do
                local cmd_path="${!cmd_var}"
                local cmd_name=$(echo "$cmd_var" | sed 's/COMMAND_//' | tr '[:upper:]' '[:lower:]')
                echo "### /$cmd_name" >> "$file"
                echo "" >> "$file"
                echo "Use the \`/$cmd_name\` command to [describe what this command does]." >> "$file"
                echo "" >> "$file"
            done
        fi

        cat >> "$file" << EOF

## ⚙️ Configuration

No configuration required - the plugin works out of the box!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
EOF
    else
        # Improve existing content
        # Add emojis to sections
        content=$(echo "$content" | sed 's/^## Quick Start$/## 🚀 Quick Start/')
        content=$(echo "$content" | sed 's/^## Features$/## ✨ Features/')
        content=$(echo "$content" | sed 's/^## Usage$/## 📖 Usage/')
        content=$(echo "$content" | sed 's/^## Installation$/## 📦 Installation/')
        content=$(echo "$content" | sed 's/^## Configuration$/## ⚙️ Configuration/')
        content=$(echo "$content" | sed 's/^## Examples$/## 💡 Examples/')
        content=$(echo "$content" | sed 's/^## Contributing$/## 🤝 Contributing/')
        content=$(echo "$content" | sed 's/^## License$/## 📄 License/')

        # Fix installation paths
        content=$(echo "$content" | sed 's|~/.claude/plugins/plugin-name|~/.claude/plugins/'"$(basename "$plugin_dir")"'|g')

        echo "$content" > "$file"
    fi
}

# Process each README file
PROCESSED_COUNT=0
IMPROVEMENTS_MADE=0

for readme in $README_FILES; do
    if [ -f "$readme" ]; then
        echo ""
        echo "🔍 Processing: $readme"

        # Backup original file
        backup_name="$(basename $(dirname "$readme"))-$(basename "$readme")"
        cp "$readme" "$BACKUP_DIR/$backup_name"

        # Determine file type and improve accordingly
        if [ "$readme" = "README.md" ]; then
            improve_main_readme "$readme"
            ((IMPROVEMENTS_MADE++))
        else
            improve_plugin_readme "$readme"
            ((IMPROVEMENTS_MADE++))
        fi

        ((PROCESSED_COUNT++))
        echo "✅ Improved: $readme"
    fi
done

echo ""
echo "📊 Summary:"
echo "- Files processed: $PROCESSED_COUNT"
echo "- Improvements made: $IMPROVEMENTS_MADE"
echo "- Backup created: $BACKUP_DIR"
echo ""
echo "🎉 All README files have been improved for better readability!"
echo ""
echo "💡 Tip: Review the changes and if you're satisfied, you can remove the backup directory:"
echo "   rm -rf $BACKUP_DIR"
```

## Usage

Run `/improve-readme` to enhance all README files in the project for better human readability.

The command will:
1. Automatically discover all README files
2. Analyze them for readability issues
3. Generate content from plugin analysis where needed
4. Apply improvements for better structure and formatting
5. Create backups before making changes
6. Report all improvements made