<template>
  <div
    class="tab-bar-item"
    @click="$emit('selectTab', tab)">
    <img :src="selected ? tab.iconHighlight : tab.iconNormal">
    <span :style="{ color: titleColor }">{{ tab.title }}</span>
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
  },
  computed: {
    titleColor: function () {
      return this.selected ? '#FCA511' : '#ADB6BD'
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
   width: 24px;
   margin-top: 2px;
  }
  span {
    font-size: 13px;
  }
}
</style>
