/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-16 12:02:30
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-16 12:23:09
 * @FilePath: \toutiao\src\api\articleAPI.js
 */
// 导入 axios 实例对象
import request from '@/utils/request.js'

// 封装获取频道下的文章列表函数
export const articleList = function(id, timestamp) {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: id,
      timestamp: timestamp
    }
  })
}
