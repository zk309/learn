/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 11:06:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 11:29:34
 * @FilePath: \20_Vue2.0\18_发布模式关闭SourceMap.js
 */
// 在生产环境下，如果省略 devtool 选项，则最终生成的文件不包含 Source Map. 这能够防止原始代码
// 通过 Source Map 的形式暴露给别有所图的人.
19
// devtool: 'eval-source-map',  // 解决默认 Source Map 的问题.(开发模式开启,发布模式关闭.)