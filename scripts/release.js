/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2022-01-04 14:40:55
 * @LastEditors: wsy
 */
import { execSync } from 'child_process'
import { readJSONSync } from 'fs-extra'
import chalk from 'chalk'
import boxen from 'boxen'
import ora from 'ora'
const standardVersion = require('standard-version')

const { version: oldVersion } = readJSONSync('package.json')

execSync('npx bumpp', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (oldVersion === version) {
  process.exit()
}

const spinner = ora('Link to Git ...').start()

standardVersion({
  // changelogHeader: '# Wsy-Admin ChangeLog\n\n',
  releaseAs: version,
  silent: true,
  header: '# Wsy-Admin ChangeLog\n\n',
  types: [
    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'init', section: '🎉 Init | 初始化' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'build', section: '📦‍ Build System | 打包构建' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
    { type: 'ci', section: '👷 Continuous Integration | CI 配置' }
  ]
})
  .then(() => {
    execSync('git push --follow-tags', { stdio: 'inherit' })
    spinner.succeed('Git link successful!')
    // eslint-disable-next-line
    console.log(
      boxen(`${chalk('\n\n🎉 ')}${chalk.green.bold('project release success!\n')}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'green'
      })
    )
  })
  .catch((err) => {
    spinner.fail('Git link failed!')
    console.error(
      `${boxen(`${chalk('\n\n❌ ')}${chalk.red.bold(`${err.message}!\n`)}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'red'
      })}`
    )
  })
