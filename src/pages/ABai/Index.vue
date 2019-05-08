<template>
  <div class="abai">
    <TabBar
      :tabs="tabBars"
      class="tab-bar"/>
  </div>
</template>

<script>
import TabBar from '../../components/ABai/TabBar'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      tabBars: [
        {
          title: '首页',
          iconNormal: require('../../assets/ABai/tabBar/tabbar_index_normal.png'),
          iconHighlight: require('../../assets/ABai/tabBar/tabbar_index_highlight.png')
        },
        {
          title: '个人中心',
          iconNormal: require('../../assets/ABai/tabBar/tabbar_profile_normal.png'),
          iconHighlight: require('../../assets/ABai/tabBar/tabbar_profile_highlight.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.abai {
  align-content: center;
}
.tab-bar {
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
</style>
