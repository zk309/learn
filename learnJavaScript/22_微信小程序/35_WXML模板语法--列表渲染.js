/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 10:30:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 01:56:50
 * @FilePath: \22_微信小程序\35_WXML模板语法--列表渲染.js
 */
// wx:for
// 通过 wx:for 可以根据指定的数组, 循环渲染重复的组件结构.
// 默认情况下, 当前循环项的索引用 index 表示; 当前循环项用 item 表示.

/* .wxml 文件:
  <view wx:for="{{ infoArray }}" class="father1">
    索引是: {{ index }}, 当前项是: {{ item }}
  </view>
*/