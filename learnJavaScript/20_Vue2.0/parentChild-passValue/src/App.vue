<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-08 15:37:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 09:33:57
 * @FilePath: \parentChild-passValue\src\App.vue
-->
<template>
  <div id="app">
    <h2 class="pink">我是 App 组件。</h2>
    <!-- 子组件 -->
    <h2>子组件向父组件传值: {{ countFromSon }}</h2>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App" v-bind:info="messageInfo" v-on:numChange="getNewCount" />
    <hr>
    <Test></Test>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Test from '@/components/Test.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'Test': Test,
  },
  data() {
      return {
        // 父向子传值,自定义属性，props  
        messageInfo: '如此美丽的框架就好像一门语言，就如语言般神奇。',  // 父组件向子组件传值
        countFromSon: 0,
      }
  },
  methods: {
      // 子向父传值，自定义事件, $.emit()
      getNewCount(val) {
          this.countFromSon = val;
      }
  },
  
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .pink {
      color: pink;
  }
}
</style>
