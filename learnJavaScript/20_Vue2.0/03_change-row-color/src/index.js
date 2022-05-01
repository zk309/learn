/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-30 23:08:42
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 21:05:44
 * @FilePath: \03_change-row-color\src\index.js
 */
// 导入 jQuery
import $ from 'jquery'
// 如果某个模块中， 使用 from 接收到的成员为 undefined, 则不需要使用 from
// 导入 .css 文件, 在 webpack 中, 一切皆模块, 都可以通过 ES6 导入语法进行 导入和 使用, 注意, 要写全后缀名.
import './css/index.css';
// 导入 .less 文件.
import './css/index.less';
// 导入图片
import logo from './image/二哈.jpg';

// 把图片导入到 img 标签中
$('.box').prop('src', logo);

window.addEventListener('load', function(evt) {
    // 隔行变色
    $('ul li:odd').css('background', 'green');
    $('ul li:even').css('background', 'pink');

    // js 的高级语法：
    // 1. 定义了名为 info 的装饰器
    function info(target) {
        // 2. 为目标添加静态属性 info
        target.info = 'Preson info!-_-!'
    }

    // 3. 为 Person 类应用 info 装饰器
    @info
    class Person {}

    // 4. 打印 Person 的静态属性 info
    console.log(Person.info);

})
