/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 08:47:56
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-24 09:01:35
 * @FilePath: \22_微信小程序\31_WXML模板语法--条件渲染.js
 */
// WX:if
// 在小程序中, 使用 wx:if="{{ condition }}" 来判断是否需要渲染该代码.
// 也可以使用 wx:elif 和 wx:else 来添加 else 判断.

// .wxml
/*
<view class="father2">
  <text>性别: </text>
  <view wx:if="{{ type === 1 }}">男</view>
  <view wx:elif="{{ type === 0 }}">女</view>
  <view wx:else>保密</view>
</view>
*/