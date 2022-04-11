/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-07 09:04:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-07 09:31:57
 * @FilePath: \18_Ajax\51_itAjax.js
 */
//1.  需要把 data 对象, 转换成查询字符串的格式, 从而提交给服务器.
function resolveData(data) {
    var arr = [];
    for (let k in data) {
        arr.push(k + '=' + data[k]);
    }
    return arr.join('&');
}



// 2. 在 itAjax() 函数中, 需要创建 xhr 对象, 并监听 onreadystatechange 事件
function itAjax(options) {
    var xhr = new XMLHttpRequest();
    // 拼接查询的字符串
    var qs = resolveData(options.data);

    // 3. 不同的请求类型, 对应 xhr 对象的不同操作
    if (options.method.toUpperCase() === 'GET') {
        // 发起 GET 请求
        xhr.open(options.method, options.url + '?' + qs);
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        // 发起 POST 请求
        xhr.open(options.method, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs);
    }

    // 监听请求状态改变的事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);
            console.log(options);
            options.success(res)
        }
    }
}