/*
 * @Description: release.js
 * @Author: wsy
 * @Date: 2021-12-29 19:34:07
 * @LastEditTime: 2021-12-30 21:16:29
 * @LastEditors: wsy
 */
import { execSync } from 'child_process'
import { readJSONSync } from 'fs-extra'
const standardVersion = require('standard-version')

const { version: oldVersion } = readJSONSync('package.json')

execSync('npx bumpp', { stdio: 'inherit' })

const { version } = readJSONSync('package.json')

if (oldVersion === version) {
  process.exit()
}

standardVersion({
  noVerify: true,
  infile: 'docs/CHANGELOG.md',
  silent: true
})
  .then((res) => {
    console.log('成功拉！！！', res)
    // standard-version is done
  })
  .catch((err) => {
    console.error(`standard-version failed with message: ${err.message}`)
  })

// execSync('git add .', { stdio: 'inherit' })
// execSync(`standard-version --release-as ${version}`, { stdio: 'inherit' })
// execSync('git push --follow-tags', { stdio: 'inherit' })
// execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
// execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
