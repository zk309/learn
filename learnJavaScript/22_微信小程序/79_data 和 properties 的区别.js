/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 17:36:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 17:39:40
 * @FilePath: \22_微信小程序\79_data 和 properties 的区别.js
 */
// 4. data 和 properties 的区别:
// 在小程序的组件中, properties 属性和 data 数据的用法相同, 他们都是可读可写的, 但是:
// 1. data 更倾向于存储组件的私有数据;
// 2. properties 更倾向于存储外界传递到组件中的数据;
Component({
  methods: {
    showInfo() {
      console.log(this.data);
      console.log(this.properties);
      console.log(this.data === this.properties) // 结果为 true, 证明 data 和 properties 属性都是可读可写的.
    }
  }
})