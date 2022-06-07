/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 11:16:04
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 11:46:56
 * @FilePath: \22_微信小程序\77_自定义组件---样式.js
 */
// 自定义组件 --- 样式

// 1. 组件样式隔离:
// 默认情况下, 自定义组件的样式只对当前组件生效, 不会影响到组件之外的 UI 结构.
// 好处: 
// 1. 防止外界的样式影响组件内部的样式;
// 2. 防止组件的样式破坏外界的样式;



// 2. 组件样式隔离的注意点:
// 1. app.wxss 中的全局样式对组件无效;
// 2. 只有 class 选择器会有样式隔离效果, id 选择器, 属性选择器, 标签选择器不受样式隔离效果;
// 建议: 在组件和引用的页面中建议使用 class 选择器, 不要使用 id, 属性, 标签选择器.



// 3. 修改组件的样式隔离选项
// 默认情况下, 自定义组件的样式隔离特性能够防止组件内外样式互相干扰的问题.
// 但是, (我就知道有但是 !-_-!) 我们希望外界能够控制组件内部的样式, 可以通过 styleIsolation 修改组件的样式隔离选项.

// 在组件的 .js 文件中新增如下配置: (推荐)
// Component({
//   option: {
//     styleIsolation: 'isolated'
//   }
// })
// 或者, 在组件的 .json 文件中新增如下配置:
// {
//   "styleIsolation": "isolated"
// }



// 4. styleIsolation 的可选值:
// 可选值          默认值    描述
// isolated         是      表示启用样式隔离, 在自定义组件内外, 使用 class 指定的样式将不会相互影响.
// apply-shared     否      表示页面 wxss 样式将影响到自定义组件, 但自定义组件 wxss 中指定的样式不会影响页面.
// shared           否      表示页面 wxss 样式将影响到自定义组件, 自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件.