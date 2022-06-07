<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-06 11:14:21
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-06 15:10:09
 * @FilePath: \22_微信小程序\115_自定义tabBer步骤.md
-->
#### 自定义 tabBer 步骤:
1. 配置信息;
2. 添加 tabBar 代码文件;
3. 编写 tabBer 代码;    
   以上三步详细步骤,参考微信官方文档: https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html
4. 使用 Vant Weapp 组件的 Tabbar 标签栏;
   详细步骤, 参考 Vant Weapp文档: https://youzan.github.io/vant-weapp/#/tabbar
5. 建议使用 Vant Weapp 的自定义图标, 使用 wx:for 循环渲染自定义图标.
6. 将 info 用 observer 数据监听, active 放在 MoboX 数据中.