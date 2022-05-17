/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 08:26:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 08:35:23
 * @FilePath: \20_Vue2.0\70_父组件向子组件共享数据.js
 */
// 父组件向子组件共享数据需要使用自定义属性 props.

// 父组件
// <Son v-bind:msg="message" v-bind:user="userInfo"></Son>

// data() {
//     return {
//         message: 'Hello',
//         userInfo: { name: 'zs', age: 20 }
//     }
// }


// 子组件
/* <template>
    <div>
        <h5>Son 组件</h5>
        <p>父组件传递过来的 msg 值是: {{ msg }}</p>
        <p>父组件传递过来的 user 值是: {{ user }}</p>
    </div>
</template> */

// props: ['msg', 'user']