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
                alt=""
                @click="removeFromShopingCart(child)">
              <span :style="{visibility: child.buy_count > 0 ? 'visible' : 'hidden'}"> {{ child.buy_count }} </span>
              <img
                src="../../assets/ABai/order/order_plus.png"
                alt=""
                @click="addToShopingCart(child)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="shopingCart && shopingCart.length && showShopingCartDetail"
      class="r_background_cover"
      @click="showShopingCartDetail = !showShopingCartDetail" />
    <div
      class="r_shoping_cart">
      <div
        v-if="shopingCart && shopingCart.length && showShopingCartDetail"
        class="r_sc_detail">
        <div class="r_sc_d_title">
          <img
            src="../../assets/ABai/order/order_trash.png"
            alt="">
          <span>清空购物车</span>
        </div>
        <ul>
          <li
            v-for="(goods, index) in shopingCart"
            :key="index"
            class="r_sc_d_item">
            <span class="r_sc_d_i_goods_name">{{ goods.g_name }}</span>
            <div class="r_sc_d_i_goods_detail">
              <span class="r_sc_d_i_gd_price">￥{{ goods.shop_price }}</span>
              <div class="r_sc_d_i_gd_operate">
                <img
                  src="../../assets/ABai/order/order_minus.png"
                  alt=""
                  @click="removeFromShopingCart(goods)">
                <span> {{ goods.buy_count }} </span>
                <img
                  src="../../assets/ABai/order/order_plus.png"
                  alt=""
                  @click="addToShopingCart(goods)">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="r_sc_icon"
        :style="{'background-color': shopingCart.length ? '#FCA511' : '#666566'}"
        @click="showShopingCartDetail = !showShopingCartDetail">
        <img
          src="../../assets/ABai/order/order_shoping_car.png"
          alt="">
        <span v-if="shopingCart.length">{{ shopingCart.length }}</span>
      </div>
      <div
        v-if="shopingCart && shopingCart.length && !showShopingCartDetail"
        class="r_sc_recommend">
        <span>还差23即可免配送费</span>
      </div>
      <div
        class="r_sc_bottom"
        :style="{'background-color': (shopingCart && shopingCart.length) ? 'white' : '#323334'}">
        <div class="r_sc_b_total">
          <span :style="{'color': (shopingCart && shopingCart.length) ? '#fb6c6c' : 'white'}">{{ shopingCart.length ? '￥' + totalMoney : '购物车是空的' }}</span>
        </div>
        <div
          v-if="shopingCart.length"
          class="r_sc_b_submit">
          <span>选好了</span>
        </div>
      </div>
    </div>
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
      parentIndex: 0,
      shopingCart: [],
      showShopingCartDetail: false
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
    },
    totalMoney: function () {
      var total = 0
      this.shopingCart.forEach(function (value, index, array) {
        total += value.shop_price * value.buy_count
      })
      return total
    }
  },
  methods: {
    addToShopingCart: function (obj) {
      let goods = this.shopingCart.find(function (v, i, a) {
        return v.id === obj.id
      })
      obj.buy_count++
      if (!goods) {
        this.shopingCart.push(obj)
      }
    },
    removeFromShopingCart: function (obj) {
      obj.buy_count--
      if (obj.buy_count === 0) {
        this.shopingCart.pop(obj)
      }
    },
    randomColor: function () {
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  }
}
</script>

<style lang="less" scoped>
.res_root {
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
    position: absolute;
    top: 0px;
    bottom: 50px;
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
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 50px;
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
      height: 1px;
      width: 100%;
      background-color: #ebeced;
    }
  }
  .r_background_cover {
    position: fixed;
    background-color: #666566;
    bottom: 0;
    opacity: 0.2;
    height: 100%;
    width: 100%;
    z-index: 100;
  }
  .r_shoping_cart {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    .r_sc_detail {
      background-color: white;
      .r_sc_d_title {
        position: relative;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          width: 22px;
          height: 22px;
          margin-right: 3px;
        }
        span {
          font-size: 15px;
          color: #FCA511;
          margin-right: 10px;
        }
      }
      .r_sc_d_title:before {
        content: '';
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        right: auto;
        height: 1px;
        width: 100%;
        background-color: #EBECED;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        list-style: none;
        max-height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
        .r_sc_d_item {
          position: relative;
          display: flex;
          align-items: center;
          height: 50px;
          .r_sc_d_i_goods_name {
            width: 45%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left: 10px;
          }
          .r_sc_d_i_goods_detail {
            width: 55%;
            display: flex;
            justify-content: space-between;
            .r_sc_d_i_gd_price {
              color: #fb6c6c;
            }
            .r_sc_d_i_gd_operate {
              display: flex;
              align-items: center;
              padding-right: 10px;
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
        .r_sc_d_item:before {
        content: '';
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        right: auto;
        height: 0.5px;
        width: 100%;
        background-color: #EBECED;
      }
      }
    }
    .r_sc_icon {
      position: absolute;
      background-color: #FCA511;
      width: 50px;
      height: 50px;
      left: 10px;
      bottom: 12px;
      border-radius: 25px;
      img {
        position: relative;
        top: 12.5px;
        left: 12.5px;
        width: 25px;
        height: 25px;
      }
      span {
        position: absolute;
        text-align: center;
        top: 0;
        right: -10px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: #fb6c6c;
        border: 1px solid #f2f3f4;
        box-sizing: border-box;
        font-size: 12px;
        color: #f2f3f4;
        line-height: 20px;
      }
    }
    .r_sc_recommend {
      background-color: #FDE3B9;
      height: 28px;
      text-align: center;
      span {
        height: 28px;
        line-height: 28px;
        font-size: 13px;
      }
    }
    .r_sc_bottom {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      .r_sc_b_total {
        width: 70%;
        justify-content: left;
        span {
          padding-left: 90px;
        }
      }
      .r_sc_b_submit {
        width: 30%;
        background-color: chocolate;
        justify-content: center;
      }
      div {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
