/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 10:03:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-24 10:09:03
 * @FilePath: \22_微信小程序\34_if 和 hidden 的区别.js
 */
// wx:if 与 hidden 的对比:

// 1. 运行方式不同
//    wx:if 以动态创建和移除元素的方式, 控制元素的展示与隐藏
//    hidden 以切换样式的方式 (display: none/block), 控制元素的显示与隐藏.

// 2. 使用建议
//    频繁切换时, 建议使用 hidden
//    控制条件复杂时, 建议使用 wx:if 搭配 wx:elif, wx:else 进行展示与隐藏的切换.