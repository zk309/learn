/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-27 01:07:19
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 12:25:24
 * @FilePath: \22_微信小程序\60_页面事件---下拉刷新.js
 */
// 什么是下拉刷新?
// 下拉刷新是移动端的专有名词, 指的是通过手指在屏幕上的下拉滑动操作, 从而重新加载页面数据的行为.

// 启用下拉刷新的方式:
// 1. 全局开启下拉刷新: 在 app.json 的 window 节点中, 将 enablePullDownRefresh 设置为 true;
// 2. 局部开启下拉刷新: 在页面的 .json 配置文件中, 将 enablePullDownRefresh 设置为 true;
// 在实际开发中, 推荐使用局部开启下拉刷新.

// 配置下拉刷新窗口的样式:
// 1. backgroundColor         用来配置下拉刷新窗口的背景颜色, 仅支持 16 进制的颜色值;
// 2. backgroundTextStyle     用来配置下拉刷新 loading 的样式, 仅支持 dark 和 light;

// 监听页面的下拉刷新事件:
// 通过 onPullDownRefresh() 函数即可监听当前页面的下拉刷新事件.
/****
 * demo:
 *<view class="box">
    <text>{{ count }}</text>
    <button type="primary" bind:tap="add">+ 1</button>
  </view>


  页面的初始数据
  data: {
    count: 0
  },
  add(event) {
    this.setData({
      count: this.data.count + 1
    })
  },
  onPullDownRefresh() {
    // 下拉刷新, count 的值为 0
    this.setData({
      count: 0
    })
  },
*/

// 停止下拉刷新的效果:
// 在实际的小程序中, 处理完下拉刷新后, 下拉刷新的 loading 效果会一直显示, 不会主动消失, 所以需要手动隐藏 loading 效果. 
// 此时, 调用 wx.stopPullDownRefresh() 可以停止当前页面的下拉刷新.
// wx.stopPullDownRefresh();