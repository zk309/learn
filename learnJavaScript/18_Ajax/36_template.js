/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-05 19:26:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-05 19:30:35
 * @FilePath: \18_Ajax\36_template.js
 */
// 封装 template 函数
function template(id, data) {
    var str = document.getElementById(id).innerHTML;
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/;

    var result = null;

    while (result = pattern.exec(str)) {
        str = str.replace(result[0], data[result[1]]);
    }

    return str;
}