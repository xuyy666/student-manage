const key = 'token'
// 设置cookie, 过期时间为十个小时
export function setToken(val: string) {
    console.log(val)
    localStorage.setItem(key, val);
}
// 读取cookie
export function getToken() {
    if (window.localStorage.getItem(key)) {
        return true
    } else {
        return false
    }
    //  return  window.localStorage.getItem(key) 
}
// 删除cookie
export function removeToken() {
    window.localStorage.removeItem(key)
}
