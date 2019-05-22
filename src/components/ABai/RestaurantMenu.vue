<template>
  <div class="res_menu_root">
    <div class="rm_left">
      <span
        v-for="(parent, index) in menu"
        :key="index"
        :class="{em_l_selected: index === parentIndex}"
        @click="parentIndex = index">{{ Object.keys(parent)[0] }}</span>
    </div>
    <div class="rm_right">
      <div
        v-for="(child, index) in Object.values(menu[parentIndex])[0]"
        :key="index"
        class="rm_r_item">
        <img
          src="../../assets/logo.png"
          alt="">
        <span>{{ child.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      parentIndex: 0
    }
  }
}
</script>

<style lang="less" scoped>
.res_menu_root {
  background-color: gray;
  width: 100%;
  height: 100%;
  float: left;
  .rm_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    width: 20%;
    background-color: #F2F3F4;
    span {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 10px;
      text-align: center;
    }
    .em_l_selected {
      background-color: white;
    }
  }
  .rm_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
    width: 80%;
    height: 100%;
    background-color: saddlebrown;
    .rm_r_item {
      height: 100px;
      width: 100%;
      img {
        left: 7px;
        top: 10px;
        width: 70px;
        height: 70px;
      }
      span {
        font-size: 15px;
        right: 10px;
      }
    }
  }
}
</style>
