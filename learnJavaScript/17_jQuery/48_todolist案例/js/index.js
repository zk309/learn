/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-03-30 18:06:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-03-31 08:41:57
 * @FilePath: \17_jQuery\48_todolist案例\js\index.js
 */
window.addEventListener("load", function (evt) {

    // this.alert(1);

    // 
    load();

    // 1. todoList 按下回车读取本地存储数据
    $("#title").on("keydown", function(evt) {
        // 如果 ASCII 为 13, 则把 #title 的值存储到 localStrong
        // 先获取 localStrong 的值, 然后再添加
        if (evt.keyCode === 13) {
            // 内容不能为空
            if ($(this).val() == "") {
                alert("内容不能为空.");
                return;
            } else {
                // console.log(1);
                var local = getLocal();
                // console.log(local);

                // 2. todoList 按下回车, 保存最新数据.
                local.push({
                    title: $(this).val(),
                    done: false
                });
                // console.log(local);
                setLocal(local);

                // 3. todoList 本地存储数据渲染加载
                load();

                $(this).val("");
            }
        }
    });

    // 4. todoList 删除操作
    $("ol, ul").on("click", "a", function(evt) {
        // console.log(1);
        // 获取本地存储
        var data = getLocal();
        console.log(data);

        // 修改数据
        // 通过 index 自定义属性来获取下标, 然后根据下标, 删除指定的数组元素.
        var index = $(this).attr("data-index");
        // console.log(index);
        data.splice(index, 1);
        console.log(data);
        // $("li").eq(index).slideDown(500);

        // 保存本地存储
        setLocal(data);
        
        // 渲染数据
        load();
    })

    // 5. todoList 正在进行和已经完成的操作
    $("ol, ul").on("click", "input", function(evt) {
         // 获取本地存储
         var data = getLocal();
        // console.log(data);

         // 修改数据
         var index = $(this).siblings("a").attr("data-index");
         data[index].done = $(this).prop("checked");
        //  console.log(data);
        // console.log($(this));
        // $("li").eq(index).slideDown(500);

         // 保存本地存储
        setLocal(data);
        
        // 渲染数据
        load();
    })

    // 1. todoList 按下回车读取本地存储数据
    function getLocal() {
        var data = localStorage.getItem("todoList");
        // 如果有数据, 则返回, 如果没有, 则返回 空数组.
        // console.log(data);
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    };

     // 2. todoList 按下回车, 保存最新数据.
    function setLocal(local) {
        localStorage.setItem('todoList', JSON.stringify(local));
    }

    // 3. todoList 本地存储数据渲染加载函数
    function load() {
        // 6. todoList 正在进行和已经完成的个数统计
        var todoCount = 0;
        var doneCount = 0;
        // 清空 ol, 防止里面的数据重复加载.
         $("#todolist").empty();
          $("#donelist").empty();
        // 获取存储数据函数
        // $.each() 渲染数据
        var data = getLocal();
        // console.log(data);
        $.each(data, function(index, ele) {
            // console.log(ele);
           if (ele.done) {
            $("#donelist").prepend("<li><input type='checkbox' checked></input> <p>"+ ele.title +"</p> <a href='JavaScript:;' data-index="+index+"></a></li>");
            doneCount ++;
           } else {
            $("#todolist").prepend("<li><input type='checkbox'></input> <p>"+ ele.title +"</p> <a href='JavaScript:;' data-index="+index+"></a></li>");
            todoCount ++;
           }
        });

        // 6. todoList 正在进行和已经完成的个数统计
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})