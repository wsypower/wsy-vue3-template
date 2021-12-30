/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-15 21:26:22
 * @LastEditors: wsy
 */
import components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default function createComponents() {
  return components({
    resolvers: IconsResolver(),
    dirs: ['src/components']
  })
}
