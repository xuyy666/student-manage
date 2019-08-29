<template>  
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
    var myChart = echarts.init(this.$refs.canvas);
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
