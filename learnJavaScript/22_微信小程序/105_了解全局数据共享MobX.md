<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-04 21:01:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-05 09:09:35
 * @FilePath: \22_微信小程序\105_了解全局数据共享.md
-->
#### 1. 什么是全局数据共享
全局数据共享 (又叫做：状态管理) 是为了解决组件之间数据共享的问题。
开发中常用的全局数据共享方案有: VueX(Vue), ReduX(React), MobX(微信小程序)。

#### 2. 小程序中的全局数据共享方案
在小程序中，可使用 mobx-miniprogram 配合 mobx-miniprogram-bindings 实现全局数据共享。其中：
1. mobx-miniprogram 用来创建 Store 实例对象；
2. mobx-miniprogram-bindings 用来把 Store 中的共享数据或方法，绑定到组件或页面中使用。