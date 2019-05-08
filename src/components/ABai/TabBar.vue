<template>
  <div class="tab-bar">
    <tabBarItem
      v-for="(item, index) in tabs"
      :key="index"
      :tab="item" />
  </div>
</template>

<script>
import tabBarItem from './TabBarItem'
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
  }
}
</script>

<style>
.tab-bar {
  background-color: blue;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
