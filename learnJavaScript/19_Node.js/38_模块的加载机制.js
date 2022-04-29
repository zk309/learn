/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 17:05:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 17:42:32
 * @FilePath: \19_Node.js\38_模块的加载机制.js
 */
// 优先从缓存中加载：
// 模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行。
// 注意：不论是内置模块，用户自定义模块，还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。


// 内置模块的加载机制：
// 内置模块是由 NOde.js 官方提供的模块，内置模块的家在优先级最高。
// 例如，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs.


// 自定义模块的加载机制：
// 使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符。在加载自定义模块时，如果没有指定 ./ 或 ../ 这样
// 地路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。
// 同时， 在使用 require() 导入自定义模块时，如果省略文件的扩展名，则 Node.js 会按照顺序分别尝试加载一下文件：
// 1. 按照确切的文件名进行加载；
// 2. 补全 .js 扩展名进行加载；
// 3. 补全 .json 扩展名进行加载；
// 4. 补全 .node 扩展名进行加载；
// 5. 加载失败， 终端报错；


// 第三方模块的加载机制：
// 如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。
// 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。
// 例如，假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找：
//1.  C:\Users\itheima\project\node_modules\tools
//2.  C:\Users\itheima\node_modules\tools
//3.  C:\Users\node_modules\tools
//4.  C:\node_modules\tools


// 目录的加载机制：
// 当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
// 1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
// 2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
// 3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'

