<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <!-- <div class="search">
     <i></i>
     <input type="text" class="搜索页面"> 
    </div> -->
    <div id="nav">
      <div><router-link tag="li" to="/">主页</router-link></div>
      <div><router-link tag="li" to="/login">登录与注册</router-link></div>
      <div><router-link tag="li" to="/visualdisplay">可视化展示</router-link></div>
      <div><router-link tag="li" to="/AllScore">所有成绩</router-link></div>
      <div><router-link tag="li" to="/deanvisual">院长视角</router-link></div>
      <div><router-link tag="li" to="/charts">charts</router-link></div>
    </div>
  </div>
</template>

<style lang="scss">
//   匹配 * 性能最低   不建议使用
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
   padding: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;

}
.content{
  width: 80%;
  // background: pink;
}
#nav {
  width: 10%;
  // padding: 10px;
  // background: orange;
  margin-left:20px;
  border-left:1px solid #ccc;
  text-align: left;
  padding-left:6px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//  响应式
</style>
