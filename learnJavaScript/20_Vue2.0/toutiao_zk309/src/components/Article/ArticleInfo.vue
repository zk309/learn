<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-16 13:38:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 05:42:02
 * @FilePath: \toutiao\src\components\Article\ArticleInfo.vue
-->
<template>
  <div class="ArticleInfo-container">
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img v-bind:src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img v-bind:src="item" alt="" class="thumb" v-for="item in cover.images" v-bind:key="item.id" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ aut_name }} &nbsp;&nbsp; {{ comm_count }}评论 &nbsp;&nbsp; 发布日期 {{ pubdate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  // vue-tools 调试
  name: 'ArticleInfo',
  // 组件
  components: {},
  // 私有自定义指令
  directives: {},
  // 数据
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 自定义属性
  props: {
    art_id: [String, Number], // 文章 id, 通过数组形式, 为当前属性定义多个可能的类型
    aut_id: String, // 作者 id
    aut_name: String, // 作者名字
    comm_count: String, // 评论数量
    cover: Object, // 文章封面
    pubdate: String, // 发表时间
    title: String // 标题
  },
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
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
