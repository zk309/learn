<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-05 11:42:17
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-05 11:50:10
 * @FilePath: \22_微信小程序\107在页面上使用 Store.md
-->
#### 1. 将 Store 中的成员绑定到页面中
```javascript
// 页面的 .js 文件
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'


page({
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1', 'updateNum2']
    })
  },
  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  },
})
```

#### 2. 在页面上使用 Store 中的成员
```javascript
// 页面的 .wxml 结构
<view class="center">
  <view>将 Store 中的数据绑定到页面中</view>
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


// 按钮 tap 事件的处理函数
btnHandle1 (evt) {
  this.updateNum1(evt.target.dataset.info)
},

btnHandle2 (evt) {
  this.updateNum2(evt.target.dataset.info)
},
```