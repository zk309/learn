/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-27 02:26:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-27 02:44:42
 * @FilePath: \22_微信小程序\61_页面事件---上拉加载.js
 */
// 什么是上拉触底?
// 上拉触底是移动端的专有名词, 通过手指在屏幕上的上拉滑动操作, 从而加载更多数据的行为.

// 监听页面的上拉触底事件:
// 通过 onReachBottom() 函数可监听当前页面的上拉触底事件.
/****
 *onReachBottom() {
    console.log('触发了上拉触底事件.')
  },
 */

// 配置上拉触底距离:
// 上拉触底距离指的是触发上拉触底事件, 滚动条距离页面底部的距离.
// 可以在全局或页面的 .json 配置文件中, 通过 onReachBottomDistance 属性来配置上拉触底距离.
// 小程序默认的触底距离是 50px, 在实际开发中, 可以根据自己的需求修改这个默认值.