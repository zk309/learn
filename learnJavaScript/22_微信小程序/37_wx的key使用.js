/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 11:25:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 02:04:52
 * @FilePath: \22_微信小程序\37_wx的key使用.js
 */
// wx:key 的使用
// 类似于 vue 列表渲染中的 :key, 小程序在实现列表渲染时, 也建议为渲染出来的列表项指定唯一的 key 值,
// 从而提高渲染的效率.

// wxml 结构:
/*
  <view class="father3" wx:for="{{ userList }}" wx:key="id">
    wx:key 的使用, {{ index }}, {{ item.user }}
  </view>
*/