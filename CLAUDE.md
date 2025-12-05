# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Claude Code plugin marketplace** - a collection of plugins that extend Claude Code's capabilities with custom commands and tools. It follows the official [Claude Code Plugin Marketplaces documentation](https://code.claude.com/docs/en/plugin-marketplaces).

The marketplace uses a simple, markdown-based architecture with no build dependencies - just configuration files and well-structured documentation.

## Common Commands

### For Users
Add this marketplace to Claude Code:
```bash
/plugin marketplace add https://raw.githubusercontent.com/whincwu/my-claude-plugins/main/.claude-plugin/marketplace.json
```

Note: Replace with your actual repository URL when deploying.

Install plugins from the marketplace:
```bash
/plugin install git-plugin
```

### For Developers
No build, test, or lint commands are needed - this is a pure markdown repository. Simply edit the configuration files and markdown directly.

## Architecture

### Repository Structure
```
my-claude-plugins/
├── .claude-plugin/marketplace.json    # Marketplace configuration
├── git-plugin/                        # Plugin directory
│   ├── .claude-plugin/plugin.json     # Plugin metadata
│   ├── README.md                      # Plugin documentation
│   └── commands/
│       └── commit.md                  # Command implementation
└── CLAUDE.md                          # This file
```

### Core Components

1. **Marketplace Configuration** (`.claude-plugin/marketplace.json`)
   - Defines marketplace metadata (name, description, version, owner)
   - Lists available plugins with their source paths
   - Entry point for Claude Code to discover plugins

2. **Plugin Structure** (each plugin directory)
   - `.claude-plugin/plugin.json`: Plugin metadata and command list
   - `README.md`: Plugin-specific documentation
   - `commands/`: Directory containing command implementations

3. **Commands** (markdown files with YAML frontmatter)
   - Define command functionality in markdown
   - Declare required tool permissions in YAML frontmatter
   - Use embedded bash commands with `!` syntax for dynamic execution

## Security: Tool Permissions

**CRITICAL**: Every command must explicitly declare required tools in YAML frontmatter:

```yaml
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Command description
---
```

Security best practices:
- Be specific with tool permissions (avoid broad wildcards)
- Follow principle of least privilege
- Test permissions thoroughly before deployment
- Never request broad permissions like `Bash(*)`

## Adding New Plugins

1. **Create plugin directory**:
   ```bash
   mkdir your-plugin-name
   cd your-plugin-name
   ```

2. **Create plugin metadata** (`.claude-plugin/plugin.json`):
   ```json
   {
     "name": "your-plugin-name",
     "version": "1.0.0",
     "description": "Brief plugin description",
     "commands": ["./commands/your-command.md"]
   }
   ```

3. **Implement commands** (`commands/your-command.md`):
   - Add YAML frontmatter with permissions
   - Write command logic in markdown
   - Use `!command` syntax for embedded bash execution
   - Follow existing patterns from git-plugin

4. **Update marketplace** (`.claude-plugin/marketplace.json`):
   Add to the plugins array:
   ```json
   {
     "name": "your-plugin-name",
     "source": "./your-plugin-name"
   }
   ```

## Reference Implementation: git-plugin

The included `git-plugin` demonstrates best practices for plugin development.

### Key Features
- **Conventional Commits**: Automated commit message generation following specifications
- **Smart Analysis**: Analyzes changes to determine appropriate commit types (feat, fix, docs, etc.)
- **Constrained Permissions**: Only allows specific git operations for security
- **Type Detection**: Uses file patterns and keywords for intelligent categorization
- **Scope Extraction**: Derives commit scope from file paths

### Command Structure
Examine `git-plugin/commands/commit.md` to understand:
- How to structure command logic with Context and Task sections
- Permission declaration patterns
- Embedded bash execution syntax (`!` prefix)
- Multi-tool execution in single response for efficiency

## Development Workflow

1. **Local Testing**: Use `/plugin marketplace add` with local path for development
2. **Permission Validation**: Test each declared tool permission works as expected
3. **Command Testing**: Verify commands execute correctly and handle edge cases
4. **Documentation**: Ensure README.md is comprehensive for each plugin
5. **Version Management**: Update version numbers in plugin.json when making changes

## Current Plugins

### git-plugin
- **Purpose**: Git utilities with Conventional Commits support
- **Command**: `/commit` - Creates standardized git commits
- **Permissions**: Limited to specific git operations (git add, status, commit, diff, log, ls-files)
- **Features**: Smart type detection, scope extraction, automated analysis
- **Implementation**: See `git-plugin/commands/commit.md`

## Conventions

- Follow Conventional Commits specification for all changes
- Use imperative mood in commit messages
- Keep command descriptions concise and clear
- Document complex logic in comments
- Test across different environments
- Use semantic versioning for plugin versions