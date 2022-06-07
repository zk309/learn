/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 17:51:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 17:59:12
 * @FilePath: \22_微信小程序\80_使用 setData 修改 properties的值.js
 */
// 使用 setData 修改 properties 的值
// 由于 data 数据和 properties 属性在本质上没有任何区别, 因此 properties 属性的值也可以用于
// 页面渲染或使用 setData 为 properties 中的属性重新赋值.

// 在组件的 .wxml 文件中使用 properties 属性的值
<view>max 属性的值为: {{ max }}</view>

Component({
  properties: { max: Number }, // 定义属性
  methods: {
    addCount() {
      this.setData({ max: this.properties.max + 1 }) // 使用 setData 修改属性的值.
    }
  }
})