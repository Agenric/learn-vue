<template>
  <div class="tab-bar-item">
    <img :src="selected ? tab.iconHighlight : tab.iconNormal">
    <span>{{ tab.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      selected: false
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar-item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
  img {
   width: 33px;
   max-width: 32px;
  }
  span {
    font-size: 12px;
  }
}
</style>
