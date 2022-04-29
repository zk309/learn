/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 16:15:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 17:40:26
 * @FilePath: \19_Node.js\37_发布包与删除包.js
 */
// 登陆 npm 账号
// npm 账号注册完成后, 可以在终端执行 npm login 命令, 依次输入用户名, 密码, 邮箱后, 即可登录成功.
// 注意:
// 在运行 npm login 命令之前, 必须先把下包的服务器地址切换为 npm 的官方服务器, 否则会导致发布包失败.


// 把包发布到 npm 上
// 将终端切换为包的根目录, 一定要切换, 运行 npm publish 命令, 即可将包发布到 npm 上 (注意: 包名不能雷同);


// 删除已发布的包
// 运行 npm unpublish 包名 --force 命令, 即可从 npm 删除已发布的包.


// 注意:
// 1. npm unpublish 命令只能删除 72 小时以内发布的包;
// 2. npm unpublish 删除的包, 在 24 小时以内不允许重复发布;
// 3. 发布包的时候, 尽量不要往 npm 上发布没有意义的包!