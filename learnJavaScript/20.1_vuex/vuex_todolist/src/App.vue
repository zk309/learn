<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 12:26:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 13:21:27
 * @FilePath: \vuex_todolist\src\App.vue
-->
<template>
  <div id="app">
    <a-input
      class="my_ipt"
      placeholder="请输入任务"
      v-bind:value="inputValue"
      v-on:change="inputChange"
    />
    <a-button type="primary" v-on:click="addItemTodoList">添加事项</a-button>

    <a-list class="dt_list" bordered :dataSource="getTodoList">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox
          v-bind:checked="item.done"
          v-on:click="changeChecked(item.id)"
          >{{ item.info }}
        </a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" v-on:click="delHandler(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>{{ getResidue }}条剩余</span>
        <a-button-group>
          <a-button
            v-bind:type="viewKey === 'all' ? 'primary' : 'default'"
            v-on:click="changeList('all')"
            >全部</a-button
          >
          <a-button
            v-bind:type="viewKey === 'undone' ? 'primary' : 'default'"
            v-on:click="changeList('undone')"
            >未完成</a-button
          >
          <a-button
            v-bind:type="viewKey === 'done' ? 'primary' : 'default'"
            v-on:click="changeList('done')"
            >已完成</a-button
          >
        </a-button-group>
        <a v-on:click="delHandlerAll(getFinishId)">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
// 触发 Action, 获得初始化数据
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  // vue-tools 调试
  name: 'app',
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
    // 将 State 中的值映射为当前属性.
    ...mapState(['list', 'inputValue', 'viewKey']),
    ...mapGetters(['getResidue', 'getFinishId', 'getTodoList'])
  },
  // 自定义属性
  props: {},
  // 方法
  methods: {
    // 将 actions 函数, 映射为当前组件的 methods 函数
    ...mapActions(['getList']),
    // 将 mutations 函数, 映射为当前组件的 methods 函数
    ...mapMutations([
      'changeInput',
      'addTodoList',
      'delTodoList',
      'checkedTodoList',
      'changeViewKey'
    ]),
    // 实现页面输入框与 State 中的 inputValue 的双向绑定.
    inputChange (e) {
      // console.log(e.target.value)
      this.changeInput(e.target.value)
    },
    // 实现点击按钮, 添加的效果
    addItemTodoList () {
      // console.log('!-_-!')
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空!-_-!')
      }
      this.addTodoList()
    },
    // 删除操作
    delHandler (id) {
      // console.log(id)
      // 只有传 item.id 才会删除.
      this.delTodoList(id)
    },
    // 复选框状态与 State 的数据同步
    changeChecked (id) {
      // console.log('!-_-!')
      this.checkedTodoList(id)
    },
    // 计算出完成的条数, 然后把它们的 id 封装成数组发送出去. 每一个都执行删除操作.
    delHandlerAll (arr) {
      // console.log('!-_-!')
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        this.delTodoList(arr[i])
      }
    },
    // 实现 完成, 未完成, 已完成 三个按钮的高亮切换
    changeList (val) {
      // console.log(val)
      this.changeViewKey(val)
    }
  },
  // 侦听器
  watch: {},
  // 过滤器
  filters: {},
  // 生命周期函数-创建后
  created () {
    this.getList()
    // console.log(this.list)
  }
}
</script>
<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
