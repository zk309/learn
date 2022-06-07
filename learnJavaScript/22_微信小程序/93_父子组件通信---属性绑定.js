/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 19:08:50
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-03 04:46:11
 * @FilePath: \22_微信小程序\93_父子组件通信---属性绑定.js
 */
// 属性绑定

// 属性绑定用于实现父向子传值，而且只能传递普通类型的数据，无法将方法传递给子组件。
// 父组件的 data 节点
data: {
  count: 0
}
// 父组件的 wxml 结构
/*
<my-test5 count="{{ count }}"></my-test5>
<view class="center">父组件中, count 的值为 {{ count }}</view>
*/

// 子组件在 properties 几点中声明对应的属性并使用。
properties: {
  count: Number
}
// 子组件的 wxml 结构
// <text>子组件中, count 的值为 {{ count }}</text>