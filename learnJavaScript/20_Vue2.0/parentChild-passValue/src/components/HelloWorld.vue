<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-08 15:37:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 10:04:20
 * @FilePath: \parentChild-passValue\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1 class="pink">我是 HelloWorld 组件.</h1>
    <h1>{{ msg }}</h1> <!--父向子传值-->
    <h2>{{ info }}</h2> <!--父向子传值-->
    <h3>{{ user }}</h3> <!--子组件有默认的值-->
    <hr>
    <p>子组件向父组件传值: {{ count }}</p>
    <button v-on:click="add">子向父传值</button>
    <hr>
    <p>兄弟组件之间数据共享:</p>
    <button v-on:click="sendMsg">兄弟组件之间数据共享</button>
  </div>
</template>

<script>
// 兄弟组件之间数据共享
import bus from '@/assets/eventBus.js';

export default {
    name: 'HelloWorld',
    data() {
        return {
            count: 0,
        }
    },
    // 不要修改 prop 的值。
    props: {
        msg: String,
        info: {
            typeof: String,  // 未定义类型时,报错.
        },  
        user: {
            default: '刘一',
        }
    },
    // 方法
    methods: {
        // 自定义事件
        add() {
            this.count++;
            //  触发当前实例上的自定义事件
            this.$emit('numChange', this.count);  // 修改数据时，通过 $emit() 出发自定义事件.
        },
        // 兄弟组件之间数据共享
        sendMsg() {
            //  触发 bus 实例上的自定义事件
            bus.$emit('share', this.msg);
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pink {
    color: pink;
}
</style>
