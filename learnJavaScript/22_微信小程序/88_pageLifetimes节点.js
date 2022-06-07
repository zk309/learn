/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 14:54:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 14:56:52
 * @FilePath: \22_微信小程序\88_pageLifetimes节点.js
 */
// pageLifetimes 节点
// 组件所在页面的生命周期函数， 需要定义在组件的 PageLifetimes 节点下。
Component({
  pageLifetimes: {
    show: function() {}, // 页面被展示
    hide: function() {}, // 页面被隐藏
    resize: function(size) {} // 页面尺寸变化 
  }
})