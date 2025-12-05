# Git Plugin

A Claude Code plugin that provides git utilities with support for Conventional Commits.

## Features

- **Conventional Commits**: Create standardized commit messages that work with semantic versioning
- **Smart Analysis**: Analyzes your changes to suggest appropriate commit types
- **Interactive Prompting**: Guides you through creating proper commit messages

## Commands

### `/commit`

Creates a git commit following the Conventional Commits specification.

## Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add https://raw.githubusercontent.com/your-org/marketplace/main/marketplace.json
```

Then install the plugin:

```bash
/plugin install git-plugin
```

## Usage

1. Stage your changes:
   ```bash
   git add .
   ```

2. Run the commit command:
   ```bash
   /commit
   ```

3. Follow the prompts to create your commit message

## Conventional Commits

This plugin follows the [Conventional Commits specification](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Example

```
feat(auth): add OAuth2 provider support

Implement authentication via Google and GitHub OAuth2 providers.
Users can now link multiple OAuth accounts to their profile.

Closes #123
```

## Contributing

Feel free to submit issues and pull requests to improve this plugin.

## License

MIT License - see LICENSE file for details.