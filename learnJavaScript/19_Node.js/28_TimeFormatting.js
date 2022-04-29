/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 10:15:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-18 10:30:58
 * @FilePath: \19_Node.js\28_TimeFormatting.js
 */
// 格式化日期函数
function TimeFormat (str) {
    const dt = new Date(str);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
}

// 补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

module.exports = {
    TimeFormat
}