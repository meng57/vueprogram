<template>
      <div class="shopping-container">
        <header class="shopping-header">
          <p>
            <img v-bind:src="img"/>
          </p>
          <span>购物车</span>
        </header>
        <section class="shopping-section">
          <div class="shopping-content">
            <div class="no-content">
              <img v-bind:src="cart">
              <p>购物车空空如也</p>
            </div>
            <div class="division">
              ——&nbsp;&nbsp;精品配件&nbsp;&nbsp;——
            </div>
            <section class="fitting">
              <ul class="product-fitting">
                  <li v-for="m in list">
                    <div class="fitting-content">
                      <img v-bind:src="m.url">
                    </div>
                    <span>{{m.title1}}</span>
                    <b>{{m.title2}}</b>
                  </li>
              </ul>
            </section>

            <div>

            </div>
          </div>
        </section>
        <div class="jiesuan">
          <span>总计：</span>
          <span>￥0.00</span>
          <span>去结算</span>
        </div>
      </div>
</template>
<script>
      var Vue = require('../libs/vue.js');
      var VueResource = require('../libs/vue-resource');
      export default {
        data:function(){
          return {
            img:"/images/ico-back.png",
            cart:"http://rescdn.lecake.com/shop/lecake/theme/xth2/tpls/wechat/images_new/cart/no-content.png",
            list: [
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201605/14163/thumb_14163.jpg",
                title1:"餐具(5个一套)",
                title2:"￥2.50"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201310/12278/thumb_12278.jpg",
                title1:"金色蜡烛",
                title2:"￥10.00"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10844/thumb_10844.jpg",
                title1:"Happy Birthday",
                title2:"￥10.00"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201404/12663/thumb_12663.jpg",
                title1:"I LOVE MAMA",
                title2:"￥15.00"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10841/thumb_10841.jpg",
                title1:"I love papa",
                title2:"￥10.00"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10847/thumb_10847.jpg",
                title1:"蜡烛-心情",
                title2:"￥2.00"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10883/thumb_10883.jpg",
                title1:"数字9蜡烛",
                title2:"￥2.00"
              }
            ]
          }
        },
        ready: function(){
            var oneScroll = new IScroll('.fitting', {
                scrollX:true,
                mouseWheel:true,
                click:true
            });


        }
      }
</script>
