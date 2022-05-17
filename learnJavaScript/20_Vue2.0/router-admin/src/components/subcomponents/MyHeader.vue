<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 12:02:19
 * @FilePath: \router-admin\src\components\subcomponents\MyHeader.vue
-->
<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 左侧 logo 和 标题区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="../../assets/heima.png" alt="" />
      <!-- 标题 -->
      <h4 class="layout-header-left-title ml-3">后台管理系统</h4>
    </div>

    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" v-on:click="loginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'MyHeader',
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
    // 退出登录操作
    loginOut() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
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
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
}
</style>
