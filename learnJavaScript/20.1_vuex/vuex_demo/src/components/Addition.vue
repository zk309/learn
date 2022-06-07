<template>
  <div class="addition_container">
    <!-- 使用 State 的第二种方式 -->
    <!-- <div>当前最新的 count 值为:{{ count }}</div> -->
    <!-- 使用 getters 的第一种方式 -->
    <div>{{ this.$store.getters.showNum }}</div>
    <button v-on:click="addCount">+ 1</button>
    <button v-on:click="addCount1(2)">+ n</button>
    <button v-on:click="handle">+ 1 (间隔1秒后自增)</button>
    <button v-on:click="handle1(2)">+ n (间隔1秒后自增)</button>
  </div>
</template>

<script>
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'

export default {
  // vue-tools 调试
  name: 'Addition',
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
    ...mapState(['count'])
  },
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // Mutation 使用的第一种方式:
    addCount () {
      this.$store.commit('addCount')
    },
    // Mutation 使用的第一种方式:
    addCount1 (n) {
      this.$store.commit('addCount1', n)
    },
    // 触发 Action 的第一种方式
    handle () {
      this.$store.dispatch('addSync')
    },
    handle1 (n) {
      this.$store.dispatch('addSync1', n)
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
