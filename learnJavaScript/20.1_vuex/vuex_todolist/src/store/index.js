/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 12:26:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 13:27:22
 * @FilePath: \vuex_todolist\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 导入 axios, 获取初始数据
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储数据
  state: {
    list: [], // 初始数据
    inputValue: 'zk309', // 文本输入框
    nextId: 5, // id
    viewKey: 'all' // 实现三个按钮的高亮切换
  },
  // 修改数据
  mutations: {
    // 步骤一: 通过 axios 获取初始数据
    getList (state, step) {
      state.list = step
    },
    // 步骤二: 实现页面输入框与 State 中的 inputValue 的双向绑定.
    changeInput (state, val) {
      state.inputValue = val
    },
    // 步骤三: 实现点击按钮, 添加的效果
    addTodoList (state) {
      const data = {
        id: state.nextId,
        info: state.inputValue,
        done: false
      }
      state.nextId++
      state.inputValue = ''

      state.list.push(data)
    },
    // 步骤四: 实现点击删除按钮, 删除的效果
    delTodoList (state, val) {
      var newArr = []
      for (var i = 0; i < state.list.length; i++) {
        if (state.list[i].id === val) {
          continue
        } else {
          newArr[newArr.length] = state.list[i]
        }
      }
      // console.log(newArr)
      state.list = newArr
    },
    // 步骤五: 实现复选框与 State 的数据同步
    checkedTodoList (state, id) {
      for (var i = 0; i < state.list.length; i++) {
        if (state.list[i].id === id) {
          state.list[i].done = !state.list[i].done
        }
      }
    },
    // 步骤八: 实现 完成, 未完成, 已完成 三个按钮的高亮切换
    changeViewKey (data, val) {
      data.viewKey = val
    }
  },
  // 异步处理
  actions: {
    // 步骤一: 通过 axios 获取初始数据
    async getList (context) {
      await axios({
        method: 'GET',
        url: '/list.json'
      }).then((res) => {
        // console.log(res.data)
        context.commit('getList', res.data)
      })
    }
  },
  // 对数据进行加工
  getters: {
    // 步骤六: 计算出未完成的条数
    getResidue (state) {
      // 使用 for 循环至少三行, 使用 filter() 只需一行代码.
      var count = state.list.filter((item) => item.done === false).length
      return count
    },
    // 步骤七: 计算出完成的条数, 然后把它们的 id 封装成数组发送出去. 每一个都执行删除操作.
    // 这一步写麻烦了, 可以直接在 Mutations 中使用 filter() 即可.
    getFinishId (state) {
      var arr = state.list.filter((item) => item.done === true)
      var newArr = []
      for (var i = 0; i < arr.length; i++) {
        newArr[newArr.length] = arr[i].id
      }
      return newArr
    },
    // 步骤九: 实现点击全部按钮,显示全部条目; 点击未完成按钮,显示未完成条目; 点击完成按钮, 显示完成条目.
    getTodoList (state) {
      // 全部条目
      if (state.viewKey === 'all') {
        return state.list
      }
      // 未完成条目
      if (state.viewKey === 'undone') {
        return state.list.filter((item) => item.done === false)
      }
      // 已完成条目
      if (state.viewKey === 'done') {
        return state.list.filter((item) => item.done === true)
      }
    }
  },
  modules: {}
})
