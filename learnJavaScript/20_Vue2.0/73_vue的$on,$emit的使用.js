/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 10:13:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 10:21:40
 * @FilePath: \20_Vue2.0\73_vue的$on,$emit的使用.js
 */
//  $emit(eventName)：
//  触发当前实例上的事件，附加参数都会传给监听器回调。

//  $on(eventName) ：
// 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。

// demo 1：
/* <template>
  <section>
    <h1>left</h1>
    <el-button type="primary" @click="isClick">点击</el-button>
  </section>
</template>

<script>
  export default {
    methods: {
      isClick() {
        this.$emit('isLeft', '点击事件！');
      }
    },
    mounted() {
      this.$on('isLeft', (val) => {
        console.log(val);
      });
    }
  }
</script> */

// demo 2: 实现兄弟组件共享数据。
/**
 * 子组件1：
 * <template>
  <section>
    <h1>left</h1>
    <el-button type="primary" @click="isClick">点击</el-button>
  </section>
</template>

<script>
  import eventBus from '~/utils/eventBus';
  export default {
    methods: {
      isClick() {
        eventBus.$emit('isLeft', '点击事件！');
      }
    }
  }
</script>
---------------------------------------------------------------------
子组件 2：
<template>
  <section>
    <h1>right</h1>
    {{ name }}
  </section>
</template>

<script>
  import eventBus from '~/utils/eventBus';
  export default {
    data() {
      return {
        name: 'right默认值'
      };
    },
    mounted() {
      eventBus.$on('isLeft', (info) => {
        this.name = info ;
      });
    }
  }
</script>
-----------------------------------------------------------------------
 */