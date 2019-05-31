<template>
  <div class="res_root">
    <div
      v-if="categorys != null && categorys.length"
      class="r_left">
      <div
        v-for="(parent, index) in categorys"
        :key="index"
        :class="{em_l_selected: index === parentIndex, r_l_item_divider: index != 0}"
        class="r_l_item"
        @click="parentIndex = index">
        <span>{{ parent.name }}</span>
      </div>
    </div>
    <div
      v-if="childCategorys != null && childCategorys.length"
      class="r_right">
      <div
        v-for="(child, index) in childCategorys"
        :key="index"
        :class="{r_r_item_divider: index != 0}"
        class="r_r_item">
        <div class="r_r_i_image">
          <img
            :src="child.g_img"
            alt="">
        </div>
        <div class="r_r_i_detail">
          <span class="r_r_i_d_title">{{ child.g_name }}</span>
          <br>
          <span class="r_r_i_d_info">销量{{ child.sale_all_num }} 赞{{ child.like_num }}</span>
          <div class="r_r_i_d_buy">
            <span class="r_r_i_d_b_price">￥{{ child.shop_price }}</span>
            <div
              v-if="child.hasOwnProperty('goods_specification') && child.goods_specification instanceof Array && child.goods_specification.length > 0"
              class="r_r_i_d_b_spec">
              <span>选择规格</span>
            </div>
            <div
              v-else
              class="r_r_i_d_b_operate">
              <img
                :style="{visibility: child.buy_count > 0 ? 'visible' : 'hidden'}"
                src="../../assets/ABai/order/order_minus.png"
                alt="">
              <span :style="{visibility: child.buy_count > 0 ? 'visible' : 'hidden'}"> 0 </span>
              <img
                src="../../assets/ABai/order/order_plus.png"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="r_footer" />
  </div>
</template>

<script>
export default {
  props: {
    categorys: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      parentIndex: 0
    }
  },
  computed: {
    childCategorys: function () {
      if (!this.categorys || this.parentIndex >= this.categorys.length) {
        return null
      }
      if (this.categorys[this.parentIndex].child_cate) {
        this.$parent.rDidSelectCategory(
          this.categorys[this.parentIndex].id,
          false
        )
        return this.categorys[this.parentIndex].child_cate
      } else {
        this.$parent.rDidSelectCategory(
          this.categorys[this.parentIndex].id,
          true
        )
        return null
      }
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
.res_root {
  // height: 100%;
  padding-bottom: 50px;
  // margin-bottom: 50px;
  .r_left {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: #f2f3f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    width: 25%;
    height: 100%;
    .r_l_item {
      width: 100%;
      position: relative;
      span {
        padding: 10px;
        font-size: 12px;
        text-align: center;
        display: block;
        top: 50%;
      }
    }
    .em_l_selected {
      background-color: white;
    }
  }
  .r_l_item_divider:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
    height: 0.5px;
    width: 100%;
    background-color: #ebeced;
  }
  .r_right {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
    width: 75%;
    height: 100%;
    .r_r_item {
      position: relative;
      margin-bottom: 10px;
      width: 100%;
      .r_r_i_image {
        float: left;
        width: 80px;
        height: 100%;
        img {
          margin: 10px 0 0 10px;
          width: 70px;
          height: 70px;
        }
      }
      .r_r_i_detail {
        padding: 10px 10px 0 10px;
        height: 100%;
        width: auto;
        overflow: hidden;
        .r_r_i_d_title {
          font-size: 15px;
        }
        .r_r_i_d_info {
          font-size: 8px;
          color: #666566;
        }
        .r_r_i_d_buy {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .r_r_i_d_b_price {
            color: #fb6c6c;
          }
          .r_r_i_d_b_spec {
            font-size: 12px;
            padding: 2px 7px;
            border: 1px solid #adb6bd;
            border-radius: 13px;
          }
          .r_r_i_d_b_operate {
            display: flex;
            align-items: center;
            span {
              margin: 0 5px;
            }
            img {
              width: 23px;
              height: 23px;
            }
          }
        }
      }
    }
    .r_r_item_divider:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      right: auto;
      height: 0.5px;
      width: 100%;
      background-color: #ebeced;
    }
  }
  .r_footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    z-index: 100;
    background-color: red;
  }
}
</style>
