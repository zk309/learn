<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-05 12:52:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-05 12:57:39
 * @FilePath: \22_微信小程序\108_在组件中使用 Store.md
-->
#### 1. 将 Store 中的成员绑定到组件中
```javascript
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

component({
  // 将 Store 中的成员绑定到组件中
  behaviors: [storeBindingsBehavior], // 通过 storeBindingsBehavior 来实现自我绑定
  
  storeBindings: {
    store, // 指定要绑定的 Store
    fields: {  // 指定绑定的字段数据
      numA: () => store.numA, // 绑定数据的第 1 种方式
      numB: (store) => store.numB, // 绑定字段的第 2 种方式
      sum: 'sum' // 绑定数据的第 3 种方式
    },
    actions: { // 指定要绑定的方法
      updateNum1: 'updateNum1',
      updateNum2: 'updateNum2'
    }
  }
})
```

#### 2. 在组件中使用 Store 中的成员
```javascript
// 组件的 .wxml 结构
<view>我是 test1 组件</view>
<view class="center">
  <view>将 Store 中的数据绑定到组件中</view>
  <text>{{ numA }} + {{ numB }} = {{ sum }} </text>
  <view class="center">
    <van-button round type="info" bindtap="btnHandle1" data-info="{{ 1 }}"> numA + 1</van-button>
    <van-button round type="info" bindtap="btnHandle2" data-info="{{ 1 }}"> numB + 1</van-button>
  </view>
  <view class="center">
    <van-button round type="info" bindtap="btnHandle1" data-info="{{ -1 }}"> numA - 1</van-button>
    <van-button round type="info" bindtap="btnHandle2" data-info="{{ -1 }}"> numB - 1</van-button>
  </view>
</view>

/**
 * 组件的方法列表
 */
methods: {
  btnHandle1(evt) {
    // console.log(evt)
    this.updateNum1(evt.target.dataset.info)
  },
  btnHandle2(evt) {
    this.updateNum2(evt.target.dataset.info)
  }
},
```