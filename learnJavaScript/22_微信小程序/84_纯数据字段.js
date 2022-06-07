/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 13:49:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 13:54:19
 * @FilePath: \22_微信小程序\84_纯数据字段.js
 */
// 什么是纯数据字段?

// 概念: 纯数据字段指的是那些不用于界面渲染的 data 字段.

// 应用场景:
// 例如有些情况下, 某些 data 中的字段既不会展示在界面上, 也不会传递给其他组件, 
// 仅仅在当前组件内部使用. 带有这种特性的 data 字段适合被设置为纯数据字段.

// 好处:
// 纯数据字段有助于提升页面更新的性能.

// demo:
Component({
  options: {
    // 指定所有 _开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  data: {
    // 将 rgb 改造为以 _ 开头的纯数据字段
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  }
})

// ctrl + D 快速选中所有