<template>
  <div class="visualdisplay">
    <myHeader :title="title"></myHeader> 
    <div class="tabClass">
      <dl>
        <dt>切换班级：</dt>
        <dd>1703C</dd>
        <dd>1703E</dd>
        <dd>1703E</dd>
        <dd class="createClass">+创建班级</dd>
      </dl>
        <!-- 按钮 -->
        <div class="tabStyle">
          <div class="tabBtn">
            <span></span>
          </div>
          <div class="tabMsg">柱形图/线图</div>
        </div>

        <div class="students">
          <span>添加学生+:</span>
          <label for>
            <input type="text" placeholder="输入姓名" />
          </label>
          <label for>
            <input type="text" placeholder="末尾次数" />
          </label>
          <label for>
            <input type="text" placeholder="结对子,帮扶对象" />
          </label>
          <button>添加</button>
        </div>
        <GradeTable />
        <div class="listBottom">
          <label for="" class="addList">
            <button @click="clickScore">添加成绩+</button>
            <button @click="clickPrint">添加分析和解决方案+</button>
          </label>
          <button class="lookEditScore">查看和编辑该生所有成绩</button>
        </div>

        <div class="mask">
          <Dialog>
            <template>
              <div class="content">
                 <p>
                   <span>新增成绩-XX学生</span>
                   <span>X</span>
                 </p>
                 <form>
                   <p>
                       <el-date-picker
                          v-model="value"
                          type="date"
                          placeholder="选择日期">
                       </el-date-picker>
                       <button>昨天</button>
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
                   <button>取消</button>
                   <button>确定</button>
                 </p>
              </div>
            </template>
          </Dialog>
        </div>
    </div>
  </div>
  <!-- 用vuex  -->
</template>

<script lang="ts">
import Vue from "vue";
// import Head from "../components/Head.vue";
// import Echarts from "../components/Echarts.vue";  //
import GradeTable from '../components/GradeTable.vue'
import Dialog from '../components/Dialog.vue'
export default {
  components: {
    // Echarts,
    GradeTable,
    Dialog
  },
  data() {
    return {
      title: "重点关注学生考试成绩统计图",
      value: ""
    };
  },
  methods:{
    clickScore(){
      console.log('opopo')
    },
    clickPrint(){
       console.log('clickPrint')
    }
  }
};
</script>
<style scoped lang="scss">
 .visualdisplay{
   width: 100%;
   height: 100%;
 }

</style>