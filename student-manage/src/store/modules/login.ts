import { login } from '@/service/index'

const state = {
    username: "",
    pwd: "",
    
}

const actions = {
    async getLogin({ commit }: { commit: Function }, payload: object): Promise<void> {
        console.log(payload, 'payload');
        let data: any = await login(payload);
        console.log(data, 'data');
    }
}

const mutations = {

}

export default {
    namespaced: true,  //  命名空间
    state,
    actions,
    mutations
}


// export default {
//     // 命名空间
//     namespaced:true,
//     state:{
//         username: "",
//         pwd: "",
//         ind:0,
//         nav:[] = ["登录","注册"],
//         current:{
//             username:"", // 用户名
//             pwd:"",  // 密码
//             flag:false
//         }
//     },
//     mutations:{
//     },
//     actions:{
//     }
// }