/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-25 13:45:30
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-25 16:52:26
 * @FilePath: \22_微信小程序\45_全局配置项--tabBer.js
 */
// 什么是 tabBer ?
// tabBer 是移动端应用常见的页面效果, 用于实现页面的快速切换. 小程序中通常将其分为:
// 1. 底部 tabBer;
// 2. 顶部 tabBer;

// 注意: 
// tabBer 中只能配置最少 2 个, 最多 5 个 tab 页签;
// 当渲染顶部 tabBer 时, 不显示 icon, 只显示文本;

// --------------------------------------------------------------------------

// tabBer 的 6 个组成部分:
// 1. backgroundColor:  tabBer 的背景色;
// 2. borderStyle:      tabBer 上边框的颜色;
// 3. selectedIconPath: 选中时的图片路径;
// 4. selectedColor:    选中时的文字颜色;
// 5. iconPath:         未选中时的图片路径;
// 6. color:            未选中时的文字颜色;

// ---------------------------------------------------------------------------

// 详细配置项信息, 参考微信开放文档: https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar

// 注意: tabBar 的页面一定要放在全局配置文件的 Page 节点下的第一位.