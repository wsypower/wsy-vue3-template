/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 19:19:06
 * @LastEditors: wsy
 */
import { execSync } from 'child_process'
import { readJSONSync } from 'fs-extra'

const { version: oldVersion } = readJSONSync('package.json')

execSync('npx bumpp', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (oldVersion === version) {
  process.exit()
}

execSync('git add .', { stdio: 'inherit' })
execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
