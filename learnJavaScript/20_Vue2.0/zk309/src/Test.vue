<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-06 10:44:57
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-06 17:54:52
 * @FilePath: \zk309\src\Test.vue
-->
<template>
<!-- 模板结构，应该只能有一个根节点 <div> -->
<div>
     <div class="box">
        <h1>我是 Test.vue. </h1>
        <h3>{{ info }}</h3>
        <button v-on:click="get">按钮</button>
    </div>
    <div>123</div>
</div>
   
</template>

<script>
// 默认导出，这是固定写法。
export default {
    // 当前组件中的数据源
    // 注意，.vue 组件中的 data 不能像之前一样，不能指向对象。
    // 注意，组件中的 data 必须是一个函数.
    data (){
        // 这个 return 出去的 {  } 中，可以定义数据。
        return {
            info: '如此美丽的框架，好像一门编程语言.就如一门编程语言般神奇.'
        }
    },
    // 当前组件中的计算属性
    computed: {
        // 
    },
    // 当前组件中的方法
    methods: {
        get() {
            // 在组件中，this 就表示当前组件的实例对象。
            // console.log(this);  // VueComponent 
            if (this.info == '!-_-!') {
                this.info = '如此美丽的框架，好像一门编程语言.就如一门编程语言般神奇.';
            } else {
                this.info = '!-_-!'
            }
            
        }
    },
    // 当前组件中侦听器
    watch: {
        // 
    },
    // 当前组件中的过滤器
    filters: {
        // 
    }
}
</script>

<!--启用 less 语法-->
<style lang="less" scoped>
    .box {
        margin: 10px auto;
        width: 300px;
        height: 300px;
        background-color: pink;
        border-radius: 10px;

        button {
            display: block;
            margin: 0 auto;
        }
    }
</style>