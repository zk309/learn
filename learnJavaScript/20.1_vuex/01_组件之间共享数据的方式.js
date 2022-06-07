/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 09:28:11
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 18:47:21
 * @FilePath: \20.1_vuex\01_组件之间共享数据的方式.js
 */
// 父向子传值: 自定义属性 props

// 子向父传值: v-on 自定义事件

// 兄弟组件之间共享数据: EventBus
// 1. $on 接收数据的组件;
// 2. $emit 发送数据的组件;