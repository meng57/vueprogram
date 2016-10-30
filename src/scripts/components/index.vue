<template>
  <div class="index-main">
    <div class="index-container">
        <router-view></router-view>
    </div>
    <footer id="footer">
        <ul>
            <li
              v-bind:class="cur == $index ? 'active' : ''"
              v-on:click="changPage($index)"
              v-for="tab in tablist"
              v-link="{path: tab.path}">
                <i class="iconfont">{{{tab.icon}}}</i>
                <b>{{tab.name}}</b>
            </li>
        </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cur: 0,
        tablist: [
          {path: '/', icon: '&#xe603;', name: '首页'},
          {path: '/fenlei', icon: '&#xe601;', name: '分类'},
          {path: '/shopping', icon: '&#xe653;', name: '购物车'},
          {path: '/my', icon: '&#xe609;', name: '我的诺心'}
        ]
      }
    },

    methods: {
      changPage(i) {
        this.cur = i;
      }
    }
  }
</script>
