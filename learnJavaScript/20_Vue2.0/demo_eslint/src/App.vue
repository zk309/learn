<template>
  <div class="app-container">
    <h1>App.vue 根组件</h1>
    <hr />
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
// 导入 Left.vue 组件
import Left from '@/components/Left.vue'
// 导入 Right.vue 组件
import Right from '@/components/Right.vue'

export default {
  // vue-tools 调试
  name: 'App',
  // 组件
  components: {
    Left,
    Right
  },
  // 私有自定义指令
  directives: {},
  // 数据
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 自定义属性
  props: {},
  // 方法
  methods: {},
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created() {}
}
</script>

<style lang="less" scoped>
.app-container {
  .box {
    display: flex;
  }
}
</style>
