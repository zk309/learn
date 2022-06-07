<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 12:28:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-30 09:53:18
 * @FilePath: \vuex_demo\src\components\Subtraction.vue
-->
<template>
  <div class="subtraction_container">
    <!-- 使用 State 的第二种方式 -->
    <!-- <div>当前最新的 count 值为: {{ count }}</div> -->
    <!-- 使用 getters 的第一种方式 -->
    <div>{{ showNum }}</div>
    <button v-on:click="reduce">- 1</button>
    <button v-on:click="reduce1(3)">- n</button>
    <button v-on:click="handler">-1 (间隔一秒后自减)</button>
    <button v-on:click="handler1(2)">-n (间隔一秒后自减)</button>
  </div>
</template>

<script>
// 1. 从 vuex 中按需导入 mapState 函数
// 1. 从 vuex 中按需导入 mapMutations 函数
// 1. 从 vuex 中按需导入 mapActions 函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  // vue-tools 调试
  name: 'Subtraction',
  // 组件
  components: {},
  // 私有自定义指令
  directives: {},
  // 数据
  data () {
    return {}
  },
  // 计算属性
  computed: {
    // 2. 将全局数据, 映射为当前组件的计算属性
    // 组件访问 State 中的数据的第二种方式: (推荐)
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // 2. 将指定的 mutations 函数, 映射为当前组件的 methods 函数, 然后调用
    // 通过 Mutation 变更数据方式二
    ...mapMutations(['reduceCount', 'reduceCount1']),
    // 通过 Actions 变更数据方式二
    ...mapActions(['reduceSync', 'reduceSync1']),
    reduce () {
      this.reduceCount()
    },
    reduce1 (n) {
      this.reduceCount1(n)
    },
    handler () {
      this.reduceSync()
    },
    handler1 (n) {
      this.reduceSync1(n)
    }
  },
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created () {}
}
</script>

<style lang="less" scoped></style>
