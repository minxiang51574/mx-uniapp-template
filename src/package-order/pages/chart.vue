<template>
  <view style="height: 100%; overflow: scroll;">
    <view style="height: 600rpx; width: 100%;">
      <div>多坐标系混合图</div>
      <qiun-data-charts
        :chartData="chartsDataMix1"
        :opts="{yAxis:{data:[{position: 'left',title: '折线'},{position: 'right',min: 0,max: 200,title: '柱状图',textAlign: 'left'}]}}"
        type="mix"
      />
    </view>
    <view style="height: 600rpx; width: 100%;">
      <div>基本折线图</div>
      <qiun-data-charts
        :chartData="chartsDataLine2"
        type="line"
      />
    </view>

    <view style="height: 600rpx; width: 100%;">
      <div>基本柱状图</div>
      <view class="charts-box">
        <qiun-data-charts
          :chartData="chartsDataColumn1"
          :opts="opts"
          type="column"
        />
      </view>
    </view>

    <view>
      <uni-table
        border
        emptyText="暂无更多数据"
        stripe
      >
        <uni-tr>
          <uni-th align="center">日期</uni-th>
          <uni-th align="center">姓名</uni-th>
          <uni-th align="left">地址</uni-th>
        </uni-tr>
        <uni-tr>
          <uni-td>2020-10-20</uni-td>
          <uni-td>Jeson</uni-td>
          <uni-td>北京市海淀区</uni-td>
        </uni-tr>
        <uni-tr>
          <uni-td>2020-10-21</uni-td>
          <uni-td>HanMeiMei</uni-td>
          <uni-td>北京市海淀区</uni-td>
        </uni-tr>
        <uni-tr>
          <uni-td>2020-10-22</uni-td>
          <uni-td>LiLei</uni-td>
          <uni-td>北京市海淀区</uni-td>
        </uni-tr>
        <uni-tr>
          <uni-td>2020-10-23</uni-td>
          <uni-td>Danner</uni-td>
          <uni-td>北京市海淀区</uni-td>
        </uni-tr>
      </uni-table>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 多坐标系混合图
const chartsDataMix1 = JSON.parse(
  JSON.stringify({
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    series: [
      {
        name: '曲面',
        data: [70, 50, 85, 130, 64, 88],
        type: 'area',
        style: 'curve'
      },
      {
        name: '柱1',
        index: 1,
        data: [40, { value: 30, color: '#f04864' }, 55, 110, 24, 58],
        type: 'column'
      },
      {
        name: '柱2',
        index: 1,
        data: [50, 20, 75, 60, 34, 38],
        type: 'column'
      },
      {
        name: '曲线',
        data: [70, 50, 85, 130, 64, 88],
        type: 'line',
        style: 'curve',
        color: '#1890ff',
        disableLegend: true
      },
      {
        name: '折线',
        data: [120, 140, 105, 170, 95, 160],
        type: 'line',
        color: '#2fc25b'
      }
    ]
  })
)

//基本折线图
const chartsDataLine2 = JSON.parse(
  JSON.stringify({
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    series: [
      {
        name: '成交量A',
        data: [35, 8, 25, 37, 4, 20]
      },
      {
        name: '成交量B',
        data: [70, 40, 65, 100, 44, 68]
      },
      {
        name: '成交量C',
        data: [100, 80, 95, 150, 112, 132]
      }
    ]
  })
)

//基本柱状图
const chartsDataColumn1 = JSON.parse(
  JSON.stringify({
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    series: [
      {
        name: '分类1',
        data: [35, 36, 31, -20, 13, 34]
      },
      {
        name: '分类',
        data: [18, 27, 21, 24, 6, 28]
      }
    ]
  })
)
const opts = JSON.parse(
  JSON.stringify({
    legend: { position: 'top' },
    padding: [0, 0, 50, 0],
    xAxis: {
      fontColor: 'red'
    }
    // yAxis: {
    //   data: [
    //     {
    //       min: -20
    //     }
    //   ]
    // }
  })
)
</script>
