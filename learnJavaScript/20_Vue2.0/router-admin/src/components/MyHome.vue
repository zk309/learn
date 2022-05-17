<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 09:25:32
 * @FilePath: \router-admin\src\components\MyHome.vue
-->
<template>
  <div class="home-container">
    <!-- 后台主页 -->
    <!-- 头部区域 -->
    <MyHeader></MyHeader>

    <!-- 主体区域 -->
    <div class="home-main-box">
      <!-- 侧边栏 -->
      <MyAside></MyAside>

      <!-- 主题内容 -->
      <div class="home-main-body">
        <!-- 123 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from './subcomponents/MyHeader.vue'
// 左侧边栏组件
import MyAside from './subcomponents/MyAside.vue'

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
