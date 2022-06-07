/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 14:30:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 14:36:29
 * @FilePath: \22_微信小程序\86_lifetimes节点.js
 */
// lifetimes 节点
// 在小程序组件中, 生命周期函数可以直接定义在 Component 构造器的第一级参数中, 可以在 lifetimes
// 字段内进行声明 (这是推荐的方式, 其优先级最高).

Component({
  // 推荐使用
  lifetimes: {
    created () {},
    attached () {},
    detached () {}
  },
  // 旧式定义方式, 不推荐
  created () {},
  attached () {},
  detached () {}
})