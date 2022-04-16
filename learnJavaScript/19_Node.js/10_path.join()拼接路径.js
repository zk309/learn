/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-15 09:14:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-15 09:40:28
 * @FilePath: \19_Node.js\10_path.join()拼接路径.js
 */
// path.join() 的语法格式：
// 使用 path.join() 方法，可以把多个路径片段拼接为完整的路径字符串， 语法格式如下：
// path.join([...paths])
// 参数： 
// ...paths  <string>路径片段的序列
// 返回值：  <string>

// 代码示例：
const path = require('path');

// ../ 会抵消上一层路径
const pathStr = path.join('/a', '/b/c', '../', '/d', '/e');
console.log(pathStr); // \a\b\d\e


const pathStr2 = path.join(__dirname , './file/谏太宗十思疏.txt');
console.log(pathStr2); // F:\ZKLearn\learnJavaScript\19_Node.js\file\谏太宗十思疏.txt

// 注意： 今后凡是涉及到路径拼接的操作， 都要使用 path.join() 方法进行处理。不要直接使用 + 进行字符串的拼接。
// path.join() 里面的路径片段，要用 , 分隔;