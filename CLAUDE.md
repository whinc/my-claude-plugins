# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Development Setup

No build, test, or lint commands are needed - this is a pure markdown repository. Edit configuration files and markdown directly.

### Local Testing
```bash
/plugin marketplace add ./.claude-plugin/marketplace.json
```

## Plugin Architecture

### Core Components

1. **Marketplace Configuration** (`.claude-plugin/marketplace.json`)
   - Defines marketplace metadata
   - Lists available plugins with source paths
   - Entry point for Claude Code discovery

2. **Plugin Structure** (each plugin directory)
   - `.claude-plugin/plugin.json`: Plugin metadata and command list
   - `README.md`: User-facing documentation
   - `commands/`: Command implementations

3. **Commands** (markdown files with YAML frontmatter)
   - Define functionality in markdown
   - Declare tool permissions in YAML frontmatter
   - Use `!command` syntax for bash execution

### Plugin Directory Structure

[Claude Code Plugin](https://code.claude.com/docs/en/plugins) documentation.

```
custom-claude-plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata and command list
├── README.md                # User-facing documentation
└── commands/               # Command implementations
└── skills/                  # Skill implementations
└── hooks/                  # hooks
└── agents/                  # sub agents
```

## Development Workflow

### Adding New Plugins

1. **Create plugin directory**:
   ```bash
   mkdir your-plugin-name
   cd your-plugin-name
   ```

2. **Create plugin metadata**:
   ```json
   {
     "name": "your-plugin-name",
     "version": "1.0.0",
     "description": "Brief plugin description",
     "commands": ["./commands/your-command.md"]
   }
   ```

3. **Implement commands**:
   - Add YAML frontmatter with permissions
   - Write command logic in markdown
   - Use `!command` for bash execution
   - Follow git-plugin patterns

4. **Update marketplace**:
   ```json
   {
     "name": "your-plugin-name",
     "source": "./your-plugin-name"
   }
   ```

### Testing Strategy

1. **Permission Testing**: Verify each declared tool permission works
2. **Command Testing**: Test with various inputs and edge cases
3. **Integration Testing**: Install and test through marketplace
4. **Cross-platform Testing**: Test on different environments

## Critical Files

1. **`.claude-plugin/marketplace.json`** - Marketplace configuration
2. **`git-plugin/commands/commit.md`** - Command implementation reference
3. **`git-plugin/.claude-plugin/plugin.json`** - Plugin metadata template
4. **`git-plugin/README.md`** - Documentation template

## Performance Considerations

- Minimize bash command calls
- Use parallel tool execution when possible
- Cache expensive operations
- Avoid excessive file I/O
- Consider command response time
