# Taro Plugin

Provides comprehensive Taro framework documentation and expertise to Claude Code for multi-platform development.

## Overview

The Taro plugin enhances Claude Code with deep knowledge of the Taro framework, a multi-platform development solution that enables building applications for WeChat Mini Programs, H5, React Native, and other platforms from a single codebase.

## Features

- **Auto-loading Documentation**: Automatically provides Taro documentation when you mention Taro in your questions
- **Comprehensive Coverage**: Includes Taro APIs, components, configuration, and development guides
- **Progressive Context**: Documentation organized by topic for efficient context loading

## Installation

### Local Installation

Copy the plugin to your project:

```bash
cp -r plugins/taro /path/to/your/project/.claude-plugin/
```

Or use globally:

```bash
cc --plugin-dir /path/to/plugins/taro
```

## Usage

The taro-docs skill activates automatically when you mention Taro in your development questions:

**Example queries that trigger the skill:**
- "How do I use Taro.request to make API calls?"
- "What Taro components are available for navigation?"
- "Help me configure my Taro project"
- "Show me how to create a Taro page"
- "What are the Taro lifecycle methods?"

The skill provides context-aware documentation to help you build Taro applications effectively.

## Plugin Components

### Skills

- **taro-docs**: Provides Taro framework documentation including:
  - Taro APIs reference
  - Component documentation
  - Configuration guides
  - Development best practices

## Documentation Organization

Documentation is organized into focused topics:
- **APIs**: Comprehensive Taro API reference
- **Components**: Taro component documentation
- **Configuration**: Project configuration and setup
- **Guides**: Development guides and tutorials

## Prerequisites

None. This plugin provides documentation only and doesn't require any external dependencies.

## Version

Current version: 0.1.0

## License

MIT
