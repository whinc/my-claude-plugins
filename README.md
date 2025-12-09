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

### Available Plugins


#### ⚛️ ahooks

**Documentation and guidance for ahooks, a React Hooks library**

**Installation:**
```bash
/plugin install ahooks
```

**Usage:**
```bash
No usage examples available
```

**Key Features:**
- **📦 Version**: 1.0.0


#### 🔌 formily

**Comprehensive guide for using Formily as a React form solution with TypeScript and Ant Design**

**Installation:**
```bash
/plugin install formily
```

**Usage:**
```bash
No usage examples available
```

**Key Features:**
- **📦 Version**: 1.0.0


#### 📝 git

**Git utilities including Conventional Commits support**

**Installation:**
```bash
/plugin install git
```

**Usage:**
```bash
No usage examples available
```

**Key Features:**
- **📦 Version**: 1.0.2


#### 🔷 taro

**Provides Taro framework documentation and expertise for multi-platform development**

**Installation:**
```bash
/plugin install taro
```

**Usage:**
```bash
No usage examples available
```

**Key Features:**
- **📦 Version**: 0.1.0


## Resources

- [Repomix](https://github.com/yamadashy/repomix?tab=readme-ov-file#claude-code-plugins)

## Development

### Add a new skill for github repository

1. package latest repo documentations
```bash
sh ./scripts/repomix.sh
```

2. Open claude code and create a skill for packaged repo documentations through [skill development](https://github.com/anthropics/claude-code/blob/main/plugins/plugin-dev/README.md#7-skill-development) .

```
create a kill ....
update skill 
/plugin-dev:create-plugin ...
```

### Plugin directories of current repository

- plugins:
    - <plugin_name> 
        - .claude-plugin
            - plugin.json
        - skills
            - <skill_name>

## License

This marketplace is open source. Please refer to individual plugin licenses for specific terms.

---

*Last updated: 2025-12-06 16:02:30*
*Plugin count: 3*

