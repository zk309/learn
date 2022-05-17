/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 08:42:36
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 08:45:45
 * @FilePath: \20_Vue2.0\92_嵌套路由.js
 */
// 通过路由实现组件的嵌套展示, 叫做嵌套路由.
// 特点:
// 1. 模板内容中又有自己路由链接;
// 2. 点击子级路由链接显示自己模板内容;

// 通过 children 属性声明子路由规则:
// 在 src/router/index.js 路由模块中, 导入需要的组件, 并使用 children 属性声明子路由规则:
/*
    // about 页面的路由规则 (父子路由规则)
    {
      path: '/About',
      component: About,
      // redirect: '/About/tab1', // 路由重定向
      children: [
        // { path: '', redirect: 'tab1' }, // 路由重定向
        // 1. 通过 children 属性, 嵌套声明子级路由规则
        // 默认子路由, 如果 children 数组中,某个路由规则的 path 值为空字符串, 则这条路由规则, 叫做默认子路由.
        { path: '', component: Tab1 }, // 2. 访问 /About/tab1 时, 展示 Tab1 组件
        { path: 'tab2', component: Tab2 } // 2. 访问 /About/tab2 时, 展示 Tab2 组件
      ]
    }
*/
