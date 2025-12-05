---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git diff:*), Bash(git log:*), Bash(git ls-files:*)
description: Create a git commit following Conventional Commits specification
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Based on the above changes, create a single git commit following the Conventional Commits specification. Analyze the changes to automatically determine the appropriate commit type, scope, and description.

### Conventional Commits Analysis Logic:

**1. Determine Commit Type:**
- `feat`: New features, additions, breaking changes
  - Keywords: add, create, implement, new, introduce, support
  - File patterns: API files, routes, controllers, components, public interfaces
- `fix`: Bug fixes, error corrections
  - Keywords: fix, bug, error, issue, resolve, correct, patch
  - File patterns: Any files with bug-related changes
- `docs`: Documentation changes
  - File patterns: README.md, *.md, docs/**, *.txt (documentation)
- `style`: Code formatting, style changes without logic changes
  - Keywords: format, lint, style, whitespace, indentation
  - File patterns: *.css, *.scss, style files without functional changes
- `refactor`: Code refactoring without functional changes
  - Keywords: refactor, reorganize, extract, move, rename (structure)
  - File patterns: Reorganization without feature/bug intent
- `perf`: Performance improvements
  - Keywords: optimize, performance, speed, cache, improve
- `test`: Test additions, modifications
  - File patterns: *.test.js, *.spec.ts, **/test/**, **/__tests__/**
- `build`: Build system, dependency management
  - File patterns: package.json, pom.xml, requirements.txt, *.gradle, Makefile
- `ci`: CI/CD configuration changes
  - File patterns: .github/**, .gitlab-ci.yml, Dockerfile, CI configuration
- `chore`: Maintenance, updates, configuration
  - Keywords: update, version, bump, remove, clean
  - File patterns: Config files, dependencies (non-breaking updates)

**2. Extract Scope:**
- From file paths: Extract directory/module names (e.g., "auth", "api", "ui", "config")
- From file types: Technical scope (e.g., "deps", "tests", "docs", "types")
- If multiple scopes: Use the most common or "core" if unclear
- Examples:
  - Changes to `src/auth/login.js` → scope: "auth"
  - Changes to `package.json` → scope: "deps"
  - Changes to multiple UI components → scope: "ui"
  - Changes to API routes → scope: "api"

**3. Generate Description:**
- Use imperative mood (add, fix, update, not adding, fixing)
- Be concise but descriptive (max 72 characters for first line)
- Focus on what changed, not why
- Include key technical details if space allows

**4. Optional Body:**
- Provide additional context if changes are complex
- Explain motivation or approach if non-obvious
- Reference related issues or breaking changes

**Implementation Strategy:**
1. Analyze git diff to identify changed files and content patterns
2. Match file patterns and keywords to determine primary commit type
3. Extract scope from file paths and patterns
4. Generate concise description based on main changes
5. Create complete Conventional Commits message
6. Stage all changes and commit with the generated message

You have the capability to call multiple tools in a single response. Analyze the changes, generate the Conventional Commits message, and create the commit using a single message. Do not use any other tools or do anything else. Do not send any other text or messages besides these tool calls.
