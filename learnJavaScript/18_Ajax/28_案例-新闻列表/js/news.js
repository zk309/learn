/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-05 09:48:50
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-05 11:11:36
 * @FilePath: \18_Ajax\28_案例-新闻列表\js\news.js
 */

        window.addEventListener('load', function (evt) {

            // 给时间补零的函数
            function padZero(n) {
                // if (n < 10) {
                //     return '0' + n;
                // } else {
                //     return n;
                // }

                return n < 10 ? '0' + n : n
            }

            // 定义格式化时间的过滤器:
            template.defaults.imports.dateFormat = function (data) {
                var dt = new Date(data);

                var y = dt.getFullYear();
                var m = padZero(dt.getMonth() + 1);
                var d = padZero(dt.getDate());
                var hh = padZero(dt.getHours());
                var mm = padZero(dt.getMinutes());
                var ss = padZero(dt.getSeconds());
                return y +'-' + m +'-'+ d +'-'+ hh + ':' + mm + ':' + ss;
            }
            // 
            getNews();

            function getNews() {
                $.get("http://www.liulongbin.top:3006/api/news", function (res) {
                    if (res.status !== 200) {
                        return alert("获取新闻失败.");
                    }
                    
                    // 把每一项的 tags 属性，从字符串改造成字符串的数组
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].tags = res.data[i].tags.split(",");
                    }
                    // 2.
                    console.log(res);
                    // 4.
                    var str = template("tpl_news", res);
                    console.log(str);
                    // 5.
                    $("#news_list").empty().append(str);
                })
            }
        })
    