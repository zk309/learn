/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-14 14:55:57
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-14 19:30:50
 * @FilePath: \19_Node.js\07_整理成绩案例.js
 */
const fs = require('fs');

// 读取文件:
fs.readFile('./file/成绩.txt', 'utf8', function(err, data) {
    // console.log(data);
    if (err) {
        return console.log('读取文件失败!' + err);
    }
    console.log(data);

    // 对数据进行整理:
    var newData = data.split(' ');
    var newArr = [];
    newData.forEach(function(item) {
        newArr.push(item.replace('=', ':'));
    })
    var str = newArr.join(',\r');
    console.log(str);

    // 写入文件:
    fs.writeFile('./file/成绩OK.txt', str, 'utf8', function(err) {
        if (err) {
            return console.log('写入文件失败!' + err);
        }
        console.log('写入文件成功!');
    });
});