import request from '../utils/request';

// 用户列表
export function userList():Promise<object>{
    return request.get('/teacher/userlist')
}

// 修改成绩  record_date  stuid  skill_score
export function changeGrade():Promise<object>{
    return request.post('/student/modifyrecord')
}