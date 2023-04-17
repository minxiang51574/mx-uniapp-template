<template>
  <view
    :class="'icon-' + type"
    :style="{ width: size + 'rpx', height: size + 'rpx', 'font-size': size + 'rpx', color: color }"
    class="iconfont"></view>
</template>

<script>
  export default {
    name: 'Iconfont',

    props: {
      type: {
        type: String,
        default: 'sousuo'
      },
      size: {
        type: [Number, String],
        default: 30
      },
      color: {
        type: String,
        default: '#999'
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont'; /* Project id 602880 */
    src: url('https://at.alicdn.com/t/font_602880_ylrcysk1bdp.woff2?t=1634116165225')
        format('woff2'),
      url('https://at.alicdn.com/t/font_602880_ylrcysk1bdp.woff?t=1634116165225') format('woff'),
      url('https://at.alicdn.com/t/font_602880_ylrcysk1bdp.ttf?t=1634116165225') format('truetype');
  }

  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-a-jiatingxuanfang1:before {
    content: '\ef05';
  }

  .icon-jiatingxuanfang1:before {
    content: '\eefe';
  }

  .icon-a-bianzu:before {
    content: '\eef7';
  }

  .icon-tuoyuan:before {
    content: '\eef8';
  }

  .icon-duibi:before {
    content: '\eef0';
  }

  .icon-guanbi1:before {
    content: '\e61b';
  }

  .icon-message-fill:before {
    content: '\eb5a';
  }

  .icon-kanjia:before {
    content: '\eedb';
  }

  .icon-ditu-dibiao:before {
    content: '\e612';
  }

  .icon-dunpai:before {
    content: '\e60f';
  }

  .icon-Oval2:before {
    content: '\e601';
  }

  .icon-youxuanhaofang-rukou:before {
    content: '\eee3';
  }

  .icon-weixin-copy:before {
    content: '\e65b';
  }

  .icon-duigou:before {
    content: '\e7af';
  }

  .icon-zaixiankefu:before {
    content: '\eece';
  }

  .icon-jiatingxuanfang:before {
    content: '\eecd';
  }

  .icon-jiatingxuanfangsvg:before {
    content: '\eecc';
  }

  .icon-renzheng1:before {
    content: '\e682';
  }

  .icon-class:before {
    content: '\e686';
  }

  .icon-xingxing:before {
    content: '\e6b9';
  }

  .icon-wodeweituobeifen:before {
    content: '\eebe';
  }

  .icon-wodeguanzhubeifen:before {
    content: '\eeba';
  }

  .icon-wodeyouhuibeifen:before {
    content: '\eebb';
  }

  .icon-wodewendabeifen:before {
    content: '\eebd';
  }

  .icon-jianyifankuibeifen:before {
    content: '\eebc';
  }

  .icon-pinglunbeifen:before {
    content: '\eebf';
  }

  .icon-chakanbeifen:before {
    content: '\eec0';
  }

  .icon-chachengjiao3:before {
    content: '\ed35';
  }

  .icon-chafangjia1:before {
    content: '\ed36';
  }

  .icon-goufangzizhi3:before {
    content: '\ed37';
  }

  .icon-suanfangdai2:before {
    content: '\ed38';
  }

  .icon-gufangjia3:before {
    content: '\ed39';
  }

  .icon-baike1:before {
    content: '\ed3a';
  }

  .icon-xuexiao1:before {
    content: '\ed3b';
  }

  .icon-zhaojingjiren3:before {
    content: '\ed3c';
  }

  .icon-yezhuweituo2:before {
    content: '\ed3d';
  }

  .icon-quyufangjia2:before {
    content: '\ed3e';
  }

  .icon-zhaoxiaoqu:before {
    content: '\ed3f';
  }

  .icon-fangchanwenda:before {
    content: '\ed69';
  }

  .icon-shanchu:before {
    content: '\e623';
  }

  .icon-bi:before {
    content: '\ee9a';
  }

  .icon-fankuijianyi:before {
    content: '\eea4';
  }

  .icon-fanhui2:before {
    content: '\ee7e';
  }

  .icon-shouye2:before {
    content: '\ee7d';
  }

  .icon-dianzanclick:before {
    content: '\ee79';
  }

  .icon-qliao1:before {
    content: '\ee78';
  }

  .icon-dianzan1:before {
    content: '\ee76';
  }

  .icon-fenxiang1:before {
    content: '\ee77';
  }

  .icon-erweima1:before {
    content: '\ee69';
  }

  .icon-biyan:before {
    content: '\e6a8';
  }

  .icon-qliaotubiao:before {
    content: '\ee55';
  }

  .icon-zhifeiji1:before {
    content: '\e625';
  }

  .icon-fuzhi:before {
    content: '\e629';
  }

  .icon-lingdang:before {
    content: '\e619';
  }

  .icon-yixiajia:before {
    content: '\ee37';
  }

  .icon-youhuiquan:before {
    content: '\e681';
  }

  .icon-jiache:before {
    content: '\ecaf';
  }

  .icon-buhang:before {
    content: '\ecb0';
  }

  .icon-qiche:before {
    content: '\ecb1';
  }

  .icon-gongjiao:before {
    content: '\ecea';
  }

  .icon-ditie:before {
    content: '\eceb';
  }

  .icon-dingyue:before {
    content: '\ed21';
  }

  .icon-delete:before {
    content: '\e68b';
  }

  .icon-dianhua2:before {
    content: '\ec8b';
  }

  .icon-biaoqing:before {
    content: '\ec8c';
  }

  .icon-fanhui1:before {
    content: '\ec8d';
  }

  .icon-gengduo:before {
    content: '\ec8e';
  }

  .icon-quxiao:before {
    content: '\ec8f';
  }

  .icon-sousuo1:before {
    content: '\ec90';
  }

  .icon-fasongfangyuan:before {
    content: '\ec91';
  }

  .icon-maikefeng:before {
    content: '\ec92';
  }

  .icon-xiangxia:before {
    content: '\ec93';
  }

  .icon-xiangce:before {
    content: '\ec94';
  }

  .icon-shouye1:before {
    content: '\ec95';
  }

  .icon-qliao:before {
    content: '\ec96';
  }

  .icon-qliaomian:before {
    content: '\ec97';
  }

  .icon-laba:before {
    content: '\ec98';
  }

  .icon-qliaohuang:before {
    content: '\ec99';
  }

  .icon-xiangji:before {
    content: '\ec9a';
  }

  .icon-canzhuoyi:before {
    content: '\ec52';
  }

  .icon-yuyue:before {
    content: '\ec51';
  }

  .icon-xiaodugui:before {
    content: '\ec50';
  }

  .icon-zhankai:before {
    content: '\eef1';
  }

  .icon-dianhua1:before {
    content: '\ec34';
  }

  .icon-guanzhu:before {
    content: '\ec35';
  }

  .icon-fenxiang:before {
    content: '\ec36';
  }

  .icon-jisuan:before {
    content: '\ec37';
  }

  .icon-kuandai:before {
    content: '\ec39';
  }

  .icon-chuzu:before {
    content: '\ec3a';
  }

  .icon-dianshi:before {
    content: '\ec3b';
  }

  .icon-reshuiqi:before {
    content: '\ec3c';
  }

  .icon-shouqi:before {
    content: '\ec3d';
  }

  .icon-tianranqi:before {
    content: '\ec3e';
  }

  .icon-shouqi1:before {
    content: '\ec3f';
  }

  .icon-chuang:before {
    content: '\ec40';
  }

  .icon-weibolu:before {
    content: '\ec41';
  }

  .icon-yigui:before {
    content: '\ec42';
  }

  .icon-shouye:before {
    content: '\ec43';
  }

  .icon-xiyiji:before {
    content: '\ec44';
  }

  .icon-bingxiang:before {
    content: '\ec45';
  }

  .icon-yiguanzhu:before {
    content: '\ec46';
  }

  .icon-shafa:before {
    content: '\ec47';
  }

  .icon-xiaodugui1:before {
    content: '\ec48';
  }

  .icon-kongtiao:before {
    content: '\ec49';
  }

  .icon-youyanji:before {
    content: '\ec4a';
  }

  .icon-xiaoxizhankai:before {
    content: '\ec4b';
  }

  .icon-yizi:before {
    content: '\ec4c';
  }

  .icon-logo:before {
    content: '\ec4d';
  }

  .icon-chushou:before {
    content: '\ec4e';
  }

  .icon-xiangxiajiantou:before {
    content: '\ec4f';
  }

  .icon-xiangshangjiantou-copy:before {
    content: '\eef2';
  }

  .icon-xiangmu:before {
    content: '\e600';
  }

  .icon-xueyuan-kaoshi:before {
    content: '\e6c3';
  }

  .icon-yuyue1:before {
    content: '\ec23';
  }

  .icon-jiudian:before {
    content: '\ebdf';
  }

  .icon-yinhang:before {
    content: '\e901';
  }

  .icon-jiaotong:before {
    content: '\e8ff';
  }

  .icon-gouwu:before {
    content: '\e902';
  }

  .icon-canting:before {
    content: '\ebe0';
  }

  .icon-yiliao:before {
    content: '\e7f1';
  }

  .icon-ditu:before {
    content: '\ebfe';
  }

  .icon-zhiding:before {
    content: '\ebff';
  }

  .icon-didian:before {
    content: '\ec00';
  }

  .icon-pengyouquan:before {
    content: '\ec01';
  }

  .icon-gouxuan:before {
    content: '\ec03';
  }

  .icon-xiezilou:before {
    content: '\ebf7';
  }

  .icon-xiaoqu:before {
    content: '\eb66';
  }

  .icon-suanfangdai:before {
    content: '\eb41';
  }

  .icon-gufangjia1:before {
    content: '\eb40';
  }

  .icon-chachengjiao:before {
    content: '\eb37';
  }

  .icon-ershoufang:before {
    content: '\eb38';
  }

  .icon-gufangjia:before {
    content: '\eb39';
  }

  .icon-xinfang:before {
    content: '\eb3a';
  }

  .icon-goufangzizhi:before {
    content: '\eb3b';
  }

  .icon-zhaojingjiren:before {
    content: '\eb3d';
  }

  .icon-yezhuweituo:before {
    content: '\eb3e';
  }

  .icon-zufang:before {
    content: '\eb3f';
  }

  .icon-dianhua:before {
    content: '\eb2a';
  }

  .icon-dingwei:before {
    content: '\eb2b';
  }

  .icon-sousuo:before {
    content: '\eb2d';
  }

  .icon-jiantou:before {
    content: '\eb2e';
  }

  .icon-tianchongxingxing:before {
    content: '\eb2f';
  }

  .icon-weitianchongxingxing:before {
    content: '\eb32';
  }

  .icon-xinpaixu:before {
    content: '\eb34';
  }

  .icon-yezhuweituo1:before {
    content: '\eb35';
  }

  .icon-duanxin:before {
    content: '\e91e';
  }

  .icon-renzheng:before {
    content: '\e91f';
  }

  .icon-xiangshangzhankai:before {
    content: '\eb13';
  }

  .icon-xiazhankai:before {
    content: '\eb11';
  }

  .icon-weixuanze:before {
    content: '\eaed';
  }

  .icon-fanhui:before {
    content: '\eaee';
  }

  .icon-yixuanze:before {
    content: '\eaef';
  }

  .icon-fanhuishouye:before {
    content: '\eaf0';
  }

  .icon-zhushi:before {
    content: '\e9d5';
  }

  .icon-dianzan:before {
    content: '\ea3d';
  }

  .icon-aixin:before {
    content: '\ea78';
  }

  .icon-wodeguanzhu:before {
    content: '\eae1';
  }

  .icon-wodeyuyue:before {
    content: '\eae3';
  }

  .icon-wodeweituo:before {
    content: '\eae4';
  }

  .icon-bangdingshouji:before {
    content: '\eae5';
  }

  .icon-gerenzhongxin:before {
    content: '\eae6';
  }

  .icon-gerenzhongxindianji:before {
    content: '\eae8';
  }

  .icon-zhaofang:before {
    content: '\eae9';
  }

  .icon-zhaofangdianji:before {
    content: '\eaeb';
  }

  .icon-quanbuloupan:before {
    content: '\eace';
  }

  .icon-youhuixinpan:before {
    content: '\eacf';
  }

  .icon-guanbi:before {
    content: '\e60d';
  }

  .icon-tupian:before {
    content: '\eac1';
  }

  .icon-shijian:before {
    content: '\eac2';
  }

  .icon-biaoqian:before {
    content: '\eabf';
  }

  .icon-youhui:before {
    content: '\eabc';
  }
</style>
