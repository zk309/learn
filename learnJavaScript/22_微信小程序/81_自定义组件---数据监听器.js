/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 19:05:53
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-05 21:12:46
 * @FilePath: \22_微信小程序\81_自定义组件---数据监听器.js
 */
// 什么是数据监听器?
// 数据监听器用于监听和响应任何属性和数据字段的变化, 从而执行特定的操作.
// 它的作用类似于 vue 中的 watch 侦听器. 在小程序组件中, 数据监听器的基本语法格式如下:
Component({
  observers: {
    '字段A, 字段B': function(字段A的新值, 字段B的新值) {
      // do something
    }
  }
})


// 数据监听器的基本用法:
// 组件的 UI 结构如下:
// <view class="center">数据监听器: {{ n1 }} + {{ n2 }} = {{ sum }}</view>
/* 
<view class="center">
  <button size="mini" type="primary" bindtap="addOne">n1 + 1</button>
  <button size="mini" type="primary" bindtap="addTwo" style="margin-left: 10rpx;">n2 + 1</button>
</view>
*/
// 组件的 .js 文件代码如下:
Component({
  data: {
    n1: 0,
    n2: 0,
    sum: 0
  },
  methods: {
    addOne() {
      this.setData({
        n1: this.data.n1 += 1
      })
    },
    addTwo() {
      this.setData({
        n2: this.data.n2 += 1
      })
    }
  },
  observers: {
    'n1, n2': function(n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    }
  }
})