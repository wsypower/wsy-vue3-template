/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-15 21:26:34
 * @LastEditors: wsy
 */
import Icons from 'unplugin-icons/vite'

export default function createIcons() {
  return Icons({
    autoInstall: true,
    scale: 1,
    defaultStyle: `
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        `
  })
}
