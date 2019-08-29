import { register } from '@/service/index'

const state = {
    username: "",
    pwd: ""
}

const actions = {
    async getRegister({ commit }: { commit: Function }, payload: object): Promise<void> {
        console.log(payload, 'payload');
        let data: any = await register(payload);
        console.log(data, 'data');
    }

    // async register({commit}: {commit: Function}): Promise<void>{
    //     let data:any = await register();
    //     // 更新品牌信息
    //     let register:any = {};
    //     // commit('updateBrandList', brandList);
    //     // commit('updateLetterList', Array.from(new Set(letterList)));
    //  }
    // 登录
    //  async login ({commit}:{commit:Function}):Promise<void>{
    //  }

}

const mutations = {
    // updateBrandList(state: any, payload: Object){
    //     state.brandList = payload;
    // },
    // updateLetterList(state: any, payload: Array<string>){
    //     state.letterList = payload;
    // },
    // updateTypeList(state: any, payload: Array<Object>){
    //     state.typeList = payload;
    // }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}


