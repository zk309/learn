<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 10:22:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 16:49:57
 * @FilePath: \19_Node.js\zk309\README.md
-->
 <!-- 安装方式, 导入方式, 格式化时间, 转义 HTML 中的特殊字符, 还原 HTML 中的特殊字符, 开源协议. -->

## 安装方式
```
npm install zk309
```

## 导入方式
```js
const zk309 = require('zk309');
```

## 格式化时间
```js
const dt = zk309.dateFormat(new Date());
console.log(dt); 
// 输出 2022-04-19 11:33:40 
```

## 转义 HTML 中的特殊字符
```js
const htmlStr = '<h1 style="red">你好!&</h1>';
const str = zk309.htmlEscape(htmlStr);
console.log(str); 
// &lt;h1 style=&quot;red&quot;&gt;你好!&amp;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符
```js
const rawStr = zk309.htmlUnEscape(str);
console.log(rawStr);
//  <h1 style="red">你好!&</h1>
```

## 开源协议
ISC