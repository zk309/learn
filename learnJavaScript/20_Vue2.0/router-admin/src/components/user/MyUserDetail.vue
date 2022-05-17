<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 11:51:50
 * @FilePath: \router-admin\src\components\user\MyUserDetail.vue
-->
<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" v-on:click="$router.back()">后退</button>
    <h4 class="text-center">用户详情 --- {{ id }}</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: {
    id: {
      require: true,
      type: Number
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
