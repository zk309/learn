/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 14:03:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 02:05:35
 * @FilePath: \22_微信小程序\40_rpx和px之间的单位换算.js
 */
// rpx 和 px 之间的单位换算:

// 比如, 在 iPhone6 上, 屏幕宽度为 375 px, 共有 750 个物理像素, 而 rpx 会将所有设备屏幕等分为 750 份,
// 即 375px === 750 物理像素 === 750 rpx
// 即 0.5px ===  1  物理像素 ===  1  rpx
// 即  1 px ===  2  物理像素 ===  2  rpx

// 官方建议: 开发微信小程序时, 设计师可以用 iPhone6 作为视觉稿的标准.
// 开发举例: 在 iPhone6 上如果要绘制 宽100px, 高20px 的盒子, 换算成 rpx 单位, 宽高分别为200rpx和40rpx.
