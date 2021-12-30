/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 21:37:37
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
  noVerify: true,
  silent: true
})
  .then(() => {
    execSync('git push --follow-tags', { stdio: 'inherit' })
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
    console.error(`standard-version failed with message: ${err.message}`)
  })
