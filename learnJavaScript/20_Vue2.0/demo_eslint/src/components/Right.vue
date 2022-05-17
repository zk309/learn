<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-13 08:40:16
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-13 09:59:14
 * @FilePath: \demo_eslint\src\components\Right.vue
-->
<template>
  <div class="right-container">
    <h2>我是 right.vue 组件.</h2>
    <hr />
    <button v-on:click="postInfo">发起 post 请求.</button>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'Right',
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
    async postInfo() {
      const { data } = await this.$http({
        method: 'POST',
        url: '/api/addbook',
        data: {
          bookname: '神曲炼狱篇',
          author: '但丁',
          publisher: '浙江文艺出版社'
        }
      })
      console.log(data)
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
.right-container {
  min-height: 200px;
  background-color: pink;
  flex: 1;
}
</style>
