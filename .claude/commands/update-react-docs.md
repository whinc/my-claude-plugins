# Proposal

更新 react-docs-plugin 插件中的内容。

# Plan

1. 使用 repomix cli 获取 ahooks 仓库 https://github.com/alibaba/hooks/tree/master 的最新源码文件，并打包成 json 格式
2. 使用 skill-creator skills 更新 react-docs-plugin/skills 的内容

# Tasks

- run !`npx repomix@latest --remote alibaba/hooks --include "packages/**/*.zh-CN.md" --compress --style json` to package ahooks documentations in one json file.
- use skill-creator to update skill react-docs-plugin/skills based on json file pacakged last step.

# Verifiy

- Check if skill is updated and conver all aspects described by generated json file.
- Check the skill is well structured and following claude code skill best practices