<template >
  <div class="my-container">
    <header class="my-header">
      <p>
        <img v-bind:src="img"/>
      </p>
      <span>我的诺心</span>
    </header>
    <div class="login">
      <img v-bind:src="img1">
      <p>登录</p>
    </div>
    <div class="dingdan">
      <span>我的订单</span>
      <b>查看全部&nbsp;></b>
    </div>
    <div class="dai">
      <ul>
        <li>
          <span></span>
          <b>待付款</b>
        </li>
        <li>
          <span></span>
          <b>待发货</b>
        </li>
        <li>
          <span></span>
          <b>待收货</b>
        </li>
      </ul>
    </div>
    <div class="youhui">
      <span>优惠卡券</span>
      <span>></span>
    </div>
    <div class="leclub">
      <span>Leclub</span>
      <span>></span>
    </div>
    <div class="contact">
      <span>客服电话：400-157-8578</span>
    </div>
  </div>

</template>
<script>
var Vue = require('../libs/vue.js');
var VueResource = require('../libs/vue-resource.js');
Vue.use(VueResource);
var mySwiper = null;
export default {
  data: function(){
    return {
      img:"/images/ico-back.png",
      img1:"http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/customer/avatar.png"
    }
  }
}

</script>
