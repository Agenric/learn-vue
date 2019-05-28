<template>
  <div class="h_root">
    <div class="h_image_slider">
      <ImageSlider :images="images" />
    </div>
    <div class="h_main_menu">
      <div
        v-for="(channel, index) in channels"
        :key="index"
        class="h_main_menu_item"
        @click="go(channel.page)">
        <img
          :src="channel.img"
          alt="">
        <span>{{ channel.title }}</span>
      </div>
    </div>
    <div class="h_invite_recharge_title">
      <div class="h_irt_left">
        <span class="h_irt_main_title">会员充值</span>
        <span class="h_irt_sub_title">充值有礼，多充多送</span>
      </div>
      <div class="h_irt_right">
        <span>会员中心</span>
      </div>
    </div>
    <div class="h_invite_recharge">
      <div
        v-for="(r, index) in rechargeOptions"
        :key="index">
        <div>
          <span class="h_ir_recharge">￥ {{ r.condition }}</span>
          <span class="h_ir_free">赠送{{ r.money }}元</span>
        </div>
      </div>
    </div>
    <div>
      <div class="h_buttom_banner">
        <span>~ 让 轻 食 不 被 轻 视 ~</span>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from '../../components/ABai/ImageSlider'
import { requestGET } from '../../utils/request'

export default {
  components: {
    ImageSlider
  },
  data () {
    return {
      images: null,
      channels: null,
      rechargeOptions: null
    }
  },
  created () {
    let that = this
    requestGET('/home.json', {}, function (data) {
      console.log(data)
      that.images = data.images
      that.channels = data.channels
      that.rechargeOptions = data.rechargeOptions
    })
  },
  methods: {
    go: function (path) {
      this.$router.push({
        name: path
      })
    }
  }
}
</script>

<style lang="less">
.h_root {
  align-content: center;
  align-items: center;
  .h_image_slider {
    width: 375px;
    height: 180px;
    margin: auto;
  }
  .h_main_menu {
    background-color: white;
    margin-top: 10px;
    display: flex;
    height: 100px;
    padding: 0 10px;
    justify-content: space-around;
    .h_main_menu_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        margin-top: 8px;
        font-size: 13px;
        color: black;
      }
    }
  }
  .h_invite_recharge_title {
    background-color: white;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .h_irt_left {
      margin: 5px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .h_irt_main_title {
        font-weight: 500;
      }
      .h_irt_sub_title {
        font-size: 14px;
        color: gray;
      }
    }
    .h_irt_right {
      margin-right: 15px;
      span {
        font-size: 14px;
        padding: 5px 10px;
        color: rgb(247, 38, 48);
        border: 1px solid rgb(247, 38, 48);
        border-radius: 15px;
      }
    }
  }
  .h_invite_recharge {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 0 3%;
    div {
      width: 50%;
      height: 100px;
      position: relative;
      div {
        position: absolute;
        align-items: center;
        width: 85%;
        height: 80%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid rgb(229, 187, 138);
        border-radius: 5px;
        color: rgb(229, 187, 138);
        .h_ir_recharge {
          font-weight: 700;
        }
        .h_ir_free {
          font-size: 12px;
        }
      }
    }
  }
  .h_buttom_banner {
    background-color: white;
    margin-top: 15px;
    height: 150px;
    display: flex;
    // justify-content: center;
    span {
      margin: auto;
      color: rgb(200, 200, 200)
    }
  }
}
</style>
