<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 12:03:13
 * @FilePath: \router-admin\src\components\subcomponents\MyAside.vue
-->
<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item"><router-link to="/home/users">用户管理</router-link></li>
      <li class="menu-item"><router-link to="/home/rights">权限管理</router-link></li>
      <li class="menu-item"><router-link to="/home/goods">商品管理</router-link></li>
      <li class="menu-item"><router-link to="/home/orders">订单管理</router-link></li>
      <li class="menu-item"><router-link to="/home/settings">系统设置</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
  border-radius: 10px;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>
