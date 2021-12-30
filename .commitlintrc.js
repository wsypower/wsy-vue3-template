/*
 * @Description: 测试版本号的一些输入,sda
 * @Author: wsy
 * @Date: 2021-12-17 16:03:11
 * @LastEditTime: 2021-12-27 21:45:38
 * @LastEditors: wsy
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'init',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ],
    'subject-case': [0]
  }
}
