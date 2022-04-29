<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 10:22:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-22 13:29:09
 * @FilePath: \19_Node.js\zk309-body-parse\README.md
-->
 <!-- 安装方式, 导入方式, 格式化时间, 转义 HTML 中的特殊字符, 还原 HTML 中的特殊字符, 开源协议. -->

## 安装方式
```
npm install zk309-body-parse
```

## 导入自定义中间件模块
```js
const bodyParse = require('zk309-body-parse');
```

## 解析表单中的 URL-encoded 格式的请求体数据.
```js
app.use(bodyParse);
```

## 开源协议
ISC