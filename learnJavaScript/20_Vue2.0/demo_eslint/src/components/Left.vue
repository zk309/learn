<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-13 08:40:09
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-13 09:59:10
 * @FilePath: \demo_eslint\src\components\Left.vue
-->
<template>
  <div class="Left-container">
    <h2>我是 Left.vue 组件.</h2>
    <hr />
    <button v-on:click="getInfo">发起 GET 请求.</button>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'Left',
  // 组件
  components: {},
  // 私有自定义指令
  directives: {},
  // 数据
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // 发起 axios get request
    async getInfo() {
      const { data: res } = await this.$http({
        method: 'GET',
        url: '/api/getbooks'
      })
      console.log(res)
    }
  },
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created() {}
}
</script>

<style lang="less" scoped>
.Left-container {
  min-height: 200px;
  background-color: skyblue;
  flex: 1;
}
</style>
