---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git diff:*)
description: 'Prompt and workflow for generating conventional commit messages using a structured XML format. Guides users to create standardized, descriptive commit messages in line with the Conventional Commits specification, including instructions, examples, and validation.'
---

## Instructions

```xml
    <description>This file contains a prompt template for generating conventional commit messages. It provides instructions, examples, and formatting guidelines to help users write standardized, descriptive commit messages in accordance with the Conventional Commits specification.</description>
    <note>
```

## Workflow

**Follow these steps:**

1. Review your changes: `git status`
2. Inspect changes: `git diff`
3. Stage your changes: `git add <files>`
4. Construct your commit message using the XML structure below
5. Create your commit with: `git commit -m "your message"`

## Commit Message Structure

```xml
<commit-message>
    <type>feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert</type>
    <scope>()</scope>
    <description>A short, imperative summary of the change</description>
    <body>(optional: more detailed explanation)</body>
    <footer>(optional: e.g. BREAKING CHANGE: details, or issue references)</footer>
</commit-message>
```

## Examples

```xml
<examples>
    <example>feat(parser): add ability to parse arrays</example>
    <example>fix(ui): correct button alignment</example>
    <example>docs: update README with usage instructions</example>
</examples>
```

## Validation

```xml
<validation>
    <type>Must be one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert</type>
    <scope>Optional, but recommended for clarity.</scope>
    <description>Required. Use imperative mood (e.g., "add", not "added").</description>
    <body>Optional. Use for additional context.</body>
    <footer>Use for breaking changes or issue references.</footer>
</validation>
```

## Final Step

```xml
<final-step>
    <cmd>git commit -m "type(scope): description"</cmd>
    <note>Replace with your constructed message. Include body and footer if needed.</note>
</final-step>
```