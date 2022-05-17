/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-13 19:31:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-13 19:39:04
 * @FilePath: \20_Vue2.0\89_实现简易的前端路由.js
 */
// 实现简易的前端路由:
// 1. 通过 component 标签, 结合 componentId 动态渲染组件.
/*
    <!-- 通过 is 属性, 指定要展示的组件的名称. -->
    <component :is="componentId">
      <Home></Home>
      <Movie></Movie>
      <About></About>
    </component>

    data() {
      return {
        componentId: 'Home' // 要展示的组件名称
    }
  },
*/

// 2. 在 App.vue 组件中, 为 a 链接添加对应的 hash 值:
/*
    <a href="#/Home">首页</a>
    <a href="#/Movie">电影</a>
    <a href="#/About">关于</a>
*/

// 3. 在 created 生命周期函数中, 监听浏览器地址中的 hash 地址动态的变化, 动态切换要展示组件名称:
/*
  created() {
    window.onhashchange = () => {
      console.log('监听 hash 变化.')
      console.log(location.hash)
      switch (location.hash) {
        case '#/Home':
          this.componentId = 'Home'
          break
        case '#/Movie':
          this.componentId = 'Movie'
          break
        case '#/About':
          this.componentId = 'About'
          break
        default:
          break
      }
    }
  }
*/
