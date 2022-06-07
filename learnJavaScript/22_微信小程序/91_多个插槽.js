/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 17:21:53
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 17:42:59
 * @FilePath: \22_微信小程序\91_多个插槽.js
 */
// 1. 启用多个插槽
// 在小程序的自定义组件中，需要使用 slot 插槽时，可以在组件的 .js 文件中，通过如下方式进行启用：
/*
options: {
    multipleSlots: true
  },
*/

// 2. 定义多个插槽
// 可以在组件的 .wxml 中使用多个 slot 标签，以不同的 name 来区分不同的插槽。
/*
  组件模板
  <view class="center">
    <view>这是组件的内部节点.</view>
    <slot></slot>
    <slot name="before"></slot>
    <slot name="after"></slot>
  </view>
*/

// 3. 使用多个插槽
// 在使用带有多个插槽的自定义组件时，需要使用 slot 属性来将节点插入到不同的 <slot></slot> 中。
/*
<!-- 插槽 -->
<my-test4>
  <view>这是插入到组件的 slot 中的内容.</view>
  <view slot="after">
    这是插入到 name="after" 的 slot 中
  </view>
  <view slot="before">
    这是插入到 name="before" 的 slot 中
  </view>
</my-test4>
*/