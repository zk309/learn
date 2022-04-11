/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-02 11:07:43
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-02 13:03:40
 * @FilePath: \聊天机器人\js\chat.js
 */
window.addEventListener('load', function(evt) {

    // this.alert(1);
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    // 实现步骤:
    // 1. 梳理案例的代码结构;
    // 2. 将用户输入的内容渲染到聊天窗口;
    // 3. 发起请求获取聊天信息;
    // 4. 将机器人的聊天内容转为语音;
    // 5. 通过 <audio> 播放语音;
    // 6. 使用回车键发送信息;

    // 2. 将用户输入的内容渲染到聊天窗口;
    $("#btnSend").on("click", function(evt) {
        // console.log(1);
        var text = $("#ipt").val().trim(); // 获取用户输入的内容
        if (text.length <= 0) { // 判断用户输入的内容是否为空
            return $("#ipt").val("");
        }
        // 将用户输入的聊天内容显示到聊天窗口中
        $("#talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>');
        $("#ipt").val(""); // 清空输入框的内容
        resetui(); // 重置滚动条的位置

        //3. 发起请求, 获取聊天信息.
        getMsg(text);
    });

    // 6. 使用回车键发送信息;
    $("#ipt").on("keyup", function(evt) {
        // console.log(1);
        if (evt.keyCode == 13) {
            $("#btnSend").click();
        }
    })

    //3. 发起请求, 获取聊天信息.
    function getMsg(text) {
        $.ajax({
            method: "GET",
            url: "http://www.liulongbin.top:3006/api/robot",
            data: {
                spoken: text
            },
            success: function(res) {
                console.log(res);
                if (res.message === "success") {
                    var msg = res.data.info.text;
                    $("#talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>');
                    resetui();
                    // 4. 将机器人的聊天内容转为语音;
                    getVoice(msg);
                }
            }
        });
    };

    // 4. 将机器人的聊天内容转为语音;
    function getVoice(text) {
        $.ajax({
            method: "GET",
            url: "http://www.liulongbin.top:3006/api/synthesize",
            data: {
                text: text
            },
            success: function(res) {
                console.log(res);
                if (res.status === 200) {
                    $("#voice").prop("src", res.voiceUrl);
                }
            }
        })
    };
 
})