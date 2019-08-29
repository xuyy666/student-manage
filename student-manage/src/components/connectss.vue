<!-- echarts -->
<!-- <template>
    <div id="ctx" ref="canvas"></div>
    </template>
<script>
import echarts from "echarts";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // console.log(this.$refs.canvas);
    var myChart = echarts.init(this.$refs.canvas);
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "xx同学的日周考成绩统计图"
      },
      tooltip: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ["技能", "理论"]
      },
      xAxis: {
        data: [
          "08-01",
          "08-02",
          "08-03",
          "08-04",
          "08-05",
          "08-06",
          "08-07",
          "08-09",
          "08-10",
          "08-11",
          "08-12",
          "08-13"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "技能",
          type: "line",
          color: "#c1232b",
          data: [25, 55, 65, 22, 23, 76.7, 36.5, 61, 35, 20.18, 10, 8],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "理论",
          type: "line",
          color: "#b5c334",
          data: [26, 60, 83, 24, 26, 75, 78, 82.2, 49, 20, 60, 13],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<style scoped lang="scss">
@media screen and(min-width: 760px) and(max-width:1920px) {
  #ctx {
    width: 1350px;
    height: 534px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>

王朝晖-18634986660 2019/8/27 16:09:58

登录页
<template>
  <div class="login">
    <my-head :title="title"></my-head>
    <div class="main">
      <h3 class="title">网站工程</h3>
      <p class="tab">
        <span class="active">登入</span>
        <span>注册</span>
      </p>
      <form action class="loginForm">
        <p>
          <input type="text" placeholder="牛牛号/电邮">
        </p>
        <p>
          <input type="password" placeholder="输入密码">
        </p>
        <label for class="autoLogin">
          <input type="checkbox"><span>两周内自动登入</span>
        </label>
        <button class="submit">登入<tton>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      title: "重点学生日周考成绩录入管理系统"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">

.submit {
  text-align: center;
  color: #fff;
  background: #3f51b5;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  margin-top: 20px;
}
@media screen and(min-width:428px) and(max-width: 1920px) {
  
  .main {
    width: 499px;
    height: 471px;
    margin: 0 auto;
    margin-top: 144px;
    padding: 31px 62px;
    box-sizing: border-box;
  }
  .title {
    width: 100%;
    line-height: 68px;
    text-align: center;
    font-size: 36px;
    font-weight: 400;
  }
  .tab {
    width: 100%;
    line-height: 30px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    span {
      padding: 0 20px;
      position: relative;
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background: #858585;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .active {
      color: #3f51b5;
      &:after {
        background: #3f51b5;
      }
    }
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    p {
      width: 100%;
      height: 42px;
      border: 1px solid #ccc;
      //   margin: 0 auto;
      margin-top: 20px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding-left: 15px;
        box-sizing: border-box;
      }
    }
  }
  .autoLogin {
    line-height: 28px;
  }
  .submit {
    line-height: 42px;
  }
}
@media screen and(max-width:428px) {
  .login > header {
    height: 2rem;
    font-size: 0.56rem;
  }
  .main {
    width: 100%;
    margin-top: 2.88rem;
    padding: 0.62rem 1.24rem;
    box-sizing: border-box;
  }
  .title {
    width: 100%;
    line-height: 1.36rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
  }
  .tab {
    width: 100%;
    line-height: 1rem;
    display: flex;
    justify-content: center;
    padding: 0.4rem 0;
    span {
      padding: 0 0.4rem;
      font-size: 0.4rem;
      position: relative;
      &:after {
        content: "";
        width: 100%;
        height: 1px;
        background: #858585;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .active {
      color: #3f51b5;
      &:after {
        background: #3f51b5;
      }
    }
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    p {
      width: 100%;
      height: 1.84rem;
      border: 1px solid #ccc;
      //   margin: 0 auto;
      margin-top: 0.4rem;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding-left: 0.3rem;
        box-sizing: border-box;
      }
    }
  }
  .autoLogin{
      display: flex;
      align-items: center;
      font-size: 0.28rem;
      height: 1.4rem;
  }
  .submit{
      width: 100%;
      height: 2.24rem;
      font-size: 0.76rem;
      margin-top: 0.4rem;
  }
}
</style>

王朝晖-18634986660 2019/8/27 16:11:16

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Head from './components/head.vue'
import 'element-uib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('my-head', Head)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

王朝晖-18634986660 2019/8/27 16:11:51

<style lang="scss" scoped>
.home > header {
  background: #0076ff;
}
@media screen and(min-width: 760px) and(max-width:1920px) {
  .tabList {
    margin: 20px auto;
    width: 1350px;
    height: 126px;
    line-height: 20px;
    border: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    .tabClass {
      flex: 1;
      display: flex;
      align-items: center;
      dt {
        padding: 0 20px 0 57px;
      }
      dd {
        width: 95px;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
        color: #1989fa;
        margin: 0 20px;
        font-size: 14px;
        background-color: rgba(230, 241, 252, 1);
        text-align: center;
        border: 1px solid rgba(163, 208, 253, 1);
      }
      .active {
        background: #5677fc;
        color: #fff;
      }
      .addClass {
        background: #fff;
        color: #000;
        border: 1px solid #ccc;
      }
    }
    .tabStyle {
      padding-top: 26px;
      display: flex;
      .tabBtn {
        width: 63px;
        height: 24px;
        background: #aabbfd;
        border-radius: 17px;
        position: relative;
        span {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #5677fc;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .tabMsg {
        font-size: 14px;
        font-family: SourceHanSansSC-regular;
        padding: 0 26px 0 10px;
      }
    }
  }
  .students {
    display: flex;
    align-items: center;
    padding-left: 91px;
    span {
      padding: 0 17px;
    }
    label {
      width: 240px;
      height: 40px;
      margin: 0 11px;
      border: 1px solid #ccc;
      border-radius: 4px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
        padding-left: 15px;
      }
    }
    button {
      width: 95px;
      height: 40px;
      line-height: 20px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(230, 241, 252, 1);
      text-align: center;
      border: 1px solid rgba(163, 208, 253, 1);
      color: #1989fa;
    }
  }
  .listBottom {
    width: 1350px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(242, 241, 241, 1);
    padding-right: 19px;
    box-sizing: border-box;
    .checklist,
    .addList > button {
      margin-left: 19px;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      outline: none;
      background: #fff;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 483px;
      height: 353px;
      border-radius: 4px 4px 4px 4px;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

<template>
  <div class="home">
    <my-head :title="title"></my-head>
    <div class="tabList">
      <dl class="tabClass">
        <dt>切换班级:</dt>
        <dd class="active">1703C</dd>
        <dd>1703E</dd>
        <dd>1703F</dd>
        <dd class="addClass">创建班级+</dd>
      <>
      <div class="tabStyle">
        <div class="tabBtn">
          <span></span>
        </div>
        <div class="tabMsg">柱形图/线图</div>
      </div>
    </div>
    <div class="students">
      <span>添加学生+:</span>
      <label for>
        <input type="text" placeholder="输入姓名">
      </label>
      <label for>
        <input type="text" placeholder="末位次数">
      </label>
      <label for>
        <input type="text" placeholder="结对子,帮扶对象">
      </label>
      <button>添加<tton>
    </div>
    <gradeTable/>
    <div class="listBottom">
      <label for class="addList">
        <button>添加成绩+<tton>
        <button>添加分析和解决方案+<tton>
      </label>
      <button class="checklist">查看和编辑该生所有成绩<tton>
    </div>
    <div class="mask">
      <Dialog>
        <template>
          <div class="content">
            <p>
              <span>新增成绩-XX同学</span>
              <span>X</span>
            </p>
            <form>
              <p>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                <button>昨天<tton>
              </p>
              <p>
                <span>技能</span>
                <input type="text">
              </p>
              <p>
                <span>理论</span>
                <input type="text">
              </p>
            </form>
            <p>
              <button>取消<tton>
              <button>确定<tton>
            </p>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to c
import gradeTable from "@/components/studentEcharts.vue";
import Dialog from "@/components/layoutDialog.vue";
export default {
  name: "home",
  components: {
    gradeTable,
    Dialog
  },
  data() {
    return {
      title: "重点关注学生考试成绩统计图",
      value: ""
    };
  }
};
</script>
 -->

