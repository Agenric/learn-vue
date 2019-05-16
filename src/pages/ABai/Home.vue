<template>
  <div class="h_root">
    <div class="h_image_slider">
      <ImageSlider :images="images" />
    </div>
    <div class="h_main_menu">
      <div class="h_main_menu_item">
        <img
          src="../../assets/ABai/home/home_calendar.png"
          alt="">
        <span>轻食生活</span>
      </div>
      <div class="h_main_menu_item">
        <img
          src="../../assets/ABai/home/home_to_shop.png"
          alt="">
        <span>到店自提</span>
      </div>
      <div class="h_main_menu_item">
        <img
          src="../../assets/ABai/home/home_take_out.png"
          alt="">
        <span>外卖点餐</span>
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
        v-for="(r, index) in recharges"
        :key="index">
        <div>
          <span class="h_ir_recharge">￥ {{ r.recharge.toFixed(2) }}</span>
          <span class="h_ir_free">赠送{{ r.free.toFixed(2) }}元</span>
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

export default {
  components: {
    ImageSlider
  },
  data () {
    return {
      title: 'Index',
      images: [
        {
          url:
            'https://img.zcool.cn/community/017973554260cd0000019ae9976589.jpg@1280w_1l_2o_100sh.jpg',
          target: 'https://www.mobike.com'
        },
        {
          url:
            'https://img.zcool.cn/community/012b3b554260cd0000019ae9c4ad38.jpg@1280w_1l_2o_100sh.jpg',
          target: 'https://www.mobike.com'
        },
        {
          url:
            'https://img.zcool.cn/community/01e49059a53c6aa8012028a95227d5.jpg@1280w_1l_2o_100sh.jpg',
          target: 'https://www.mobike.com'
        },
        {
          url:
            'https://img.zcool.cn/community/016a5b5544dee50000019ae9080f86.jpg@1280w_1l_2o_100sh.jpg',
          target: 'https://www.mobike.com'
        }
      ],
      recharges: [
        {
          recharge: 300,
          free: 30
        },
        {
          recharge: 600,
          free: 90
        },
        {
          recharge: 1000,
          free: 200
        },
        {
          recharge: 3000,
          free: 750
        }
      ]
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
    display: flex;
    flex-wrap: wrap;
    div {
      background-color: rgba(200, 200, 200, 0.7);
      width: 50%;
      height: 100px;
      div {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(247, 38, 48);
      }
    }
  }
  .h_buttom_banner {
    background-color: white;
    margin-top: 15px;
    height: 150px;
    display: flex;
    span {
      margin: auto;
      color: rgb(200, 200, 200)
    }
  }
}
</style>
