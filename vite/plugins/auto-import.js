/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-13 20:13:01
 * @LastEditors: wsy
 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      {
        vuex: ['useStore']
      }
    ],
    dts: false
  })
}
