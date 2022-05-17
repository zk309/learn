<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 12:04:54
 * @FilePath: \router-admin\src\components\menus\MyUsers.vue
-->
<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头衔</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-for="item in userlist" v-bind:key="item.id">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.position }}</td>
          <td><a href="javaScript:;" v-on:click="getDetails(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userlist: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ]
    }
  },
  methods: {
    // 跳转到详情页
    getDetails(id) {
      this.$router.push('/home/usersInfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped></style>
