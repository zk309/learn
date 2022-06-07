/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 23:48:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-24 08:41:37
 * @FilePath: \22_微信小程序\30_实现文本框和data之间的数据同步.js
 */
// 实现文本框和 data 之间的数据同步：
// 1. 定义数据；
// 2. 渲染结构；
// 3. 美化样式；
// 4. 绑定 input 事件处理函数。

// .wxml
/*
<view class="father1">
  实现文本框和 data 之间的数据同步:
  <input type="text" bind:input="inputSync" value="{{ input }}" />
</view>
*/

// .js 
/*
  inputSync(evt) {
    this.setData({
      input: evt.detail.value
    })
  },
*/