/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 12:32:16
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 12:44:03
 * @FilePath: \21_ES6-Module\20_基于Promise封装读取文件.js
 */
import fs from 'fs';

function getFile(fPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(fPath, 'utf8', function(err, res) {
      if (err) return reject(err);
      resolve(res);
    })
  })
}

getFile('./files/11.text')
  .then(res => {console.log(res);})
  .catch(err => {console.log(err.message);})