<template >
    <div class="detail-container">
      <header class="detail-header">
        <div class="detail-back">
          <span v-link="{path: '/fenlei'}"></span>
        </div>
          <ul >
            <li v-for="nav in navlist" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index?'active':''">{{nav}}</li>
          </ul>
          <b>
            <img src="/images/ico-cart.png">
          </b>
      </header>
      <section class="detail-section">
        <div class="big-content">
          <div class="swiper-container" id="detail-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-container1">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img v-bind:src="pic1" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img v-bind:src="pic2" alt="">
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
                <div class="detail-content1">
                  <h1>雪域牛乳芝士蛋糕</h1>
                  <p>Le Cheesecake</p>
                  <span>甜度：<b></b></span>
                  <p>到过阿尔卑斯山脉勃朗峰才发现，白，其实就这么纯粹。雪花忽聚忽散，轻盈降落在地上，化为一片白。那个清晨，我踏上厚厚的初雪，出乎意料，是松软的触感。</p>
                </div>
                <div class="detail-content2"  >
                  <ul>
                    <li v-for="pro in product" @click="switch1($index)" v-bind:class="cur1Index == $index?'active':''">{{pro}}<b></b></li>
                  </ul>

                  <div class="swiper-container2" id="weigh-swiper">
                    <div class="swiper-wrapper" >
                      <div class="swiper-slide" v-for="branch in weighlist">
                        <div class="mm">
                          <span><b></b>{{branch.title1}}</span>
                          <span><b></b>{{branch.title2}}</span>
                          <span><b></b>{{branch.title3}}</span>

                        </div>
                          <img v-bind:src="branch.pic">

                      </div>

                    </div>
                  </div>

                </div>
                <div class="detail-content3">
                  <img v-bind:src="detailimg1">
                  <img v-bind:src="detailimg2">
                  <div class="shicai-head">关于食材</div>
                  <div class="shicai">
                    <ul >
                      <li v-for="shi in shicai">{{shi}}</li>
                    </ul>
                    <ul>
                      <li v-for="shi1 in shicai1">{{shi1}}</li>
                    </ul>
                    <ul>
                      <li v-for="shi2 in shicai2">{{shi2}}</li>
                    </ul>
                  </div>

                </div>
              </div>
              <div class="swiper-slide">
                123
              </div>
              <div class="swiper-slide">
                123
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="detail-footer">
          <span>￥198.00</span>
          <span>加入购物车</span>
          <span>立即购买</span>
      </div>
    </div>
</template>
<script>
var Vue = require('../libs/vue.js');
var VueResource = require('../libs/vue-resource.js');
var mSwiper=null;
var ySwiper=null;
export default {
  data: function(){
    return{
      curIndex: 0,
      cur1Index:0,
      detailimg1:'http://imagecdn.lecake.com/postsystem/docroot/images/goods/65E387764A7AE3E75DDABD058694B059.jpg',
      detailimg2:'http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/goods/img-chef.jpg',
      navlist:['商品','详情','须知'],
      product:['1磅','2磅','3磅','5磅',],
      shicai:['食材配比','黄油','白巧克力','芝士','幼砂糖','淡奶油'],
      shicai1:['品牌','安佳/铁塔','嘉利宝/贝可拉','MG/安佳','雪花','铁塔/安佳'],
      shicai2:['产地','进口1','比利时','进口2','韩国','进口3'],
      weighlist:[
        {
          pic: 'http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/goods/ico-cut-9.jpg',
          title1: '5套餐具',
          title2: '13*13cm',
          title3: '4-5个人分享'
        },
        {
          pic: 'http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/goods/ico-cut-16.jpg',
          title1: '10套餐具',
          title2: '17*17cm',
          title3: '7-8个人分享'
        },
        {
          pic: 'http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/goods/ico-cut-25.jpg',
          title1: '15套餐具',
          title2: '22*22cm',
          title3: '10-12个人分享'
        },
        {
          pic: 'http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/goods/ico-cut-49.jpg',
          title1: '20套餐具',
          title2: '31*31cm',
          title3: '15-20个人分享'
        }
      ],
      pic1: 'http://imagecdn.lecake.com/postsystem/docroot/images/goods/6D44DC6AEA04AEF7D902073B3868BA8E.jpg',
      pic2: 'http://imagecdn.lecake.com/postsystem/docroot/images/goods/0899DF62F8A8E2F9DD31994F4F929525.jpg'
    }
  },
  ready: function(){
      var that=this;
     mSwiper = new Swiper("#detail-swiper", {
        onSlideChangeStart: function() {
            that.curIndex = mSwiper.activeIndex;
        }
    });
    ySwiper = new Swiper("#weigh-swiper", {
       onSlideChangeStart: function() {
           that.cur1Index = ySwiper.activeIndex;
       }
   });
    var mySwiper = new Swiper('.swiper-container1',{
      autoplay: 1000,
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable :true
    });
    var mScroll = new IScroll('.detail-section', {
        scrollY: true,
        mouseWheel:true,
        click:true
    });
  },
  methods: {
      switchSwiper(index) {
          this.curIndex = index;

          mSwiper.slideTo(index);

      },
      switch1(index) {
          this.cur1Index = index;

          ySwiper.slideTo(index);

      }


  }
}

</script>
