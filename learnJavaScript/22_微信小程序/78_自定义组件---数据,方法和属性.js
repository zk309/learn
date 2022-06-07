/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 17:14:13
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 15:46:53
 * @FilePath: \22_微信小程序\78_自定义组件---数据,方法和属性.js
 */
// 自定义组件---数据, 方法和属性


// 1. data 数据
// 在小程序中, 用于组件模板渲染的私有数据, 需要定义到 data 节点中.
Component({
  data: {
    count: 0
  }
})


// 2. methods 方法
// 在小程序组件中, 事件处理函数和自定义方法需要定义到 methods 节点中.
Component({
  methods: {
    // count ++
    addCount() {
      this.setData({
        count: this.data.count+=1
      })
      this._showCount();
    },
    // 自定义事件
    _showCount() {
      wx.showToast({
        title: 'count 最新的值为:  ' + this.data.count,
        icon: 'none',
        duration: 2000,
        mask: true
      })
    }
  }
})


// 3. properties 属性
// 在小程序组件中, properties 是组件的对外属性, 用来接收外界传递到组件中的数据.
// 页面： <my-test1 max="5"></my-test1>
// 组件：
Component({
  properties: {
    max: {         // 完整定义属性的方式, 当需要指定属性默认值时, 建议使用此方式.
      type: Number,
      value: 10
    },
    max: Number    // 简化定义属性的方式
  }
})
