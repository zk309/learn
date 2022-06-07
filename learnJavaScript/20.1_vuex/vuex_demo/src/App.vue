<template>
  <div class="app_container">
    <my-addition></my-addition>
    <div>---------------------------------</div>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from '@/components/Addition.vue'
import Subtraction from '@/components/Subtraction.vue'

export default {
  // vue-tools 调试
  name: 'APP',
  // 组件
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  },
  // 私有自定义指令
  directives: {},
  // 数据
  data () {
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
  created () {}
}
</script>

<style lang="less" scoped></style>
