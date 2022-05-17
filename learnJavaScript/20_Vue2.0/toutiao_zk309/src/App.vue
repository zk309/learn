<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-15 14:28:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 17:55:10
 * @FilePath: \toutiao\src\App.vue
-->
<template>
  <div class="app-container">
    <!-- <h1>我是 app 根组件.</h1> -->

    <!-- 路由占位符 -->
    <!-- 实现记录滚动条位置的效果 -->
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>

    <!-- 标签导航 -->
    <van-tabbar route fixed placeholder active-color="pink">
      <van-tabbar-item icon="home-o" to="/home"> 首页 </van-tabbar-item>
      <van-tabbar-item icon="user-o" badge="7" to="/users">
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'App',
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
  methods: {},
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created() {}
}
</script>

<style lang="less" scoped></style>
