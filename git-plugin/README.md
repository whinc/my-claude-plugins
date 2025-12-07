# Git Plugin

**Git utilities with intelligent Conventional Commits support**

## 🚀 Quick Start

### Installation

Add this marketplace to Claude Code:

```bash
/plugin marketplace add whinc/my-claude-plugins
```

Then install the plugin:

```bash
/plugin install git-plugin
```

## ✨ Features

- **📋 Conventional Commits**: Create standardized commit messages compatible with semantic versioning
- **🧠 Smart Analysis**: Automatically analyzes changes to determine appropriate commit types and scopes
- **🎯 Type Detection**: Identifies feat, fix, docs, style, refactor, perf, test, build, ci, and chore commits
- **⚡ Context-Aware**: Examines git status, diffs, branch, and recent commits for intelligent suggestions
- **🔍 Scope Extraction**: Derives commit scope from file paths and directory structure
- **💡 Interactive Guidance**: Walks you through creating proper commit messages with examples

## 📖 Available Commands

### /commit

Creates a git commit following the Conventional Commits specification with intelligent analysis.

**Smart Analysis Features**:
- **Automatic Type Detection**: Analyzes file changes and keywords to determine commit type
- **Scope Extraction**: Identifies affected modules from directory structure (auth, api, ui, config)
- **Context-Aware Suggestions**: Uses recent commit history to maintain consistency
- **Keyword Pattern Matching**: Detects intent from code comments and function names

**What the Command Analyzes**:
- Current git status (staged/unstaged files)
- Complete git diff (all changes)
- Current branch context
- Recent commit history (last 10 commits)
- File patterns and keywords in changes

## 📋 Commit Types

The plugin automatically determines the most appropriate commit type:

### `feat` - New Features
**Keywords**: add, create, implement, new, introduce, support
**File Patterns**: API files, routes, controllers, components, public interfaces

### `fix` - Bug Fixes
**Keywords**: fix, bug, error, issue, resolve, correct, patch
**File Patterns**: Any files with bug-related changes

### `docs` - Documentation
**File Patterns**: README.md, *.md, docs/**, *.txt (documentation files)

### `style` - Code Style
**Keywords**: format, lint, style, whitespace, indentation
**File Patterns**: *.css, *.scss, style files without functional changes

### `refactor` - Code Refactoring
**Keywords**: refactor, restructure, reorganize, optimize, improve
**File Patterns**: Code changes without feature additions or bug fixes

### `perf` - Performance
**Keywords**: performance, speed, optimize, cache, memory
**File Patterns**: Performance-related improvements

### `test` - Testing
**File Patterns**: *.test.*, *.spec., test/, tests/, __tests__/

### `build` - Build System
**File Patterns**: package.json, webpack, rollup, build scripts

### `ci` - Continuous Integration
**File Patterns**: GitHub Actions, CI/CD configuration files

### `chore` - Maintenance
**Keywords**: update, upgrade, dependency, maintenance
**File Patterns**: Development dependencies, tool configuration

## 💡 Usage Examples

### Basic Usage
1. Stage your changes:
   ```bash
   git add .
   ```

2. Run the commit command:
   ```bash
   /commit
   ```

3. The command will analyze your changes and suggest an appropriate commit message

### Example Commit Messages Generated

**Feature Addition**:
```
feat(auth): add OAuth2 provider support

Implement authentication via Google and GitHub OAuth2 providers.
Users can now link multiple OAuth accounts to their profile.

Closes #123
```

**Bug Fix**:
```
fix(api): resolve user authentication timeout issue

Adjust token refresh logic to prevent premature session expiration.
Fixes intermittent login failures reported by users.
```

**Documentation Update**:
```
docs: update API documentation with new endpoints

Add comprehensive documentation for the v2 API endpoints.
Include request/response examples and error handling.
```

**Performance Improvement**:
```
perf(database): optimize query performance for user listings

Add database indexes and implement query result caching.
Reduce average response time from 200ms to 50ms.
```

## 🔧 Advanced Features

### Automatic Scope Detection
The plugin extracts scope from your directory structure:
- `auth/` changes → `auth:` scope
- `api/users/` changes → `api(users):` scope
- `components/Header/` changes → `components(header):` scope
- `config/` changes → `config:` scope

### Breaking Change Detection
Automatically identifies breaking changes and adds appropriate footers:
```
feat(api)!: change user response structure

Update user endpoint to return new standardized format.
This is a breaking change for existing API consumers.

BREAKING CHANGE: User object now includes `profile` field instead of `details`
```

### Issue Integration
Automatically links to GitHub/GitLab issues when references are found:
```
fix(auth): resolve password reset token validation

Fixes #145
```

## 🎯 Best Practices

The plugin encourages Conventional Commits best practices:
- **Imperative Mood**: Use "add" not "added" or "adds"
- **Lowercase**: Keep descriptions in lowercase
- **No Period**: Don't end description with a period
- **Clear Scope**: Be specific about what part of the codebase is affected
- **Descriptive Body**: Provide context for complex changes in the body

## 🔍 Troubleshooting

**Common Issues and Solutions**:

1. **Command doesn't run**: Make sure the plugin is installed with `/plugin install git-plugin`
2. **Wrong commit type**: The plugin analyzes keywords and file patterns - you can override suggestions if needed
3. **Missing scope**: If the plugin doesn't detect a scope, you can add one manually
4. **Empty commit message**: Make sure you have staged changes with `git add` before running `/commit`

## 📚 Conventional Commits Specification

This plugin follows the [Conventional Commits specification](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Benefits**:
- **Automated Versioning**: Works with semantic-release and similar tools
- **Change Log Generation**: Automatic CHANGELOG generation
- **Commit History**: Clear, searchable commit history
- **Team Collaboration**: Consistent commit messages across teams

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional commit type detection patterns
- Enhanced scope extraction logic
- Integration with other version control systems
- Custom commit message templates

## 📄 License

MIT License

---

**Ready to improve your git workflow?** Use `/commit` to create intelligent, standardized commit messages that work seamlessly with semantic versioning and automated release tools.