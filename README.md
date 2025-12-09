# Claude Code Plugin Marketplace

A curated collection of plugins that extend Claude Code's capabilities with custom commands and tools.

## 📋 Table of Contents

- [🚀 Quick Start](#quick-start)
- [📦 Available Plugins](#available-plugins)
- [📚 Resources](#resources)
- [🤝 Feedback & Contributing](#feedback--contributing)
- [📄 License](#license)

---

## Quick Start

### Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add whinc/my-claude-plugins
```

### Available Plugins

| Plugin | Description | Installation | Version |
|--------|-------------|-------------|---------|
| **ahooks** | Documentation and guidance for ahooks, a React Hooks library | `/plugin install ahooks` | 1.0.0 |
| **formily** | Comprehensive guide for using Formily as a React form solution with TypeScript and Ant Design | `/plugin install formily` | 1.0.0 |
| **git** | Git utilities including Conventional Commits support | `/plugin install git` | 1.0.2 |
| **taro** | Provides Taro framework documentation and expertise for multi-platform development | `/plugin install taro` | 0.1.0 |
## Resources

- [Repomix](https://github.com/yamadashy/repomix?tab=readme-ov-file#claude-code-plugins)

## Development

### Add a new skill for github repository

1. package latest repo documentations
```bash
sh ./scripts/repomix.sh
```

2. Open claude code and create a skill for packaged repo documentations through [skill development](https://github.com/anthropics/claude-code/blob/main/plugins/plugin-dev/README.md#7-skill-development) .

```bash
/plugin-dev:create-plugin ...
```

## License

This marketplace is open source. Please refer to individual plugin licenses for specific terms.

