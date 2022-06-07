/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-26 17:26:33
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-26 18:24:11
 * @FilePath: \22_微信小程序\56_编程式导航.js
 */
// 导航到 tabBer 页面
// 调用 wx.switchTab(obj, obj) 方法, 可以跳转到 tabBer 页面. 其中 url 属性不能带参数
/*
  demo:
  <!-- 跳转到 tabBer 页面 -->
  <view>
    <button type="primary" bind:tap="gotoHome">跳转到首页</button>
  </view>

  gotoHome(event) {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },

*/



// 导航到非 tabBer 页面
// 调用 wx.navigateTo(obj, obj) 方法, 可以跳转到 非 tabBer 页面. 其中 url 属性能带参数
/**
 * <!-- 跳转到非 tabBer 页面 -->
  <view class="box">
    <button type="primary" bind:tap="gotoLogo">跳转到logo页面 (非 tabBer 页面)</button>
  </view>

  gotoLogo(event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
 */



// 后退导航:
// 调用 wx.navigateBack(obj, obj) 方法, 可以返回上一页面或多级页面.
/**
 * demo:
 *<view class="box">
     <button type="primary" bind:tap="goBack">返回上一页</button>
  </view>

  goBack(event) {
    wx.navigateBack({
      delta: 1
    });    
  }
 */