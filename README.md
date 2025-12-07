# Claude Code Plugin Marketplace

A curated collection of plugins that extend Claude Code's capabilities with custom commands and tools.

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📦 Available Plugins](#-available-plugins)
- [📚 Resources](#-resources)
- [🤝 Feedback & Contributing](#-feedback--contributing)
- [📄 License](#-license)

---

## Quick Start

### Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add whinc/my-claude-plugins
```

> **Note**: Use the local path for development or replace with your repository URL when deploying.

### Available Plugins

> **Note**: This marketplace offers both plugins (with slash commands) and skills (with specialized workflows). Plugins are installed once, while skills are invoked as needed.

---

#### 🚀 meta-skill-plugin
**Skill creation framework with comprehensive guidance**

**Installation:**
```bash
/plugin install meta-skill-plugin
```

**Usage:**
```bash
skill: "skill-creator"
```

**Key Features:**
- **📚 Skill Creation Framework**: 357-line comprehensive workflow for building effective skills
- **🎯 Best Practices**: Token-efficient design principles and patterns
- **🔧 Progressive Disclosure**: Organized content structure with minimal metadata + detailed references
- **📋 Workflow Templates**: Proven patterns for different domains and use cases

---

#### ⚛️ react-docs-plugin
**React documentation specialist with ahooks expertise**

**Installation:**
```bash
/plugin install react-docs-plugin
```

**Usage:**
```bash
skill: "ahooks"
```

**Key Features:**
- **🎣 76+ React Hooks**: Complete ahooks library coverage across 9 categories
- **📚 Comprehensive Documentation**: 8 specialized reference files for hooks, patterns, and best practices
- **🔄 State Management**: Expertise in useEffect, useState, data fetching, and performance optimization
- **💡 Real Examples**: Practical usage patterns and migration guidance

---

#### 📝 git-plugin
**Git utilities with Conventional Commits support**

**Installation:**
```bash
/plugin install git-plugin
```

**Usage:**
```bash
/commit
```

**Key Features:**
- **📋 Conventional Commits**: Create standardized commit messages that work with semantic versioning
- **🧠 Smart Analysis**: Analyzes your changes to suggest appropriate commit types and scopes
- **🎯 Interactive Prompting**: Guides you through creating proper commit messages
- **⚡ Automated Detection**: Identifies feat/fix/docs/refactor based on file changes

---



## Resources

- [Repomix](https://github.com/yamadashy/repomix?tab=readme-ov-file#claude-code-plugins)

## Feedback & Contributing

- **Report Issues**: Found a bug? Please open an issue on GitHub
- **Request Features**: Have an idea for a new plugin? Let us know!
- **Contributing**: Interested in contributing? Feel free to submit a Pull Request or open an issue on GitHub

## License

This marketplace is open source. Please refer to individual plugin licenses for specific terms.

---

*Last updated: 2025-12-06 16:02:30*
*Plugin count: 3*

