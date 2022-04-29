/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 12:23:05
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 13:01:11
 * @FilePath: \19_Node.js\zk309\src\dateFormat.js
 */
//dateFormat.js 文件

// 格式化时间函数
function dateFormat(str) {
    const dt = new Date(str);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
};

// 补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
};

// 向外暴露函数
module.exports = {
    dateFormat
}