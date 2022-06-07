/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 10:54:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 01:57:28
 * @FilePath: \22_微信小程序\36_手动指定索引和当前项的变量名.js
 */
// 手动指定索引和当前项的变量名:
// 1. 使用 wx:for-index 可以指定当前循环项的索引的变量名;
// 2. 使用 wx:for-item 可以指定当前项的变量名;

/* .wxml 文件:
<view wx:for="{{ infoArray }}" wx:for-index="idx" wx:for-item="itemName" class="father2">
  手动指定索引和当前项的变量名, 索引是: {{ idx }}, 当前项是: {{ itemName }}.
</view>
*/