/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-12-30 17:15:52
 * @LastEditTime: 2021-12-30 20:56:58
 * @LastEditors: wsy
 */
module.exports = {
  types: [
    { types: ['feat'], label: '✨ Features | 新功能' },
    { types: ['fix'], label: '🐛 Bug Fixes | Bug 修复' },
    { types: ['init'], label: '🎉 Init | 初始化' },
    { types: ['docs'], label: '✏️ Documentation | 文档' },
    { types: ['style'], label: '💄 Styles | 风格' },
    { types: ['refactor'], label: '♻️ Code Refactoring | 代码重构' },
    { types: ['perf'], label: '⚡ Performance Improvements | 性能优化' },
    { types: ['test'], label: '✅ Tests | 测试' },
    { types: ['revert'], label: '⏪ Revert | 回退' },
    { types: ['build'], label: '🚀 build | 构建/工程依赖/工具' },
    { types: ['ci'], label: '👷 Continuous Integration | CI 配置' }
  ],

  excludeTypes: ['chore'],

  renderTypeSection: function (label, commits) {
    let text = `\n#### ${label}\n`

    commits.forEach((commit) => {
      text += `- ${commit.subject}\n`
    })
    console.log(commits)
    return text
  },

  renderChangelog: function (release, changes) {
    const now = new Date()
    return `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + '\n\n'
  }
}
