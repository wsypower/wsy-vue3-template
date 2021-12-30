/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 21:33:10
 * @LastEditors: wsy
 */
import path from 'path'
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
  infile: path.resolve('./CHANGELOG.md'),
  silent: true
})
  .then(() => {
    // console.error('standard-version failed with message: ')
    console.log(
      boxen(`${chalk('\n\n🎉 ')}${chalk.green.bold('project release success!\n')}`, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'green'
      })
    )
    // console.log(chalk('\n\n🎉  ') + chalk.green('vite release success!\n'))
  })
  .catch((err) => {
    console.error(`standard-version failed with message: ${err.message}`)
  })

// execSync('git add .', { stdio: 'inherit' })
// execSync(`standard-version --release-as ${version}`, { stdio: 'inherit' })
// execSync('git push --follow-tags', { stdio: 'inherit' })
// execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
// execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
