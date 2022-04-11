/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-09 14:20:42
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-09 17:40:57
 * @FilePath: \18_Ajax\70_淘宝搜索案例\js\index.js
 */
window.addEventListener('load', function(evt) {

    // 3. 实现输入框的防抖, 减少请求次数, 节约请求的资源
    // 3.1 声明一个 timer;
    // 3.2 定义一个防抖函数;
    // 3.3 调用防抖函数;
    // 3.4 调用防抖函数之前, clearTimeout() 防抖函数;
    var timer = null;
    function debounceSearch(keyWords) {
        time = setTimeout(function() {
            getSuggest(keyWords);
        }, 500)
    }

    // 4. 缓存搜索的建议列表
    // 4.1 定义全局缓存对象
    var cacheObj = {};
    // 4.2 将缓存结果保存到缓存对象中
    // 4.3 优先从缓存中获取搜索建议
    
    // 1. 获取用户输入的搜索关键字
    $("#input").on("keyup", function(evt) {
        clearTimeout(timer);
        // console.log(1);
        // 搜索关键字:
        var keyWords = $(this).val().trim();
        // 优先从缓存中获取搜索建议
        if (cacheObj[keyWords]) {
            console.log(cacheObj[keyWords]);
            return renderSuggest(cacheObj[keyWords]);
        }

        // 减少请求次数, 节约请求的资源
        if (keyWords.length <= 0) {
            return $("#suggest_list").empty().hide();
        };
        // console.log(1);
        // 2. 渲染页面结构
        // 防抖策略
        debounceSearch(keyWords);
    });

    // 获取页面结构函数
    function getSuggest(keyWords) {
        $.ajax({
            method: 'GET',
            url: 'https://suggest.taobao.com/sug',
            data: {
                q: keyWords
            },
            // JSONP 数据请求
            dataType: 'jsonp',
            success: function(res) {
                console.log(res);
                console.log(res.result);
                renderSuggest(res);
            }
        });
    };

    // 渲染页面结构函数
    function renderSuggest(data) {
        // 如果没有需要渲染的数据, 则清空并隐藏 #suggest_list
        if (data.result.length <= 0) {
            return $("#suggest_list").empty().hide();
        }
        // 导入模板引擎
        var htmlStr = template('tpl_suggest', data);
        console.log(htmlStr);
        $("#suggest_list").html(htmlStr).show();

        // 将缓存结果保存到缓存对象中
        var k = $("#input").val().trim();
        cacheObj[k] = data;
    };


    $("#tabs").on("click", function(evt) {
        // console.log(evt.target);
        $(evt.target).addClass('tab-active');
        $(evt.target).siblings("div").removeClass();
    })

});