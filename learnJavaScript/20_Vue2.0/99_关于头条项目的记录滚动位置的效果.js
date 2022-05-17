/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-17 18:22:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 18:28:05
 * @FilePath: \20_Vue2.0\99_关于头条项目的记录滚动位置的效果.js
 */
/*
  1. app.vue
  <!-- 实现记录滚动条位置的效果 -->
  <keep-alive include="Home">
    <router-view></router-view>
  </keep-alive>

  2.router/index.js
  创建 VueRouter 的实例对象
  const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
      1. return 期望滚动到哪个位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: to.meta.top || 0 }
      }
    }
  })

  3. Home.vue
  import _ from 'lodash' // 鲁大师提供了许多牛逼的函数, 节流, 防抖, 操作数组的一系列函数, 操作对象的一系列函数(对象的深拷贝和浅拷贝)
  let fn = null

  4. Home.vue --> method: {}
  recordTopHandler() {
    return _.debounce(
      () => {
        this.$route.meta.top = window.scrollY
      },
      50,
      { trailing: true }
    )
  }

  5. Home.vue 节点下
  当页面被激活的时候, 添加事件监听
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  当页面被缓存的时候, 添加事件监听
  deactivated() {
    window.removeEventListener('scroll', fn)
  }
*/