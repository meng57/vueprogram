<template>
  <div class="main-container">
    <div class="mainbody-container">
      <header>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/images/banner1.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="/images/banner2.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="/images/banner3.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="/images/banner4.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="/images/banner5.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="/images/banner6.jpg"/>
            </div>

          </div>
            <div class="swiper-pagination"></div>
        </div>
      </header>
      <section id="section-main">
        <nav class="navlist">
          <ul>
            <li>
              <span></span>
              <b>蛋糕馆</b>
              </li>
            <li>
              <span></span>
              <b>礼品馆</b>
            </li>
            <li>
              <span></span>
              <b>LeClub</b>
            </li>
          </ul>
        </nav>
    <div class="mainbody">
        <img v-for="img in imglist" v-bind:src="img" v-link="{path: '/fenlei'}"/>
    </div>
    <div class="mainfooter">
      <ul>
        <li><img v-bind:src="phone"/></li>
        <li><img v-bind:src="pc"/></li>
      </ul>
      <p>copyright©2010-2016诺心lecake.com版权所有</p>
    </div>
      </section>
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
        imglist:[
          '/images/langman.jpg',
          '/images/party.jpg',
          '/images/childhood.jpg',
          '/images/afternoon.jpg',
          '/images/birthday.jpg',
          '/images/thanksgiving.jpg'
        ],
        pc: '/images/pc.png',
        phone: '/images/phone.png'
      }
    },
    components: {},
    ready: function(){
      console.log(0);
      console.log('挂载好了')
      var mySwiper = new Swiper('.swiper-container',{
        autoplay: 1000,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable :true
      })
      console.log(mySwiper);
      var myScroll = new IScroll('.main-container', {
          // // probeType: 3,
          // mouseWheel: true,
          // click: true,
          // scrollY: true
          scrollY: true,
          mouseWheel:true,
          scrollbars: true,
          fadeScrollbars: true,
          click:true

      });

    }
  }

  // export default {
  //   data() {
  //     return {
  //       list: [],
  //       curIndex: 0,
  //       indexNav: ['足球现场', '足球生活', '足球小姐']
  //     }
  //   },
  //
  //   ready: function() {
  //     var that = this;
  //     this.$http.get('/mock/list.json')
  //       .then((res) => {
  //         this.list = res.data.data;
  //
  //         setTimeout(function(){
  //           new IScroll('#index-scroll');
  //         }, 500);
  //
  //         mySwiper = new Swiper("#index-swiper", {
  //           onSlideChangeStart: function(){
  //             that.curIndex = mySwiper.activeIndex;
  //           }
  //         });
  //       })
  //   },
  //
  //   methods: {
  //     switchSwiper(index) {
  //       this.curIndex = index;
  //       mySwiper.slideTo(index);
  //     }
  //   }
  // }
</script>
