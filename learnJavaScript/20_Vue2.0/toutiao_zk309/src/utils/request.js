/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-16 11:02:39
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-16 11:08:16
 * @FilePath: \toutiao\src\utils\request.js
 */
// 导入 axios
import axios from 'axios'

// 调用 axios.create() 函数, 创建一个 axios 的实例对象, 用 request 来接收.
const request = axios.create({
  baseURL: 'http://www.liulongbin.top:8000' // 指定请求的根路径
})

export default request
