// 前端路由的工作方式:
// 1. 用户点击了页面上的路由链接;
// 2. 导致 URL 地址栏中的 Hash 之发生了变化;
// 3. 前端路由监听到了 Hash 地址的变化;
// 4. 前端路由把当前 Hash 地址对应的组件渲染到浏览器中;

// 页面上的路由链接:           前端路由的对应关系:                   页面上要展示的组件:
// <a href="#/home"></a>    { path:'#/home', component: Home }       首页组件
// <a href="#/about"></a>   { path:'#/about', component: Home }      关于组件
// <a href="#/move"></a>    { path:'#/move', component: Home }       电影组件
