/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 11:26:18
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 13:11:11
 * @FilePath: \22_微信小程序\07_了解JSON配置文件及其作用.js
 */
// JSON 是一种数据结构, 在实际开发中, JSON 总是以配置文件的形式出现. 小程序项目中也不例外: 
// 通过不同的 .json 配置文件, 可以对小程序项目进行不同级别的配置:

// JSON 配置文件分类:
// 1. 项目根目录中的 project.config.json 配置文件;
// 2. 项目根目录中 sitemap.json 配置文件;
// 3. 项目根目录中的 app.json 配置文件;
// 4. 每个页面文件中的 .json 配置文件;

// 项目根目录中的 project.config.json 配置文件:
// project.config.json 是项目配置文件, 用来记录我们对小程序开发工具所做的个性化配置, 例如:
// 1. setting 中保存了编译相关的配置;
// 2. projectname 中保存的是项目名称;
// 3. appid 保存的是小程序的帐号 ID;

// 项目根目录中 sitemap.json 配置文件:
// 微信现已开放小程序内搜索, 效果类似于 PC 网页的 SEO. sitemap.json 文件用来配置小程序页面是否允许微信索引.
// 当开发者允许微信索引时, 微信会通过爬虫的形式, 为小程序的页面内容建立索引. 当用户的搜索关键字和页面的索引
// 匹配成功的时候, 小程序的页面将可能展示在搜索结果.
// 注意: 如果需要关闭 sitemap 的索引提示, 可以在 project.config.json 文件的 setting 字段的 "checkSiteMap":false,
//      如果没有 checkSiteMap, 可以写一个在 setting 字段中.

// 项目根目录中的 app.json 配置文件:
// app.json 是当前小程序的全局配置, 包括了小程序的所有页面路径, 窗口外观, 界面表现, 底部 tab 等.
// 简单了解 4 个配置项的作用:
// 1. pages: 用来记录当前小程序所有页面的路径;
// 2. window: 全局定义小程序所有页面的背景颜色, 文字颜色等;
// 3. style: 全局定义小程序组件所使用的样式版本;
// 4. sitemapLocation: 用来指明 sitemap.json 的位置;

// 每个页面文件中的 .json 配置文件:
// 小程序的每个页面, 可以使用 .json 文件来对本页面的窗口进行配置.
// 注意: 页面中的配置项会覆盖 app.json 的 window 中相同的配置项.

// ------------------------------------------------------------

// 新建小程序页面:
// 只需要在 app.json -> pages 节点下新增页面的存放路径, 保存, 即可自动创建对应的页面文件.

// 修改项目的首页:
// 调整 app.json -> pages 数组中页面路径的前后顺序, 即可修改项目的首页.