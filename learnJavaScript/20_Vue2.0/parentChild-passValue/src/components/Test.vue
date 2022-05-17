<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 08:57:05
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 10:03:00
 * @FilePath: \parentChild-passValue\src\components\Test.vue
-->
<template>
  <div>
      <h3 class="pink">我是 Test 组件.</h3>
      <h3>{{ msgFormLeft }}</h3>
  </div>
</template>

<script>
// 兄弟组件之间数据共享
import bus from '@/assets/eventBus.js';

export default {
    data() {
        return {
            msgFormLeft: ''
        }
    },
    created() {
        //  监听当前实例上的自定义事件
        bus.$on('share', val => {
            this.msgFormLeft = val;
        })
    },
}
</script>

<style lang="less" scoped>
.pink {
    color: pink;
}
</style>