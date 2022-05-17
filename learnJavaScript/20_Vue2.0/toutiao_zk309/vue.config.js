/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-15 21:17:50
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 18:39:45
 * @FilePath: \toutiao\vue.config.js
 */
// 这个文件是 vue-cli 创建出来的项目配置文件
// 在 vue.config.js 这个配置文件中, 可以对整个项目的打包, 构建全局性的配置

// webpack 在进行打包的时候, 底层用到了 node.js
// 因此, 在 vue.config.js 配置文件中, 可以导入并使用 node.js 中的核心模块.
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）(从盘符开始的路径是绝对路径.)
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}
