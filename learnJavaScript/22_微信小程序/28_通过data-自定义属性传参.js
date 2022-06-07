/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 22:47:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 01:44:06
 * @FilePath: \22_微信小程序\28_通过data-自定义属性传参.js
 */
// 事件传参
// 可以为组件提供 data-* 自定义属性传参，其中 * 代表的是参数的名字，
// 注意：
// 1. info 会被解析为参数的名字；
// 2. 数值 2 会被解析为参数的值；

// demo:
//  <button type="primary" bind:tap="addData" data-info="{{ 5 }}" >自定义增加</button>

// addData(evt) {
  // dataset 是一个对象, 包含了所有通过 data-* 传递过来的参数.
//   console.log(evt.target.dataset);
//   this.setData({
//     count: this.data.count + evt.target.dataset.info
//   })
// },