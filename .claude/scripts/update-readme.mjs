#!/usr/bin/env zx

import { $, fs } from 'zx'

// Get plugin emoji based on name
function getPluginEmoji(name) {
  if (name.includes('git')) return '📝'
  if (name.includes('react') || name.includes('hooks')) return '⚛️'
  if (name.includes('taro')) return '🔷'
  if (name.includes('doc') || name.includes('docs')) return '📚'
  if (name.includes('meta') || name.includes('skill')) return '🚀'
  return '🔌'
}

// Generate usage examples for plugin
async function generateUsageExamples(plugin, pluginsDir, pluginDir) {
  const examples = []

  if (plugin.commands?.length > 0) {
    examples.push(`/${plugin.name}`)
  }

  if (plugin.skills?.length > 0) {
    const skillsDir = `${pluginsDir}/${pluginDir}/skills`
    if ((await $`test -d ${skillsDir}`.nothrow()).ok) {
      const skillDirs = (await $`ls -1 ${skillsDir}/ 2>/dev/null || true`).lines().filter(Boolean)
      if (skillDirs.length > 0) {
        examples.push(`skill: "${skillDirs[0]}"`)
      }
    }
  }

  return examples.length > 0 ? examples.join('\n') : 'No usage examples available'
}

// Generate key features based on plugin capabilities
function generateKeyFeatures(plugin) {
  const features = []
  const hasCommands = Boolean(plugin.commands?.length > 0)
  const hasSkills = Boolean(plugin.skills?.length > 0)

  if (hasCommands && hasSkills) {
    features.push('- **🔧 Commands**: Provides slash commands for direct execution')
    features.push('- **🧠 Skills**: Offers specialized workflow capabilities')
  } else if (hasCommands) {
    features.push('- **⚡ Commands**: Powerful slash commands for automation')
  } else if (hasSkills) {
    features.push('- **🎯 Skills**: Expert guidance and specialized workflows')
  }

  if (plugin.version) {
    features.push(`- **📦 Version**: ${plugin.version}`)
  }

  return features.join('\n')
}

// Generate plugin entry with template literals
function generatePluginEntry(plugin, useTable = false) {
  if (useTable) {
    return `| **${plugin.name}** | ${plugin.description || 'No description available'} | \`/plugin install ${plugin.name}\` | ${plugin.version || 'N/A'} |`
  }

  return `
#### ${plugin.emoji} ${plugin.name}

**${plugin.description || 'No description available'}**

**Installation:**
\`\`\`bash
/plugin install ${plugin.name}
\`\`\`

**Usage:**
\`\`\`bash
${plugin.usageExamples}
\`\`\`

**Key Features:**
${plugin.keyFeatures}

`
}

// Scan plugins directory using shell commands
async function scanPlugins(pluginsDir) {
  const plugins = []

  // Check if plugins directory exists
  if (!(await $`test -d ${pluginsDir}`.nothrow()).ok) {
    console.warn(`⚠️  Warning: Plugins directory ${pluginsDir} does not exist`)
    return plugins
  }

  // Get plugin directories using shell command
  const pluginDirs = (await $`ls -d ${pluginsDir}/*/ 2>/dev/null || true`).lines()
    .map(dir => dir.trim().split('/').filter(Boolean).pop())
    .filter(Boolean)

  for (const pluginDir of pluginDirs) {
    const pluginJsonPath = `${pluginsDir}/${pluginDir}/.claude-plugin/plugin.json`

    // Use zx's nothrow for safe file existence check
    if ((await $`test -f ${pluginJsonPath}`.nothrow()).ok) {
      try {
        // Use zx's built-in JSON reading
        const plugin = await fs.readJson(pluginJsonPath)

        if (!plugin.name) {
          console.warn(`⚠️  Warning: Could not extract name from ${pluginJsonPath}`)
          continue
        }

        plugins.push({
          ...plugin,
          directory: pluginDir,
          emoji: getPluginEmoji(plugin.name),
          usageExamples: await generateUsageExamples(plugin, pluginsDir, pluginDir),
          keyFeatures: generateKeyFeatures(plugin)
        })

        console.log(`✅ Found plugin: ${plugin.name}`)
      } catch (error) {
        console.warn(`⚠️  Warning: Error parsing ${pluginJsonPath}: ${error.message}`)
      }
    } else {
      console.warn(`⚠️  Warning: No plugin.json found in ${pluginDir}`)
    }
  }

  return plugins
}

// Create backup using shell commands
async function createBackup(readmePath) {
  if ((await $`test -f ${readmePath}`.nothrow()).ok) {
    const timestamp = (await $`date +%s`).toString().trim()
    const backupFile = `${readmePath}.backup.${timestamp}`
    await $`cp ${readmePath} ${backupFile}`
    console.log(`✅ Created backup: ${backupFile}`)
    return backupFile
  }
  return null
}

// Update README with plugin entries
async function updateReadme(readmePath, pluginEntries, pluginCount, useTable = false) {
  if (!(await $`test -f ${readmePath}`.nothrow()).ok) {
    console.error(`Error: README.md not found at ${readmePath}`)
    return false
  }

  try {
    // Read README content
    const readmeContent = await fs.readFile(readmePath, 'utf8')
    const lines = readmeContent.split('\n')

    // Find the Available Plugins section (with or without emoji prefix)
    const startLineIndex = lines.findIndex(line =>
      line.trim().includes('##') && line.toLowerCase().includes('available plugins')
    )

    if (startLineIndex === -1) {
      console.error("Error: Could not find '## Available Plugins' section in README.md")
      return false
    }

    // Find the next major section after Available Plugins
    const remainingLines = lines.slice(startLineIndex + 1)
    const nextSectionIndex = remainingLines.findIndex(line => line.startsWith('## '))

    const newContent = []

    // Keep everything up to and including the Available Plugins header
    for (let i = 0; i <= startLineIndex; i++) {
      newContent.push(lines[i])
    }

    // Add empty line and plugin entries
    newContent.push('')

    if (useTable) {
      newContent.push('| Plugin | Description | Installation | Version |')
      newContent.push('|--------|-------------|-------------|---------|')
    }

    newContent.push(pluginEntries)

    if (nextSectionIndex !== -1) {
      // Keep content from the next section onwards
      for (let i = nextSectionIndex; i < remainingLines.length; i++) {
        newContent.push(remainingLines[i])
      }
    } else {
      // Add footer if no next section found
      const currentDate = (await $`date +%Y-%m-%d`).toString().trim()
      newContent.push('')
      newContent.push('---')
      newContent.push('')
      newContent.push(`> 📊 _This marketplace is currently offering **${pluginCount}** plugins_`)
      newContent.push(`> _Last updated: ${currentDate}_`)
    }

    // Update plugin count and timestamp if they exist
    const currentDate = (await $`date +%Y-%m-%d`).toString().trim()
    for (let i = 0; i < newContent.length; i++) {
      newContent[i] = newContent[i]
        .replace(/> _Last updated:.*$/, `> _Last updated: ${currentDate}_`)
        .replace(/_currently offering \*\*[0-9]+\*\* plugins/, `_currently offering **${pluginCount}** plugins`)
    }

    // Write updated README
    await fs.writeFile(readmePath, newContent.join('\n'))
    console.log('✅ Main README.md updated successfully')
    return true
  } catch (error) {
    console.error(`Error updating README.md: ${error.message}`)
    return false
  }
}

// Main function
async function main() {
  const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT || process.cwd()
  const pluginsDir = `${pluginRoot}/plugins`
  const readmePath = `${pluginRoot}/README.md`

  // Check for table display argument
  const args = process.argv.slice(2)
  const useTable = args.includes('table')

  console.log('🚀 Starting README update...')
  console.log(`📂 Working directory: ${pluginRoot}`)
  console.log(`📋 Plugins directory: ${pluginsDir}`)
  console.log(`📊 Display format: ${useTable ? 'Table' : 'Cards'}`)

  // Create backup
  // await createBackup(readmePath)

  // Scan plugins
  console.log('🔍 Scanning plugins directory...')
  const plugins = await scanPlugins(pluginsDir)

  if (plugins.length === 0) {
    console.log('ℹ️  No plugins found')
    return
  }

  console.log(`✅ Found ${plugins.length} plugins:`)
  plugins.forEach(plugin => {
    console.log(`  • ${plugin.emoji} ${plugin.name}`)
  })

  // Generate plugin entries
  console.log('📝 Generating plugin entries...')
  const pluginEntries = plugins.map(plugin => generatePluginEntry(plugin, useTable)).join('\n')

  // Update README
  console.log('🔄 Updating README.md...')
  const success = await updateReadme(readmePath, pluginEntries, plugins.length, useTable)

  if (success) {
    console.log('')
    console.log('✨ README Update Complete! ✨')
    console.log('===============================')
    console.log(`• Plugins processed: ${plugins.length}`)
    console.log(`• Display format: ${useTable ? 'Table' : 'Cards'}`)
    console.log(`• Main README.md updated`)
    console.log(`• Timestamp: ${(await $`date '+%Y-%m-%d %H:%M:%S'`).toString().trim()}`)
    console.log('')
    console.log('To review changes: git diff README.md')
    console.log('To revert: git checkout -- README.md')
  } else {
    console.error('❌ Failed to update README.md')
    process.exit(1)
  }
}

// Run the script with zx error handling
try {
  await main()
} catch (p) {
  console.error(`❌ An unexpected error occurred: ${p.message || p}`)
  process.exit(1)
}