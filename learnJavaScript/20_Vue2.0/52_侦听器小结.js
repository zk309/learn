/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-05 11:10:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-05 11:14:03
 * @FilePath: \20_Vue2.0\52_侦听器小结.js
 */
// 侦听器的格式:
// 1. 方法格式的侦听器:
//      缺点 1：无法在刚才进入页面的时候，自动触发;
//      缺点 2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器.
// 2. 对象格式的侦听器:
//      优点 1: 可以通过 immediate 选项，让侦听器自动触发；
//      优点 2： 可以通过 deep 选项，让侦听器深度监听对象中的每个属性的变化；