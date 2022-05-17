/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-07 13:17:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-07 13:33:43
 * @FilePath: \20_Vue2.0\66_使用deep修改子组件中的样式.js
 */
// 深度选择器 deep:
// 当 <style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素，父组件的样式将不会渗透到子组件。
//  如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用深度选择器。

// <!-- 写法1 使用::v-deep --> <!--不推荐写法 1-->
// <style lang="scss" scoped>
//   ::v-deep .ant-card-head-title{
//     background: yellowgreen;
//   }
// </style>
// <!-- 写法2 使用>>> 操作符-->
// <style scoped>
// >>>.ant-card-head-title{
//   background: yellowgreen;
// }
// </style>
// <!-- 写法3 使用/deep/ -->
// <style scoped>
//  /deep/.ant-card-head-title{
//   background: yellowgreen;
// }
// </style>
// <!-- 写法4 使用:deep(<inner-selector>) -->
// <style lang="scss" scoped>
//   :deep(.ant-card-head-title){
//     background: yellowgreen;
//   }
// </style>
