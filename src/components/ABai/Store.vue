<template>
  <div class="store_root">
    <img
      class="s_logo"
      :src="info.dish_logo"
      alt="">
    <div class="s_info">
      <div class="s_i_item s_i_i_title">
        <img
          src="../../assets/ABai/order/info_shop_name.png"
          alt="">
        <span>{{ info.dish_name }}</span>
      </div>
      <div class="s_i_item">
        <img
          src="../../assets/ABai/order/info_shop_desc.png"
          alt="">
        <span>{{ info.dish_jieshao }}</span>
      </div>
      <div class="s_i_item">
        <img
          src="../../assets/ABai/order/info_shop_phone.png"
          alt="">
        <span><a :href="'tel://' + info.dish_con_mobile">{{ info.dish_con_mobile }}</a></span>
      </div>
      <div class="s_i_item">
        <img
          src="../../assets/ABai/order/info_shop_location.png"
          alt="">
        <span>{{ info.dish_address }}</span>
      </div>
    </div>
    <div class="s_other">
      <span>商家资质</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.store_root {
  background-color: white;
  text-align: center;
  .s_logo {
    width: 375px;
    height: 265px;
  }
  .s_info {
    .s_i_item {
      position: relative;
      margin: 20px;
      text-align: left;
      display: flex;
      img {
        width: 18px;
        height: 18px;
        margin-top: 2px;
        margin-right: 10px;
      }
      span {
        font-size: 15px;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
    .s_i_i_title {
      img {
        margin-top: 4px;
      }
      span {
        color: #fca511;
        font-size: 18px;
      }
    }
    .s_i_item:before {
      content: '';
      position: absolute;
      left: 0;
      top: auto;
      bottom: -10px;
      right: 0;
      height: 1px;
      width: 100%;
      background-color: #EBECED;
    }
  }
  .s_other {
    text-align: left;
    span {
      margin: 20px;
    }
  }
}
</style>
