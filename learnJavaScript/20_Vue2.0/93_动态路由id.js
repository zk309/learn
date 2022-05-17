/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 09:41:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 11:45:02
 * @FilePath: \20_Vue2.0\93_动态路由id.js
 */
// 动态路由指的是: 把 Hash 地址中可变的部分定义为参数项, 从而提高路由规则的复用性.
// 在 vue-router 中使用英文的冒号 (:) 来定义路由的参数项.
// demo1: 基本使用
/*
  router/index.js:
  // 路由中的动态参数以 : 进行声明, 冒号后面的是动态参数的名称.
  { path: '/Movie/:id', component: Movie },

  movie.vue:
  <!-- this.$route 是路由的参数对象 -->
  <!-- this.$router 是路由的导航对象 -->
  <h3>Movie 组件 --- {{ this.$route.params.id }}</h3>
*/

/*
  demo2: 开启 props 传参
  { path: '/Movie/:id', component: Movie, props: true },

   props: {
    id: {
      type: String
    }
  },

  <!-- 为路由规则开启 props 传参. -->
  <h3>Movie 组件 --- {{ id }}</h3>
*/

// 注意1: 在 Hash 地址中, / 后面的参数项, 叫做 路径参数.
// 在路由参数对象中, 需要使用 this.$route.params 来访问路径参数.

// 注意2: 在 Hash 地址中, ? 后面的参数项, 叫做 查询参数.
// 在路由参数对象中, 需要使用 this.$route.query 来访问查询参数.

// 注意3: 在 this.$route 中, path 只是路径参数, fullPath 是完整的地址.
