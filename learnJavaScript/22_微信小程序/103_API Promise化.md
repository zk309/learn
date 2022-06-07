<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-04 14:14:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 18:34:00
 * @FilePath: \22_微信小程序\103_API Promise化.md
-->
#### 1. 基于回调函数的异步 API 的缺点
默认情况下，小程序官方提供的异步 API 都是基于回调函数实现的，例如 wx.request() 

缺点： 容易造成回调地域的问题，代码的可读性差，维护性差。

#### 2. 什么是 API Promise 化
API Promise化，指的是通过额外的配置，将官方提供的，基于回调函数的异步 API，升级改造为基于 Promise 的异步 API, 从而提高代码的可读性，维护性，避免回调地狱的问题。

#### 3. 安装并导入 API Promise 化
在小程序中，实现 API Promise化主要依赖于 miniprogram-api-promise 这个第三方的 npm 包。

注意：
1. 重新构建 npm 时，记得把原先的 miniprogram_npm 文件夹删除；
2. 安装 miniprogram-api-promise, 建议使用 1.0.4 版本；
```javascript
// 安装 , 建议使用 1.0.4
npm install --save miniprogram-api-promise@1.0.4
```

```javascript
// 在小程序入口文件中(app.js文件中，和 App() 函数同级), 只需要调用一次 promisifyAll() 方法
// 即可实现异步 API 的 Promise 化
import { promisifyAll } from 'miniprogram-api-promise'

const wxp = wx.p = {}
// promisify all wx's api
promisifyAll(wx, wxp)
```

#### 4. 调用 Promise 化之后的异步 API
```javascript
// 页面的 .wxml 结构
<button type="primary" bindtap="getInfo">获取数据</button>

// 在页面的 .js 文件中，定义对应的 tap 事件处理函数
async getInfo() {
  const { data: res } = await wx.p.request({
    method: 'GET',
    url: 'https://www.xxx.cn/api/get',
    data: { name: 'zs', age: 20 }
  })

  console.log(res)
}
```