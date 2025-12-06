# Claude Code Plugin Marketplace

A curated collection of plugins that extend Claude Code's capabilities with custom commands and tools.

## Quick Start

### Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add ./.claude-plugin/marketplace.json
```

> **Note**: Use the local path for development or replace with your repository URL when deploying.

### Available Plugins

> **Note**: This marketplace offers both plugins (with slash commands) and skills (with specialized workflows). Plugins are installed once, while skills are invoked as needed.

#### git-plugin
Git utilities with Conventional Commits support.

**Installation:**
```bash
/plugin install git-plugin
```

**Usage:**
```bash
/commit
```

Creates standardized git commits by analyzing your changes and suggesting appropriate commit types.

#### meta-skill-plugin
A comprehensive framework for creating custom skills that extend Claude's capabilities.

**Installation:**
```bash
/plugin install meta-skill-plugin
```

**Usage:**
```bash
skill: "skill-creator"
```

Provides detailed guidance for creating effective skills, including:
- Step-by-step skill creation process
- Best practices for skill organization
- Anatomy of a skill with bundled resources
- Scripts, references, and asset management
- Progressive disclosure design principles

Transform Claude from a general-purpose agent into a specialized agent equipped with custom workflows and domain expertise.

## Feedback & Contributing

- **Report Issues**: Found a bug? Please open an issue on GitHub
- **Request Features**: Have an idea for a new plugin? Let us know!
- **Contributing**: Interested in contributing? See [developer documentation](./CLAUDE.md)

## License

This marketplace is open source. Please refer to individual plugin licenses for specific terms.