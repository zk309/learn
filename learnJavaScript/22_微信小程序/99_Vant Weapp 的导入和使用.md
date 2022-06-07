<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-04 10:46:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 11:02:31
 * @FilePath: \22_微信小程序\99_Vant Weapp 的导入和使用.md
-->
#### 1. 什么是 Vant Weapp
Vant Weapp 是有赞前端团队开源的一套小程序 UI 组件库，助力于开发者快速构建小程序应用。它所使用的是 MIT 开源许可协议，对商业使用比较友好。

#### 2. 安装 Vant 组件库
详细操作参考 Vant 官方文档：
https://youzan.github.io/vant-weapp/#/quickstart

注意：建议安装 1.3.3 版本的 vant 组件库。

#### 3. 使用 Vant 组件
安装完 Vant 组件库之后，可以在 app.json 的 usingComponents 节点中引入需要的组件，即可在 wxml 中直接使用组件。
```javascript
// 通过 npm 安装
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}

// 页面的 .wxml 结构
<van-button type="info">信息按钮</van-button>
```