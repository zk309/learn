<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 12:01:22
 * @FilePath: \router-admin\src\components\MyLogin.vue
-->
<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="" />
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称: </label>
          <input
            type="text"
            class="form-control ml-2"
            id="username"
            placeholder="请输入登录名称"
            autocomplete="off"
            v-model.trim="form.username"
            v-on:keyup.enter="nextInput($event)"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码: </label>
          <input
            type="password"
            class="form-control ml-2"
            id="password"
            placeholder="请输入登录密码"
            ref="password"
            v-model.trim="form.password"
            v-on:keyup.enter="autoLogin($event)"
          />
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" v-on:click="getReset">重置</button>
          <button type="button" class="btn btn-primary" ref="login" v-on:click="getLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'MyLogin',
  // 组件
  components: {},
  // 私有自定义指令
  directives: {},
  // 数据
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  // 计算属性
  computed: {},
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // 验证用户名和密码
    getLogin() {
      if (this.form.username !== 'admin' && this.form.password !== '123456') {
        this.getReset()
        localStorage.removeItem('token')
        alert('密码或用户名输入错误, 请重新输入!-_-!')
      } else {
        this.getReset()
        // alert('登陆成功!-_-!')
        localStorage.setItem('token', 'Bearer ' + new Date())
        this.$router.replace('/home')
      }
    },
    // 重置用户名和密码
    getReset() {
      this.form = {
        username: '',
        password: ''
      }
    },
    // 输入完成后按下回车键自动跳转到下一个input框
    nextInput(event) {
      if (event) {
        event.target.blur()
        this.$refs.password.focus()
      }
    },
    // input 输入完成, 自动登录
    autoLogin(event) {
      if (event) {
        event.target.blur()
        this.$refs.login.click()
      }
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
.login-container {
  background-color: pink;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>
