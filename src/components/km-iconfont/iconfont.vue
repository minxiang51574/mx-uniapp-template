<!--
 * @Author       : Mx
 * @Date         : 2022-05-05 14:33:47
 * @Description  : iconfont
-->
<template>
  <view
    :class="'icon-' + type"
    :style="{width: size + 'rpx', height: size + 'rpx', 'font-size': size + 'rpx', color: color}"
    class="km-iconfont"
  ></view>
</template>

<script setup lang='ts' >
defineProps({
  /* 类型 */
  type: {
    type: String,
    default: 'xdd_back'
  },

  /* 大小 */
  size: {
    type: [Number, String],
    default: 30
  },

  /* 颜色 */
  color: {
    type: String,
    default: '#999'
  }
})
</script>
<style scoped>
.km-iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: iconfont; /* Project id 1102121 */
  src:
    url('//at.alicdn.com/t/font_1102121_bvgnbmwy9dm.woff2?t=1639377899331')
    format('woff2'),
    url('//at.alicdn.com/t/font_1102121_bvgnbmwy9dm.woff?t=1639377899331')
    format('woff'),
    url('//at.alicdn.com/t/font_1102121_bvgnbmwy9dm.ttf?t=1639377899331')
    format('truetype');
}

.icon-price-up::before {
  content: '\e6c9';
}

.icon-price-down::before {
  content: '\e6ca';
}

.icon-gonggao1::before {
  content: '\e6cb';
}

.icon-stored_value_select::before {
  content: '\e6c4';
}

.icon-mendian::before {
  content: '\e636';
}

.icon-daifukuan::before {
  content: '\e631';
}

.icon-jinhangzhong::before {
  content: '\e632';
}

.icon-shouhou::before {
  content: '\e633';
}

.icon-yiwancheng::before {
  content: '\e635';
}

.icon-question_mark::before {
  content: '\e6c5';
}

.icon-xiaochengxu::before {
  content: '\e630';
}

.icon-subscribe::before {
  content: '\e62f';
}

.icon-jiahao2::before {
  content: '\e60e';
}

.icon-jiahao1::before {
  content: '\e60f';
}

.icon-gouwuche11::before {
  content: '\e62c';
}

.icon-gouwuche21::before {
  content: '\e62e';
}

.icon-icon-like-goods::before {
  content: '\e60d';
}

.icon-modify::before {
  content: '\e603';
}

.icon-select::before {
  content: '\e60b';
}

.icon-ok::before {
  content: '\e60c';
}

.icon-xrzx::before {
  content: '\e61e';
}

.icon-ptgl::before {
  content: '\e6c3';
}

.icon-help-time::before {
  content: '\e641';
}

.icon-help-x::before {
  content: '\e642';
}

.icon-help-money::before {
  content: '\e6c0';
}

.icon-help-circle::before {
  content: '\e6c1';
}

.icon-help-commit::before {
  content: '\e6c2';
}

.icon-stara::before {
  content: '\e6be';
}

.icon-star::before {
  content: '\e6bf';
}

.icon-huoche::before {
  content: '\e6bd';
}

.icon-sanjiaoxing::before {
  content: '\e6bc';
}

.icon-yushou2::before {
  content: '\e6b7';
}

.icon-kefu::before {
  content: '\e6bb';
}

.icon-dianhuakefu::before {
  content: '\e6ba';
}

.icon-backtop::before {
  content: '\e6b9';
}

.icon-xiadanchenggong::before {
  content: '\e6b8';
}

.icon-lajitong::before {
  content: '\e6b6';
}

.icon-saoma::before {
  content: '\e6b5';
}

.icon-quhuo::before {
  content: '\e6b4';
}

.icon-qiehuan::before {
  content: '\e6b3';
}

.icon-plus::before {
  content: '\e6b2';
}

.icon-minus::before {
  content: '\e6b1';
}

.icon-youhuiquan::before {
  content: '\e6b0';
}

.icon-walk::before {
  content: '\e74a';
}

.icon-ride::before {
  content: '\e6ae';
}

.icon-car::before {
  content: '\e6af';
}

.icon-fuzhi::before {
  content: '\e6ad';
}

.icon-xqshangjiabeihuozhong::before {
  content: '\e6a3';
}

.icon-xqdaiquhuo1::before {
  content: '\e6a4';
}

.icon-xqdaifukuan::before {
  content: '\e6a5';
}

.icon-xqdingdanyiquxiao4::before {
  content: '\e6a6';
}

.icon-xqdaishangjiajiedan::before {
  content: '\e6a7';
}

.icon-xqdingdanyiquxiao3::before {
  content: '\e6a8';
}

.icon-xqdingdanyiquxiao2::before {
  content: '\e6a9';
}

.icon-xqdingdanyiquxiao::before {
  content: '\e6aa';
}

.icon-xqdaiquhuo::before {
  content: '\e6ab';
}

.icon-xqdingdanyiquxiao1::before {
  content: '\e6ac';
}

.icon-icon-xdd_order::before {
  content: '\e6a2';
}

.icon-xdd-members_jinru::before {
  content: '\e6e4';
}

.icon-jiazai1::before {
  content: '\e69e';
}

.icon-xdd_erweima::before {
  content: '\e69f';
}

.icon-xdd_integral::before {
  content: '\e6a0';
}

.icon-xdd_order1::before {
  content: '\e6a1';
}

.icon-youbian::before {
  content: '\e698';
}

.icon-zuobian::before {
  content: '\e69d';
}

.icon-code::before {
  content: '\e694';
}

.icon-xdd_zhiwen::before {
  content: '\e69c';
}

.icon-xdd_wechat::before {
  content: '\e69b';
}

.icon-xdd_search::before {
  content: '\e69a';
}

.icon-xdd_picture::before {
  content: '\e699';
}

.icon-xdd_link::before {
  content: '\e697';
}

.icon-xdd_fingerprint2::before {
  content: '\e696';
}

.icon-xdd_fill::before {
  content: '\e695';
}

.icon-xdd_editor::before {
  content: '\e693';
}

.icon-xdd_closecircle::before {
  content: '\e692';
}

.icon-xdd_back::before {
  content: '\e690';
}

.icon-xdd_aj::before {
  content: '\e68f';
}

.icon-xdd_add::before {
  content: '\e691';
}

.icon-xdd_close1::before {
  content: '\e68c';
}

.icon-xdd_question_circle::before {
  content: '\e68d';
}

.icon-jiazai::before {
  content: '\e68b';
}

.icon-qrcode::before {
  content: '\e68a';
}

.icon-gouwuche1::before {
  content: '\e682';
}

.icon-gouwuche3::before {
  content: '\e683';
}

.icon-wode::before {
  content: '\e684';
}

.icon-wode1::before {
  content: '\e685';
}

.icon-pintuan::before {
  content: '\e686';
}

.icon-pintuan1::before {
  content: '\e687';
}

.icon-miaosha::before {
  content: '\e688';
}

.icon-miaosha1::before {
  content: '\e689';
}

.icon-shouye1::before {
  content: '\e67c';
}

.icon-shouye2::before {
  content: '\e67d';
}

.icon-pinlei::before {
  content: '\e67e';
}

.icon-pinlei1::before {
  content: '\e67f';
}

.icon-dingdan::before {
  content: '\e680';
}

.icon-dingdan1::before {
  content: '\e681';
}

.icon-gengduo::before {
  content: '\e67a';
}

.icon-guanbi::before {
  content: '\e67b';
}

.icon-xiaochengxulogo::before {
  content: '\e678';
}

.icon-gouwuche2::before {
  content: '\e679';
}

.icon-gouwuche::before {
  content: '\e677';
}

.icon-jiagouwuche::before {
  content: '\e676';
}

.icon-sku_close::before {
  content: '\e675';
}

.icon-noticebar-icon::before {
  content: '\e674';
}

.icon-resolvingRefund::before {
  content: '\e673';
}

.icon-prepareGoods::before {
  content: '\e66c';
}

.icon-waitingPay::before {
  content: '\e66e';
}

.icon-waitShopReceiveOrder::before {
  content: '\e66f';
}

.icon-applyRefund::before {
  content: '\e670';
}

.icon-waitReceiveGoods::before {
  content: '\e671';
}

.icon-grouping::before {
  content: '\e672';
}

.icon-down_arrow::before {
  content: '\e66b';
}

.icon-search::before {
  content: '\e66d';
}

.icon-position::before {
  content: '\e669';
}

.icon-huiyuanzhifu::before {
  content: '\e66a';
}

.icon-icon-shop_edit::before {
  content: '\e668';
}

.icon-group-success::before {
  content: '\e663';
}

.icon-group-shop::before {
  content: '\e664';
}

.icon-group-join::before {
  content: '\e665';
}

.icon-group-invite::before {
  content: '\e666';
}

.icon-group-pay::before {
  content: '\e667';
}

.icon-step-down::before {
  content: '\e600';
}

.icon-keyboard_delete::before {
  content: '\e662';
}

.icon-tan_x::before {
  content: '\e661';
}

.icon-tan_x-copy::before {
  content: '\e68e';
}

.icon-store::before {
  content: '\e660';
}

.icon-shoppingcart_active::before {
  content: '\e65f';
}

.icon-shoppingcart::before {
  content: '\e65e';
}

.icon-seckill_shouye1::before {
  content: '\e65d';
}

.icon-order_list_active::before {
  content: '\e65c';
}

.icon-order_list::before {
  content: '\e65b';
}

.icon-member_center_active::before {
  content: '\e65a';
}

.icon-member_center::before {
  content: '\e659';
}

.icon-goods_list_active::before {
  content: '\e658';
}

.icon-goods_list::before {
  content: '\e657';
}

.icon-shouye::before {
  content: '\e656';
}

.icon-assemble_shou_active::before {
  content: '\e655';
}

.icon-assemble_shou::before {
  content: '\e654';
}

.icon-shouye_active::before {
  content: '\e601';
}

.icon-seckill_shouye::before {
  content: '\e653';
}

.icon-seckill_order::before {
  content: '\e602';
}

.icon-tianjiashangpinx::before {
  content: '\e637';
}

.icon-closex::before {
  content: '\e638';
}

.icon-gonggaox::before {
  content: '\e639';
}

.icon-dingweix::before {
  content: '\e63a';
}

.icon-goux::before {
  content: '\e63b';
}

.icon-jianshaoshuliangx::before {
  content: '\e63c';
}

.icon-phonex::before {
  content: '\e63d';
}

.icon-sousuox::before {
  content: '\e63e';
}

.icon-mendianx::before {
  content: '\e63f';
}

.icon-weixinzhifux::before {
  content: '\e640';
}

.icon-zengjiashuliangx::before {
  content: '\e643';
}

.icon-yuezhifux::before {
  content: '\e644';
}

.icon-gerenzhongxin_norx::before {
  content: '\e645';
}

.icon-gerenzhongxin_selx::before {
  content: '\e646';
}

.icon-gouwuche_norx::before {
  content: '\e647';
}

.icon-gouwuche_selx::before {
  content: '\e648';
}

.icon-liebiao_norx::before {
  content: '\e649';
}

.icon-liebiao_selx::before {
  content: '\e64a';
}

.icon-shouye_norx::before {
  content: '\e64b';
}

.icon-shouye_selx::before {
  content: '\e64c';
}

.icon-selx::before {
  content: '\e64d';
}

.icon-jt_xia_heisex::before {
  content: '\e64e';
}

.icon-jt_shang_heisex::before {
  content: '\e64f';
}

.icon-jt_youx::before {
  content: '\e650';
}

.icon-jt_you_baisex::before {
  content: '\e651';
}

.icon-jt_you_huisex::before {
  content: '\e652';
}

.icon-shop_fun_add::before {
  content: '\e604';
}

.icon-shop_fun_weixin::before {
  content: '\e605';
}

.icon-shop_fun_sea::before {
  content: '\e606';
}

.icon-shop_login_password::before {
  content: '\e607';
}

.icon-shop_login_phone::before {
  content: '\e608';
}

.icon-shop_label_hot::before {
  content: '\e609';
}

.icon-shop_label_new::before {
  content: '\e60a';
}

.icon-shop_smafun_che::before {
  content: '\e610';
}

.icon-shop_smafun_chesel::before {
  content: '\e611';
}

.icon-shop_smafun_cur::before {
  content: '\e612';
}

.icon-shop_smafun_clotwo::before {
  content: '\e613';
}

.icon-shop_smafun_clo::before {
  content: '\e614';
}

.icon-shop_smafun_low::before {
  content: '\e615';
}

.icon-shop_smafun_rig::before {
  content: '\e616';
}

.icon-shop_smafun_tip::before {
  content: '\e617';
}

.icon-shop_smafun_grd::before {
  content: '\e618';
}

.icon-shop_tab_home_sel::before {
  content: '\e619';
}

.icon-shop_smafun_tel::before {
  content: '\e61a';
}

.icon-shop_tab_my::before {
  content: '\e61b';
}

.icon-shop_smafun_up::before {
  content: '\e61c';
}

.icon-shop_tab_program::before {
  content: '\e61d';
}

.icon-shop_tab_home::before {
  content: '\e61f';
}

.icon-shop_tab_my_sel::before {
  content: '\e620';
}

.icon-shop_tab_shop::before {
  content: '\e621';
}

.icon-shop_tab_shop_sel::before {
  content: '\e622';
}

.icon-shop_tab_Selected_se::before {
  content: '\e623';
}

.icon-shop_tab_shopcart::before {
  content: '\e624';
}

.icon-shop_tab_program_sel::before {
  content: '\e625';
}

.icon-shop_tab_shopcartsel::before {
  content: '\e626';
}

.icon-shop_order_waitdeliv::before {
  content: '\e627';
}

.icon-shop_smafun_pro::before {
  content: '\e628';
}

.icon-shop_pay_bal::before {
  content: '\e629';
}

.icon-shop_pay_weixin::before {
  content: '\e62a';
}

.icon-shop_smafun_neg::before {
  content: '\e62b';
}

.icon-shop_tab_Selected::before {
  content: '\e62d';
}

.icon-shop_add_tel::before {
  content: '\e634';
}

</style>
