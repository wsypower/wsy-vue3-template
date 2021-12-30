/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 21:54:35
 * @LastEditors: wsy
 */
import { execSync } from 'child_process'
import { readJSONSync } from 'fs-extra'
import chalk from 'chalk'
import boxen from 'boxen'
const standardVersion = require('standard-version')

const { version: oldVersion } = readJSONSync('package.json')

execSync('npx bumpp', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (oldVersion === version) {
  process.exit()
}

standardVersion({
  releaseAs: version,
  silent: true
})
  .then(() => {
    execSync('git push --follow-tags', { stdio: 'inherit' })
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
    console.error(
      `${chalk.red('standard-version failed with message:')}
      ${boxen(`${chalk('\n\n❌ ')}${chalk.green.bold(`${err.message}!\n`)}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'red'
      })} ${err.message}`
    )
  })
