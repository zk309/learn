/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 18:51:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 19:00:08
 * @FilePath: \22_微信小程序\92_自定义组件---父子组件之间的通信方式.js
 */
// 父子组件之间通信的 3 种方式：
// 1. 属性绑定
//    用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容的数据。

// 2. 事件绑定
//    用于子组件向父组件传递数据，可以传递任意数据。

// 3. 获取组件实例
//    父组件还可以通过 this.selectComponent() 获取子组件实例对象；
//    这样就可以直接访问子组件的任意数据和方法。