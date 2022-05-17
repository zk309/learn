<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-15 17:42:01
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 18:20:23
 * @FilePath: \toutiao\src\views\Home\Home.vue
-->
<template>
  <div class="Home-container">
    <!-- <h1>Home 组件</h1> -->

    <!-- navbar 导航 -->
    <van-nav-bar title="今日头条" fixed placeholder>
      <template #right>
        <van-icon name="search" size="26" />
      </template>
    </van-nav-bar>

    <!-- 主题内容 -->
    <van-pull-refresh
      v-model="isLoading"
      v-bind:success-text="successText"
      v-bind:disabled="flag"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了!-_-!"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in list"
          v-bind:key="item.art_id"
          v-bind:art_id="item.art_id"
          v-bind:aut_id="item.aut_id"
          v-bind:aut_name="item.aut_name"
          v-bind:comm_count="item.comm_count"
          v-bind:cover="item.cover"
          v-bind:pubdate="item.pubdate"
          v-bind:title="item.title"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { articleList } from '@/api/articleAPI.js' // 导入获取文章列表数据的 API
import ArticleInfo from '@/components/Article/ArticleInfo.vue' // 导入 ArticleInfo 子组件
import _ from 'lodash' // 鲁大师提供了许多牛逼的函数, 节流, 防抖, 操作数组的一系列函数, 操作对象的一系列函数(对象的深拷贝和浅拷贝)
let fn = null

export default {
  // vue-tools 调试
  name: 'Home',
  // 组件
  components: {
    ArticleInfo
  },
  // 私有自定义指令
  directives: {},
  // 数据
  data() {
    return {
      channel_id: 0, // 频道 id, 为什么是6? 因为上拉刷新会刷新到空数组.
      timestamp: Date.now(), // 时间戳
      list: [], // 文章的列表数据
      loading: true, // 是否处于加载状态，加载过程中不触发load事件
      finished: false, // 是否已加载完成，加载完成后不再触发load事件
      isLoading: false, // 是否处于加载中状态
      successText: '!-_-! 刷新成功 !-_-!', // 刷新成功提示文案
      flag: false // 是否禁用下拉刷新
    }
  },
  // 计算属性
  computed: {},
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // 调用获取频道下的文章列表 API
    async initArticleList() {
      const { data: res } = await articleList(this.channel_id, this.timestamp)
      this.list = res.data.results
      console.log(this.list)
      this.loading = false // 只有调用获取频道下的文章列表 API完毕之后, 才允许使用下拉刷新功能.
    },
    // vant 组件, List列表, 下拉刷新功能
    async onLoad() {
      this.channel_id += 1
      const { data: res } = await articleList(this.channel_id, this.timestamp)
      this.list.push(...res.data.results)
      console.log(this.list)

      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      // if (res.length === 0) { this.finished = true } // 理想状态下
      if (this.list.length >= 80) {
        this.finished = true
      }
    },
    // 上拉刷新时触发
    async onRefresh() {
      // console.log('!-_-!')
      this.channel_id += 1
      const { data: res } = await articleList(this.channel_id, this.timestamp)
      this.list.unshift(...res.data.results)
      console.log(this.list)

      this.isLoading = false

      if (this.list.length >= 50) {
        this.successText = '请休息一会吧~~'
      }
      if (this.list.length >= 80) {
        this.flag = true
      }
    },
    recordTopHandler() {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  },
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created() {
    // 获取频道下的文章列表
    this.initArticleList()
  },
  // 2. 当页面被激活的时候, 添加事件监听
  activated() {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  // 当页面被缓存的时候, 添加事件监听
  deactivated() {
    window.removeEventListener('scroll', fn)
  }
}
</script>

<style lang="less" scoped></style>
