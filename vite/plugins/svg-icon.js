/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-12-15 20:40:55
 * @LastEditTime: 2021-12-15 21:26:40
 * @LastEditors: wsy
 */
import svgIcon from 'vite-plugin-svg-icons'
import path from 'path'

export default function createSvgIcon(isBuild) {
  return svgIcon({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild
  })
}
