/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 14:08:10
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 14:22:28
 * @FilePath: \22_微信小程序\85_自定义组件的生命周期函数.js
 */
// 1. 小程序组件可用的全部生命周期函数:
// 生命周期       参数        描述说明
// created   *     无         在组件实例刚刚被创建时执行
// attached   *    无         在组件实例进入页面节点树时执行
// ready          无         在组件视图层布局完成后执行
// moved          无         在组件实例被移动到节点树另一个位置时执行
// detached    *   无         在组件实例被页面节点树移除时执行
// error          无         每当组件方法抛出错误时执行

// 2. 组件主要的生命周期函数:
// 2.1  组件实例刚被创建好的时候, created 声明周期函数会被触发.
//      此时还不能调用 setData
//      通常在这个声明周期函数中,只应该用于给组建的 this 添加一些自定义的属性字段
// 2.2  在组件完全初始化完毕,, 进入页面节点树后, attached 生命周期函数会被触发
//      此时, this.data 已被初始化完毕
//      这个生命周期很有用, 绝大多数初始化的工作可以在这个时机进行 (例如发送请求获取初始数据)
// 2.3  在组件离开页面节点树后, detached 生命周期函数会被触发
//      退出一个页面时, 会触发页面内每个自定义组件的 detached 生命周期函数
//      此时适合做一些清理性质的工作.