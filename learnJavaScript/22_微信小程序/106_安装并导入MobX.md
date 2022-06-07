<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-05 09:35:36
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-05 10:07:10
 * @FilePath: \22_微信小程序\106_安装并导入Mobx.md
-->
#### 1. 安装 MobX 相关的包
在项目中运行如下的命令，安装 MobX 相关的包：
```javascript
// 建议安装如下版本。
npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
```
注意：MobX 相关的包安装完毕之后，记得删除 miniprogram_npm 目录后，重新构建 npm。

#### 2. 创建 MobX 的 Store 实例
在项目根目录新建 store/store.js，然后写入相关配置：
```javascript
// 在这个 JS 文件夹中, 专门来创建 Store 的实例对象. 
import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  // 计算属性
  get sum() {
    return this.numA + this.numB
  },
  // actions 函数, 专门来修改 Store 中数据的值
  updateNum1: action(function (step) {
    this.numA += step
  }),
  updateNum2: action(function (step) {
    this.numB += step
  })
})
```