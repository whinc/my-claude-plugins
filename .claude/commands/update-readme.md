---
allowed-tools: Read, Write, Glob, Grep, Bash(ls:*), Bash(date:*), Bash(git:*), Bash(find:*), Bash(head:*), Bash(tail:*)
description: Auto-generate complete plugin documentation by discovering all plugins from marketplace.json
---

## Context

- **Current date**: `!date`
- **Git status**: `!git status --porcelain`
- **Last commit**: `!git log -1 --format='%h %s'`

## Your task

Update the main README.md file to reflect the latest project status by auto-discovering all plugins from marketplace.json and generating complete documentation for them.

## Discovery Strategy

### Phase 1: Plugin Discovery
1. Read `.claude-plugin/marketplace.json` to get the official plugin list
2. For each plugin, locate and analyze:
   - `.claude-plugin/plugin.json` - Plugin metadata
   - `README.md` - Plugin documentation and usage examples
3. Extract key information:
   - Plugin name, version, description
   - Command vs Skill type (based on plugin.json structure)
   - Installation commands
   - Usage instructions
   - Key features

### Phase 2: Content Analysis
1. Parse existing README.md to identify sections to preserve:
   - Header and introduction
   - Quick Start section
   - Resources section
   - Feedback & Contributing section
   - License section
2. Identify sections to replace:
   - Available Plugins section (will be completely regenerated)

### Phase 3: README Generation
1. Generate comprehensive plugin documentation:
   - Sort plugins alphabetically
   - Include installation commands for each plugin
   - Provide clear usage instructions
   - Extract key features from plugin READMEs
2. Add project status information:
   - Total plugin count
   - Last update timestamp
   - Recent activity summary

### Phase 4: Intelligent Merge
1. Preserve existing custom content
2. Replace "Available Plugins" section with generated content
3. Ensure proper markdown formatting
4. Validate links and commands

## Implementation

```bash
# Step 1: Read marketplace configuration
echo "🔍 Discovering plugins from marketplace..."
MARKETPLACE_FILE=".claude-plugin/marketplace.json"

if [ ! -f "$MARKETPLACE_FILE" ]; then
    echo "❌ Error: marketplace.json not found"
    exit 1
fi

# Step 2: Parse marketplace and extract plugin list
echo "📋 Reading plugin list..."
PLUGINS=$(cat "$MARKETPLACE_FILE" | jq -r '.plugins[] | "\(.name)|\(.source)"')

# Step 3: Generate Available Plugins section
echo "📝 Generating plugin documentation..."
AVAILABLE_PLUGINS="> **Note**: This marketplace offers both plugins (with slash commands) and skills (with specialized workflows). Plugins are installed once, while skills are invoked as needed.

"

# Process each plugin
for PLUGIN_INFO in $PLUGINS; do
    PLUGIN_NAME=$(echo "$PLUGIN_INFO" | cut -d'|' -f1)
    PLUGIN_SOURCE=$(echo "$PLUGIN_INFO" | cut -d'|' -f2)

    echo "🔧 Processing plugin: $PLUGIN_NAME"

    PLUGIN_DIR="$PLUGIN_SOURCE"
    PLUGIN_JSON="$PLUGIN_DIR/.claude-plugin/plugin.json"
    PLUGIN_README="$PLUGIN_DIR/README.md"

    if [ ! -f "$PLUGIN_JSON" ]; then
        echo "⚠️  Warning: plugin.json not found for $PLUGIN_NAME"
        continue
    fi

    # Extract plugin metadata
    DESC=$(cat "$PLUGIN_JSON" | jq -r '.description // "No description available"')
    VERSION=$(cat "$PLUGIN_JSON" | jq -r '.version // "1.0.0"')

    # Determine plugin type and usage
    if cat "$PLUGIN_JSON" | jq -e '.commands' > /dev/null 2>&1; then
        TYPE="Plugin"
        # Get first command for usage example
        FIRST_CMD=$(cat "$PLUGIN_JSON" | jq -r '.commands[0]' 2>/dev/null | sed 's|./commands/||' | sed 's|\.md$||' || echo "")
        USAGE_EXAMPLE="/$FIRST_CMD"
    elif cat "$PLUGIN_JSON" | jq -e '.skills' > /dev/null 2>&1; then
        TYPE="Skill"
        # Get first skill for usage example
        FIRST_SKILL=$(cat "$PLUGIN_JSON" | jq -r '.skills[0]' 2>/dev/null | sed 's|./skills/||' | sed 's|\.md$||' || echo "")
        USAGE_EXAMPLE="skill: \"$FIRST_SKILL\""
    else
        TYPE="Plugin"
        USAGE_EXAMPLE="# Usage instructions in plugin README"
    fi

    # Generate plugin section
    AVAILABLE_PLUGINS="${AVAILABLE_PLUGINS}#### $PLUGIN_NAME
$DESC

**Installation:**
\`\`\`bash
/plugin install $PLUGIN_NAME
\`\`\`

**Usage:**
\`\`\`bash
$USAGE_EXAMPLE
\`\`\`

"

    # Extract additional features from plugin README if available
    if [ -f "$PLUGIN_README" ]; then
        # Look for features section or key benefits
        FEATURES=$(grep -A 5 -E "^(#+\s*)?(Features|Key Features|Benefits)" "$PLUGIN_README" 2>/dev/null | head -6 | grep -E "^-|^\*" | head -3 | sed 's/^[[:space:]]*- //' | sed 's/^[[:space:]]*\* //')

        if [ -n "$FEATURES" ]; then
            AVAILABLE_PLUGINS="${AVAILABLE_PLUGINS}**Key Features:**
"
            echo "$FEATURES" | while read -r feature; do
                AVAILABLE_PLUGINS="${AVAILABLE_PLUGINS}- $feature
"
            done
            AVAILABLE_PLUGINS="${AVAILABLE_PLUGINS}
"
        fi
    fi

done

# Step 4: Read current README and prepare merge
echo "🔄 Merging with existing README.md..."
CURRENT_README="README.md"

if [ ! -f "$CURRENT_README" ]; then
    echo "❌ Error: README.md not found"
    exit 1
fi

# Extract sections to preserve
HEADER=$(awk '/^## Quick Start/ {print "CUT_HERE"; exit} 1' "$CURRENT_README" | sed '/CUT_HERE/d')
QUICK_START=$(awk '/^## Quick Start/,/^## Available Plugins/ {if (!/^## Available Plugins/) print}' "$CURRENT_README")
RESOURCES_AND_FOOTER=$(awk '/^## Resources/,/^## License/ {if (!/^## License/) print} /^## License/ {print}' "$CURRENT_README")

# Generate new README
NEW_README="$HEADER

$QUICK_START

### Available Plugins

$AVAILABLE_PLUGINS

$RESOURCES_AND_FOOTER

---

*Last updated: $(date '+%Y-%m-%d %H:%M:%S')*
*Plugin count: $(echo "$PLUGINS" | wc -l | tr -d ' ')*
"

# Step 5: Write updated README
echo "💾 Writing updated README.md..."
echo "$NEW_README" > "$CURRENT_README"

# Step 6: Verification
echo "✅ Verification:"
echo "   - README.md updated successfully"
echo "   - Plugins documented: $(echo "$PLUGINS" | wc -l | tr -d ' ')"
echo "   - File size: $(wc -c < "$CURRENT_README") bytes"
echo "   - Last updated: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🎉 README.md has been successfully updated!"
```

## Verify

After execution, verify:
1. README.md has been updated with all plugins from marketplace.json
2. Plugin count matches marketplace.json
3. All installation commands are correct
4. Markdown formatting is valid
5. Existing custom content is preserved
6. Last updated timestamp is added