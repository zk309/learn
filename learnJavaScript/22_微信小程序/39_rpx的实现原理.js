/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 13:31:48
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-24 13:40:54
 * @FilePath: \22_微信小程序\39_rpx的实现原理.js
 */
// 什么是 rpx 尺寸单位?
// rpx (responsive pixel) 是微信小程序独有的, 用来解决屏适配的尺寸单位.

// rpx 的实现原理:
// rpx 的实现原理非常简单: 鉴于不同设备屏幕的大小不同, 为了实现屏幕的自动适配, rpx 把所有设备的屏幕, 
// 在宽度上等分为 750 份 (即, 当前屏幕的总宽度为 750 rpx);

// 注意: 
// 1. 在较小的设备上, 1rpx 所代表的宽度较小;
// 2. 在较大的设备上, 1rpx 所代表的宽度较大;

// 小程序在不同设备上运行的时候, 会自动把 rpx 的样式单位换算成对应的像素单位来渲染, 从而实现屏幕适配.