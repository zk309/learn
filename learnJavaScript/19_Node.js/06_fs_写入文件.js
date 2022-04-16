/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-14 14:28:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-14 14:49:06
 * @FilePath: \19_Node.js\06_fs_写入文件.js
 */
// 语法格式:
// fs.writeFile(file, data[, options], callback);
// 参数1: 必选参数, 需要制定一个文件路径的字符串, 表示文件的存放路径;
// 参数2: 必选参数, 表示要写入的内容;
// 参数3: 可选参数, 表示以什么格式写入文件内容, 默认值是 utf8;
// 参数4: 必选参数, 文件写入完成后的回调函数;

// 注意: 只要路径正确, 会自动创建文件.

const fs = require('fs');
fs.writeFile('./file/write.txt', 'Hello Node.js!!!!', function(err) {
    // console.log(err);

    // 判断文件是否成功:
    if (err) {
        return console.log('写入文件失败' + err);
    }
    console.log('写入文件成功!');
})