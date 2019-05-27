<template>
  <div class="res_menu_root">
    <div class="rm_left">
      <span
        v-for="(parent, index) in menu"
        :key="index"
        :class="{em_l_selected: index === parentIndex, rm_l_item_divider: index != 0}"
        class="rm_l_item"
        @click="parentIndex = index">{{ Object.keys(parent)[0] }}</span>
    </div>
    <div class="rm_right">
      <div
        v-for="(child, index) in Object.values(menu[parentIndex])[0]"
        :key="index"
        :class="{rm_r_item_divider: index != 0}"
        class="rm_r_item">
        <div
          class="rm_r_i_image">
          <img
            src="../../assets/logo.png"
            alt="">
        </div>
        <div
          class="rm_r_i_detail">
          <span class="rm_r_i_d_title">{{ child.name }}</span>
          <br>
          <span class="rm_r_i_d_info">销量{{ child.sales }} 赞{{ child.praise }}</span>
          <div class="rm_r_i_d_buy">
            <span class="rm_r_i_d_b_price">￥{{ child.price }}</span>
            <div
              v-if="child.hasOwnProperty('spec') && child.spec.length > 0"
              class="rm_r_i_d_b_operate">
              <img
                :style="{visibility: true}"
                src="../../assets/ABai/order/order_minus.png"
                alt="">
              <span :style="{visibility: true}"> 0 </span>
              <img
                src="../../assets/ABai/order/order_plus.png"
                alt="">
            </div>
            <div
              v-else
              class="rm_r_i_d_b_spec">
              <span>选择规格</span>
            </div>
          </div>
        </div>
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
  },
  methods: {
    randomColor: function () {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  }
}
</script>

<style lang="less" scoped>
.res_menu_root {
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
    .rm_l_item {
      position: relative;
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
  .rm_l_item_divider:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      right: auto;
      height: 0.5px;
      width: 100%;
      background-color: #EBECED;
    }
  .rm_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
    width: 80%;
    height: 100%;
    .rm_r_item {
      position: relative;
      margin-bottom: 10px;
      width: 100%;
      .rm_r_i_image {
        float: left;
        width: 80px;
        height: 100%;
        img {
          margin: 10px 0 0 10px;
          width: 70px;
          height: 70px;
        }
      }
      .rm_r_i_detail {
        padding: 10px 10px 0 10px;
        height: 100%;
        width: auto;
        overflow: hidden;
        .rm_r_i_d_title {
          font-size: 15px;
        }
        .rm_r_i_d_info {
          font-size: 10px;
          color: #666566;
        }
        .rm_r_i_d_buy {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .rm_r_i_d_b_price {
            color: #FB6C6C;
          }
          .rm_r_i_d_b_spec {
            font-size: 12px;
            padding: 2px 7px;
            border: 1px solid #ADB6BD;
            border-radius: 13px;
          }
          .rm_r_i_d_b_operate {
            display: flex;
            align-items: center;
            span {
              margin: 0 5px;
            }
            img {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
    .rm_r_item_divider:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      right: auto;
      height: 0.5px;
      width: 100%;
      background-color: #EBECED;
    }
  }
}
</style>
