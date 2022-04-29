/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 16:25:29
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-18 17:35:57
 * @FilePath: \19_Node.js\32_包管理配置文件.js
 */
// npm 规定, 在项目根目录中, 必须提供一个叫做 package,json 的包管理配置文件. 用来记录与项目有关的一些配置信息.
// 1. 项目的名称, 版本号, 描述等;
// 2. 项目中都用到了那些包;
// 3. 哪些包只在开发期间会用到;
// 4. 那些包在开发和部署时都需要用到;



// 多人协作的问题: 第三包的体积过大, 不方便团队成员之间共享项目源代码.
// 解决方案: 共享时剔除 node_modules



// 如何让记录项目中曾经安装了那些包?
// 在项目根目录中, 创建了一个叫做 package.json 的配置文件, 既可用来记录项目中安装了那些包. 从而方便剔除 node_modules 目录之后, 在团队成员之间共享的项目源代码.
// 注意: 今后在项目开发中, 一定要把 node_modules 文件夹, 添加到 .gitignore 忽略文件中;



// 快速创建 package.json
// npm 包管理工具提供了一个快捷命令, 可以在执行命令时所处的目录, 快速创建 package.json 这个包管理配置文件.
// # 作用: 执行命令所处的目录中, 快速新建 package.json 文件
// npm init -y
// 注意:
// 1. 上述命令只能在英文的目录下成功运行, 所以, 项目文件的名称一定要使用英文命名, 不要使用中翁, 不能出现空格;
// 2. 运行 npm install 命令安装包的时候, npm 包管理工具会自动把包的名称和版本号, 记录到 package.json 中;



// dependencies 节点
// package.json 文件中, 有一个 dependencies 节点, 专门用来记录 npm install 命令安装了那些包.



// 一次性安装所有的包
// 当我们拿到一个剔除了 node_modules 的项目之后, 需要先把所有的包下载到项目中, 才能将项目运行起来.
// 否则汇报类似于下面的错误:
// 由于项目运行依赖于 moment 这个包, 如果没有提前安装好这个包, 就会报如下的错误:
// Error: Cannot find module 'moment'/
// 可以运行 npm install 命令时, npm 包管理工具就会先读取 package.json 中的 dependencies 节点, 
// 读取到记录的所有依赖包名称和版本号之后, npm 包管理工具会把这些包一次性下载到项目中.
// npm install



// 卸载包
// 可以运行 npm uninstall 命令, 来卸载指定的包
// 使用 npm uninstall 具体的包名 来卸载包
// npm uninstall moment
// 注意: npm uninstall 命令执行成功之后, 会把卸载的包, 自动从 package.json 的 dependencies 中移除掉;



// devDependencies 节点
// 如果某些包只在项目开发阶段会用到, 在项目上线之后不会用到, 则建议把这些包记录到 devDependencies 节点中, 
// 与之对应的, 如果某些包在开发和项目上线之后都需要用到, 则建议把这些包记录到 dependencies 节点中.
// 您可以使用如下的命令, 将包记录到 devDependencies 节点中:
// 安装指定的包, 并记录到 devDependencies 节点中
// npm i 包名 -D
// 注意: 上述命令是简写形式, 等价于下面完整的写法:
// npm install 包名 --save-dev