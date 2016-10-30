<template>
  <div class="fenlei-container">
    <header class="fenlei-header">
      <div class="header-1">
        <a href="#">
          <img v-bind:src="img"/>
          <span>北京</span></a>
        <a href="#">蛋糕馆</a>
        <a href="#">礼品馆</a>
      </div>
        <div class="header-2">
          <ul>
            <li>综合排序</li>
            <li>销量优先</li>
            <li>
              筛选
              <span></span>
            </li>
          </ul>
        </div>
    </header>
    <section class="fenlei-section">
      <div class="fenlei-div">
        <ul>
          <li v-for="l in product" v-link="{path: '/detail'}">
            <img v-bind:src="l.url"/>
            <span>{{l.name}}</span>
            <span>{{l.description}}</span>
            <span>{{l.price}}</span>
            <span>{{l.weigh}}</span>
          </li>
            <li class="fenlei-footer">—&nbsp;没有更多产品咯&nbsp;—</li>
        </ul>

      </div>

    </section>
  </div>
</template>
<script>
      var Vue = require('../libs/vue.js');
      var VueResource = require('../libs/vue-resource.js');
      export default {
        data: function(){
          return {
            img: '/images/ico-location.png',
            product:[
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/thumb_10800.jpg",
                name:"雪域牛乳芝士蛋糕",
                description:"Le Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201405/12775/thumb_12775.jpg",
                name:"提拉米苏乐脆蛋糕",
                description:"Tiramisu Crispy",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14533/thumb_14533.jpg",
                name:"鬼马小精灵蛋糕",
                description:"Le Phantom Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14579/thumb_14579.jpg",
                name:"栗香飘飘",
                description:"Chestnut Pie",
                price:"￥218",
                weigh:"1.6磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201310/12287/thumb_12287.jpg",
                name:"环游世界·秋冬季蛋糕",
                description:"Around The World Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201211/10491/thumb_10491.jpg",
                name:"雪域蓝莓芝士蛋糕",
                description:"Blueberry Cheesecake/Emily",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201308/12244/thumb_12244.jpg",
                name:"玫瑰雪域芝士蛋糕",
                description:"Rose Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10782/thumb_10782.png",
                name:"海盐乳酪芝士蛋糕",
                description:"Parmesan Cheesecake",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10648/thumb_10648.jpg",
                name:"巧克力松露蛋糕",
                description:"Chocolate Marquise",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201303/12085/thumb_12085.jpg",
                name:"蓝莓拿破仑蛋糕",
                description:"Blueberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201301/10923/thumb_10923.jpg",
                name:"草莓拿破仑蛋糕",
                description:"Strawberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/thumb_10800.jpg",
                name:"雪域牛乳芝士蛋糕",
                description:"Le Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201405/12775/thumb_12775.jpg",
                name:"提拉米苏乐脆蛋糕",
                description:"Tiramisu Crispy",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14533/thumb_14533.jpg",
                name:"鬼马小精灵蛋糕",
                description:"Le Phantom Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14579/thumb_14579.jpg",
                name:"栗香飘飘",
                description:"Chestnut Pie",
                price:"￥218",
                weigh:"1.6磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201310/12287/thumb_12287.jpg",
                name:"环游世界·秋冬季蛋糕",
                description:"Around The World Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201211/10491/thumb_10491.jpg",
                name:"雪域蓝莓芝士蛋糕",
                description:"Blueberry Cheesecake/Emily",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201308/12244/thumb_12244.jpg",
                name:"玫瑰雪域芝士蛋糕",
                description:"Rose Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10782/thumb_10782.png",
                name:"海盐乳酪芝士蛋糕",
                description:"Parmesan Cheesecake",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10648/thumb_10648.jpg",
                name:"巧克力松露蛋糕",
                description:"Chocolate Marquise",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201303/12085/thumb_12085.jpg",
                name:"蓝莓拿破仑蛋糕",
                description:"Blueberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201301/10923/thumb_10923.jpg",
                name:"草莓拿破仑蛋糕",
                description:"Strawberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10800/thumb_10800.jpg",
                name:"雪域牛乳芝士蛋糕",
                description:"Le Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201405/12775/thumb_12775.jpg",
                name:"提拉米苏乐脆蛋糕",
                description:"Tiramisu Crispy",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14533/thumb_14533.jpg",
                name:"鬼马小精灵蛋糕",
                description:"Le Phantom Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201609/14579/thumb_14579.jpg",
                name:"栗香飘飘",
                description:"Chestnut Pie",
                price:"￥218",
                weigh:"1.6磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201310/12287/thumb_12287.jpg",
                name:"环游世界·秋冬季蛋糕",
                description:"Around The World Cake",
                price:"￥218",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201211/10491/thumb_10491.jpg",
                name:"雪域蓝莓芝士蛋糕",
                description:"Blueberry Cheesecake/Emily",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201308/12244/thumb_12244.jpg",
                name:"玫瑰雪域芝士蛋糕",
                description:"Rose Cheesecake",
                price:"￥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10782/thumb_10782.png",
                name:"海盐乳酪芝士蛋糕",
                description:"Parmesan Cheesecake",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201212/10648/thumb_10648.jpg",
                name:"巧克力松露蛋糕",
                description:"Chocolate Marquise",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201303/12085/thumb_12085.jpg",
                name:"蓝莓拿破仑蛋糕",
                description:"Blueberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              },
              {
                url:"http://imagecdn.lecake.com/postsystem/docroot/images/goods/201301/10923/thumb_10923.jpg",
                name:"草莓拿破仑蛋糕",
                description:"Strawberry Mille-feuilles",
                price:"¥198.00",
                weigh:"1磅"
              }
            ]

          }
        },
        ready: function(){
          Vue.nextTick(function(){
            setTimeout(function(){
              var myscroll = new IScroll('.fenlei-section',{
                scrollY: true,
                mouseWheel:true,
                click:true
              })
            },500)
          })

        }
      }

</script>
