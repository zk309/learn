/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 12:24:57
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 13:01:05
 * @FilePath: \19_Node.js\zk309\src\htmlEscape.js
 */
//htmlEscape.js  文件

// 转义 HTML 函数
function htmlEscape(str) {
    return str.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;';
             case '>':
                return '&gt;';
             case '"':
                return '&quot;';
             case '&':
                return '&amp;';
        };
    });
};


// 还原 HTML 函数
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<';
             case '&gt;':
                return '>';
             case '&quot;':
                return '"';
             case '&amp;':
                return '&';
        };
    });
};

// 向外暴露函数
module.exports = {
    htmlEscape,
    htmlUnEscape
}