<template>
  <div class="tab-bar-container">
    <div class="tab-bar-line" />
    <div class="tab-bar">
      <tabBarItem
        v-for="(item, index) in tabs"
        :key="index"
        :tab="item"
        @selectTab="didSelectTab" />
    </div>
  </div>
</template>

<script>
import tabBarItem from './TabBarItem'
import { setTimeout } from 'timers'
export default {
  components: {
    tabBarItem
  },
  props: {
    tabs: {
      type: Array,
      required: true,
      default: null
    }
  },
  data () {
    return {
      selectedIndex: null
    }
  },
  created () {
    setTimeout(() => {
      if (this.tabs.length) {
        this.didSelectTab(this.tabs[0])
      }
    }, 0)
  },
  methods: {
    didSelectTab: function (tab) {
      var index = this.tabs.indexOf(tab)
      if (index === this.selectedIndex) {
        return
      }
      if (this.selectedIndex !== null) {
        this.$children[this.selectedIndex].selected = !this.$children[this.selectedIndex].selected
      }
      this.$children[index].selected = !this.$children[index].selected
      this.selectedIndex = index
      this.$parent.didSelectTab(index)
    }
  }
}
</script>

<style lang="less">
.tab-bar-container {
  height: 64px;
  .tab-bar-line {
    background-color: rgb(204, 201, 201);
    height: 0.5px;
    width: 100%;
    margin: 0px;
  }
  .tab-bar {
    background-color: white;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
