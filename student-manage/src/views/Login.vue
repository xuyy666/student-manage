<template>
  <div class="login">
    <myHeader :title="title"></myHeader>
    <!-- <h4>重点学生日周考成绩录入管理系统</h4> -->
    <div class="loginer">
      <h3>网站工程</h3>
      <div class="enter">
        <div class="loginTab">
          <span :class="ind===1 ? 'activetab' : ''" @click="tabClick(1)">登录</span>
          <span :class="ind===2? 'activetab' : ''" @click="tabClick(2)">注册</span>
        </div>

        <form class="loginCon" v-if="isShow">
          <input type="text" placeholder="电话/邮箱" v-model="username" />
          <br />
          <input type="text" placeholder="输入密码" v-model="pwd" />
          <br />
          <div class="checkeds">
            <input type="checkbox" />
            <span>两周内自动登录</span>
          </div>
          <br />
          <button @click="userLogin">登入</button>
        </form>

        <form class="register" v-else>
          <input type="text" placeholder="电话/邮箱" v-model="username" />
          <br />
          <input type="text" placeholder="输入密码" v-model="pwd" />
          <br />
          <div class="checkeds">
            <input type="checkbox" />
            <span>两周内自动登录</span>
          </div>
          <br />
          <button @click="userLogin">登入</button>
        </form>

      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
//  查漏补缺  知错能改 见贤思齐 反省
//  name: "visualdisplay", //  作用
export default {
  props: {},
  components: {},
  data() {
    //  data 函数
    return {
      title: "重点学生日周考成绩录入管理系统",
      username: "",
      pwd: "",
      ind: 1,
      isShow:false
    };
  },
  computed: {
    // ...mapState({
    // username: (state: any) => state.login.username,
    // pwd: (state: any) => state.login.pwd
    // })
  },
  methods: {
    ...mapActions({
      login: "login/getLogin",
      register: "register/getRegister"
    }),
    //登录
    userLogin() {
      console.log("9090900900");
      this.login({
        username: this.username,
        password: this.pwd
      });
    },
    //  改变样式
    tabClick(ind) {
      this.ind = ind;
      isShow = true;
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
//  @media all and (min-width: 1201px){}
//  @media all and (min-width: 980px) and (max-width: 1200px) {......}
//  @media all and (max-width: 767px)
//  @media all and (min-width:768px) and (max-width:1200px){}

@charset "UTF-8";

@media screen and (min-width: 640px) and (max-width: 1200px) {
  .login {
    width: 100%;
    //  height: 100%;
    .loginer {
      background: skyblue;
    }
  }
}

@media screen and (max-width: 640px) {
}

.login {
  // margin: 10px auto;
  background: #fff;
  text-align: center;
  position: relative;
  h4 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #0076ff;
    color: #fff;
  }
}
.loginer {
  // width: 200px;
  // height: 200px;
  margin-top: 270px;
  padding: 10px 40px;
  background: cyan;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-weight: 500;
    font-size: 19px;
    // margin-top: 100px;
    height: 50px;
    line-height: 50px;
    // background: pink;
  }
}

.enter {
  .loginTab {
    span {
      font-size: 12px;
      height: 40px;
      line-height: 40px;
      //  background: red;
      padding: 8px;
      //  color:red;
    }
    .activetab {
      border-bottom: 2px solid blue;
      color: blue;
    }
  }
  .loginCon {
    width: 100%;
    input {
      // width: 100%;
      margin: 3px 0;
      height: 36px;
      border: 0;
      outline: 0;
      padding-left: 10px;
    }
    .checkeds {
      display: flex;
      align-items: center;
      vertical-align: middle;
      span {
        font-size: 10px;
        margin-left: 6px;
      }
    }
    button {
      width: 100%;
      border: 0;
      outline: 0;
      height: 30px;
      line-height: 30px;
      background: blue;
      color: #fff;
      border-radius: 3px;
    }
  }
  .con {
  }
}
</style>

	<!-- #container {
    position: relative;
    width: 600px;
    height: 600px;
    border: 1px solid #000;
    margin: auto;
}
#box {
    position: relative;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    background-color: #0ff;
} -->
