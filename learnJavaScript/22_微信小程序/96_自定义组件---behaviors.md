<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-03 15:18:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-03 23:08:15
 * @FilePath: \22_微信小程序\96_自定义组件---behaviors.md
-->
### 自定义组件 - behaviors

#### 1. 什么是 behaviors
behaviors 是小程序中， 用于实现组件间代码共享的特性，类似于 Vue.js 中的 "mixins".

#### 2. behaviors 的工作方式
每个 behavior可以包含一组属性，数据，生命周期和方法。组件引用它时，它的属性，数据和方法会被合并到数组中。
每个组件可以引用多个 behavior, behavior 也可以引用其他 behavior.

#### 3. 创建 behavior
调用 Behavior(Object, Object) 方法即可创建一个共享的 behavior 实例对象，供所有的组件使用。
```javascript
// 调用 Behavior 方法， 创建实例对象
// 并使用 module.exports 将 behavior 实例对象共享出去。
module.exports = Behavior({
  properties: {}, // 属性节点
  data: { userName: 'zs' },  // 私有数据节点
  methods: {},  // 事件处理函数和自定义方法节点
  // 其他节点...
})
```

#### 4. 导入并使用 behavior
在组件中，使用 require() 方法导入需要的 behavior, 挂载后即可访问 behavior 中的数据或方法。
```javascript
// 1. 使用 require() 导入需要的自定义 behavior 模块
const myBehavior = require("../../behaviors/my-behavior")

Component({
  // 2. 将导入的 behavior 实例对象，挂载到 behavior 数组节点中，即可生效。
  behaviors: [myBehavior],
  // 组件的其他节点
})
```

#### 5. 同名字段的覆盖和组合规则*
组件和它引用的 behavior 中可以包含同名的字段，此时可以参考如下 3 种同名时的处理规则：
1. 同名的数据字段(data)
2. 同名的属性(properties) 或方法(methods)
3. 同名的生命周期函数
  
详细文档：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html