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
Git utilities including Conventional Commits support

**Installation:**
```bash
/plugin install git-plugin
```

**Usage:**
```bash
/commit
```

**Key Features:**
- **Conventional Commits**: Create standardized commit messages that work with semantic versioning
- **Smart Analysis**: Analyzes your changes to suggest appropriate commit types
- **Interactive Prompting**: Guides you through creating proper commit messages

#### meta-skill-plugin
A meta-plugin for creating skills

**Installation:**
```bash
/plugin install meta-skill-plugin
```

**Usage:**
```bash
skill: "skill-creator"
```

#### react-docs-plugin
React documentation and utilities plugin

**Installation:**
```bash
/plugin install react-docs-plugin
```

**Usage:**
```bash
skill: "ahooks/SKILL"
```



## Resources

- [Repomix](https://github.com/yamadashy/repomix?tab=readme-ov-file#claude-code-plugins)

## Feedback & Contributing

- **Report Issues**: Found a bug? Please open an issue on GitHub
- **Request Features**: Have an idea for a new plugin? Let us know!
- **Contributing**: Interested in contributing? See [developer documentation](./CLAUDE.md)

## License

This marketplace is open source. Please refer to individual plugin licenses for specific terms.

---

*Last updated: 2025-12-06 16:02:30*
*Plugin count: 3*

