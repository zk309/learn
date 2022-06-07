/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-27 04:24:37
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-27 11:09:11
 * @FilePath: \22_微信小程序\62_上拉触底案例.js
 */
// 案例的实现步骤:
// 1. 定义获取随机颜色的方法;
// 2. 在页面加载时获取初始数据;
// 3. 渲染 UI 结构并美化页面样式;
// 4. 在上拉触底时调用获取随机颜色的方法;
// 5. 添加 loading 提示效果;
// 6. 对上拉触底进行节流处理;

// 我相信你, 在经过几个小时一定能写出来. 我就不复制代码了
// 案例在: localhost-life --> 下拉触底案例 tabBer页面


// ---------------------------------------------------------------
/*
  // 1. 定义获取随机颜色的方法
  getRandom(event) {
    // 公式： Math.floor(Math.random() * (max - min +1))+min;
    var r = Math.floor(Math.random() * (255 - 0 +1)) + 0;
    var g = Math.floor(Math.random() * (255 - 0 +1)) + 0;
    var b = Math.floor(Math.random() * (255 - 0 +1)) + 0;
    return 'rgb(' + r + ', ' + g + ', ' + b + ');';
  },

  // 获取随机颜色数据方法
  getList(event) {
    var arr = [];
    for(var i = 0; i < 10; i ++) {
      var random = this.getRandom();
      arr.push(random);
    }
    // console.log(arr)
    var result = this.data.list.concat(arr);
    this.setData({
      list: result,
      flag: true
    })
  },
*/

// 对上拉触底进行节流处理;
// 1. 在 data中定义 isLoading 节流阀;
//    false 表示当前没有进行任何数据请求
//    true  表示当前正在进行数据请求
// 2. 在 getColor() 方法中修改 isLoading 节流阀的值;
//    在刚调用 getColors 时将节流阀设置为 true
//    在网络请求的 complete 回调函数中, 将节流阀重置为 false
// 3. 在 onReachBottom 中判断节流阀的值, 从而对数据请求进行节流控制.
//    如果节流阀的值为 true, 则阻止当前请求
//    如果节流阀的值为 false, 则发起数据请求