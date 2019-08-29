import request from '@/utils/request'

//   注册接口
export function register(params:any): Promise<Object>{
    console.log(params,'0000')
    return request.post('/teacher/register',params)
    // return request.post('/teacher/register',{username:params.username,password:params.password})
}

//  登录接口
export function login(params:any): Promise<Object>{
    return request.post('/teacher/login',params);
}


// {username:params.username,password:params.password}

//  http://148.70.121.59:9001/emstu/teacher/register


// export let login = (code:any)=>{
//     return request.post('/teacher/register',{code})
//     // return request.post('/api/teacher/register',{code})
// }