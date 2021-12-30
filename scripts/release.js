/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 22:02:23
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
  releaseAs: version,
  silent: true
})
  .then(() => {
    execSync('git push --follow-tags', { stdio: 'inherit' })
    spinner.success('Git link successful!')
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
      `${chalk.red('standard-version failed with message:')}
      ${boxen(`${chalk('\n\n❌ ')}${chalk.red.bold(`${err.message}!\n`)}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'red'
      })}`
    )
  })
