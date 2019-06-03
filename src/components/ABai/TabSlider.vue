<template>
  <div class="tab_slider_root">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="{ts_selected: index === current}"
      @click="didSelectTab(index)">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    didSelectTab: function (index) {
      this.current = index
      this.$parent.tsDidSelectTab(index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab_slider_root {
  position: relative;
  display: flex;
  height: 45px;
  justify-content: space-around;
  background-color: white;
  div {
    // text-align: center;
    // width: 33.33%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      padding: 0 10px;
      color: #323334;
      font-size: 15px;
      align-items: center;
      vertical-align: middle;
    }
  }
  .ts_selected {
    span {
      color: #fca511;
    }
  }
  .ts_selected:before {
    content: "";
    position: absolute;
    top: auto;
    bottom: 0;
    left: auto;
    right: auto;
    height: 1px;
    width: 100%;
    background-color: #fca511;
  }
}
.tab_slider_root:before {
  content: "";
  position: absolute;
  left: 0;
  top: auto;
  bottom: 0;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #EBECED;
}
</style>
