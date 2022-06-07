/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 16:40:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 17:00:14
 * @FilePath: \22_微信小程序\90_单个插槽.js
 */
// 单个插槽
// 在小程序中， 默认每个自定义组件中使用一个 <slot></slot> 进行占位，这种个数上的限制叫做单个插槽。

// 组件的封装者
/*
<view class="wrapper">
  <view>这是组件的内部节点。</view>
  对于不确定的内容，可以使用 <slot></slot> 进行占位，具体的内容由组件的使用者决定.
  <slot></slot>
</view>
*/
// 组件的使用者
/* 
<component-tag-name>
  这部分内容将被放置在组件 <slot></slot> 的位置上
  <view>这里是插入到组件 slot 中的内容。</view>
</component-tag-name> 
*/