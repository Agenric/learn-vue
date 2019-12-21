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
              <span
                class="r_r_i_d_b_s_choose"
                @click="goodsSpecChoose = Object.assign({}, child)">选择规格</span>
              <span class="r_r_i_d_b_s_count">{{ child.buy_count }}</span>
            </div>
            <div
              v-else
              class="r_r_i_d_b_operate">
              <img
                :style="{visibility: child.buy_count > 0 ? 'visible' : 'hidden'}"
                src="../../assets/ABai/order/order_minus.png"
                alt=""
                @click="removeFromshoppingCart(child.id, child.cate_c_id)">
              <span :style="{visibility: child.buy_count > 0 ? 'visible' : 'hidden'}"> {{ child.buy_count }} </span>
              <img
                src="../../assets/ABai/order/order_plus.png"
                alt=""
                @click="addToshoppingCart(child.id, child.cate_c_id)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 购物车详情 -->
    <div
      v-if="shoppingCart && shoppingCart.length && showshoppingCartDetail"
      class="r_background_cover"
      @click="showshoppingCartDetail = !showshoppingCartDetail" />
    <div class="r_shoping_cart">
      <div
        v-if="shoppingCart && shoppingCart.length && showshoppingCartDetail"
        class="r_sc_detail">
        <div class="r_sc_d_title">
          <img
            src="../../assets/ABai/order/order_trash.png"
            alt="">
          <span @click="shoppingCart = []">清空购物车</span>
        </div>
        <ul>
          <li
            v-for="(goods, index) in shoppingCart"
            :key="index"
            class="r_sc_d_item">
            <div class="r_sc_d_i_goods_name">
              <span class="r_sc_d_i_gn_main">{{ goods.g_name }}</span>
              <span
                v-if="goods.cate_c_id !== '0'"
                class="r_sc_d_i_gn_sub">{{ goods.goods_specification[0].values.find(function (value) { return value.id === goods.cate_c_id }).label }}</span>
            </div>
            <div class="r_sc_d_i_goods_detail">
              <span class="r_sc_d_i_gd_price">￥{{ goods.shop_price }}</span>
              <div class="r_sc_d_i_gd_operate">
                <img
                  src="../../assets/ABai/order/order_minus.png"
                  alt=""
                  @click="removeFromshoppingCart(goods.id, goods.cate_c_id)">
                <span> {{ goods.buy_count }} </span>
                <img
                  src="../../assets/ABai/order/order_plus.png"
                  alt=""
                  @click="addToshoppingCart(goods.id, goods.cate_c_id)">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 减免配送费提示 -->
      <div
        class="r_sc_icon"
        :style="{'background-color': shoppingCart.length ? '#FCA511' : '#666566'}"
        @click="showshoppingCartDetail = !showshoppingCartDetail">
        <img
          src="../../assets/ABai/order/order_shoping_car.png"
          alt="">
        <span v-if="shoppingCart.length">{{ totalCount }}</span>
      </div>
      <!-- 购物车总数目、金额、付款 -->
      <div
        v-if="shoppingCart && shoppingCart.length && !showshoppingCartDetail && totalMoney < 100"
        class="r_sc_recommend">
        <span>还差{{ 100 - totalMoney }}即可免配送费</span>
      </div>
      <div
        class="r_sc_bottom"
        :style="{'background-color': (shoppingCart && shoppingCart.length) ? 'white' : '#323334'}">
        <div class="r_sc_b_total">
          <span :style="{'color': (shoppingCart && shoppingCart.length) ? '#fb6c6c' : 'white'}">{{ shoppingCart.length ? '￥' + totalMoney : '购物车是空的' }}</span>
        </div>
        <div
          v-if="shoppingCart.length"
          class="r_sc_b_submit">
          <span>选好了</span>
        </div>
      </div>
    </div>
    <!-- 弹窗选择具体规格 -->
    <div
      v-if="goodsSpecChoose && goodsSpecChoose.goods_specification"
      class="r_choose">
      <div class="r_c_detail">
        <div class="r_c_d_title">
          <span>{{ goodsSpecChoose.g_name }}</span>
          <img
            src="../../assets/ABai/order/order_close.png"
            alt=""
            @click="goodsSpecChoose = null">
        </div>
        <div class="r_c_d_content">
          <span class="r_c_d_c_left">{{ goodsSpecChoose.goods_specification[0].name }}</span>
          <div class="r_c_d_c_right">
            <span
              v-for="(spec, index) in goodsSpecChoose.goods_specification[0].values"
              :key="index"
              class="r_c_d_c_r_item"
              :class="{r_c_d_c_r_item_selected: goodsSpecChoose.cate_c_id == spec.id}"
              @click="goodsSpecChooseChange(spec.id)">{{ spec.label }}</span>
          </div>
        </div>
        <div class="r_c_d_bottom">
          <span class="r_c_d_b_price">{{ goodsSpecChoose.shop_price }}</span>
          <div
            v-if="goodsSpecChoose.buy_count"
            class="r_c_d_b_operate">
            <img
              src="../../assets/ABai/order/order_minus.png"
              alt=""
              @click="removeFromshoppingCart(goodsSpecChoose.id, goodsSpecChoose.cate_c_id), goodsSpecChooseChange(goodsSpecChoose.cate_c_id)">
            <span> {{ goodsSpecChoose.buy_count }} </span>
            <img
              src="../../assets/ABai/order/order_plus.png"
              alt=""
              @click="addToshoppingCart(goodsSpecChoose.id, goodsSpecChoose.cate_c_id), goodsSpecChooseChange(goodsSpecChoose.cate_c_id)">
          </div>
          <span
            v-else
            class="r_c_d_b_submit"
            @click="addToshoppingCart(goodsSpecChoose.id, goodsSpecChoose.cate_c_id), goodsSpecChooseChange(goodsSpecChoose.cate_c_id)">加入购物车</span>
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
      shoppingCart: [],
      showshoppingCartDetail: false,
      goodsSpecChoose: null
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
        let that = this
        return this.categorys[this.parentIndex].child_cate.map(function (
          value,
          index,
          array
        ) {
          var buyCount = 0
          that.shoppingCart.forEach(function (subValue, subIndex, subArray) {
            if (value.id === subValue.id) {
              buyCount += subValue.buy_count
            }
          })
          value.buy_count = buyCount
          return value
        })
      } else {
        this.$parent.rDidSelectCategory(
          this.categorys[this.parentIndex].id,
          true
        )
        return null
      }
    },
    totalCount: function () {
      var total = 0
      this.shoppingCart.forEach(function (value, index, array) {
        total += value.buy_count
      })
      return total
    },
    totalMoney: function () {
      var total = 0
      this.shoppingCart.forEach(function (value, index, array) {
        total += value.shop_price * value.buy_count
      })
      return total
    }
  },
  watch: {
    goodsSpecChoose: function (value) {
      if (value) {
        this.goodsSpecChooseChange(value.goods_specification[0].values[0].id)
      }
    },
    shoppingCart: function (value) {
      if (!value.length) {
        this.showshoppingCartDetail = false
      }
    }
  },
  methods: {
    /**
     * 添加一件商品
     * @param {string} parentId 父id
     * @param {string} childId 子id，可能为空
     */
    addToshoppingCart: function (parentId, childId) {
      /**
       * 1、先检查购物车内有无此商品，parentId 和 childId 同时匹配到才算是有
       * 2、如果已经有此商品，那么直接在购物车中增加此商品的 buy_count
       * 3、如果购物车内没有此商品，则证明是新增商品，那么这个商品一定在当前的 childCategorys 数组中
       */
      let goods = this.shoppingCart.find(function (value, index, array) {
        return value.id === parentId && value.cate_c_id === childId
      })

      if (!goods) {
        var goodsIndex = -1
        this.childCategorys.every(function (value, index, array) {
          if (value.id === parentId) {
            goodsIndex = index
            return false
          }
          return true
        })
        goods = Object.assign({}, this.childCategorys.slice(goodsIndex, goodsIndex + 1)[0])
        goods.cate_c_id = childId
        goods.buy_count = 0
        if (childId !== '0') {
          goods.goods_specification[0].values.every(function (
            value,
            index,
            array
          ) {
            if (value.id === childId) {
              goods.shop_price = value.price
              return false
            } else {
              return true
            }
          })
        }
        this.shoppingCart.push(goods)
      }
      goods.buy_count++
    },
    removeFromshoppingCart: function (parentId, childId) {
      let that = this
      this.shoppingCart.every(function (value, index, array) {
        if (value.id === parentId && value.cate_c_id === childId) {
          value.buy_count--
          if (value.buy_count === 0) {
            that.shoppingCart.splice(index, 1)
          }
          return false
        }
        return true
      })
    },
    goodsSpecChooseChange: function (valueId) {
      this.goodsSpecChoose.cate_c_id = valueId
      let that = this
      this.goodsSpecChoose.goods_specification[0].values.every(function (
        value,
        index,
        array
      ) {
        if (value.id === that.goodsSpecChoose.cate_c_id) {
          that.goodsSpecChoose.shop_price = value.price
          return false
        } else {
          return true
        }
      })

      this.goodsSpecChoose.buy_count = 0
      this.shoppingCart.every(function (value, index, array) {
        if (
          value.id === that.goodsSpecChoose.id &&
          value.cate_c_id === that.goodsSpecChoose.cate_c_id
        ) {
          that.goodsSpecChoose.buy_count = value.buy_count
          return false
        } else {
          return true
        }
      })
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
        padding: 10px;
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
            position: relative;
            .r_r_i_d_b_s_choose {
              padding: 2px 7px;
              border: 1px solid #adb6bd;
              border-radius: 13px;
              font-size: 11px;
            }
            .r_r_i_d_b_s_count {
              position: absolute;
              top: -5px;
              right: -5px;
              font-size: 8px;
              border-radius: 8px;
              background-color: #fb6c6c;
              color: white;
              padding: 3px;
              height: 10px;
              min-width: 10px;
              line-height: 10px;
              text-align: center;
            }
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
    opacity: 0.3;
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
          color: #fca511;
          margin-right: 10px;
        }
      }
      .r_sc_d_title:before {
        content: "";
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        right: auto;
        height: 1px;
        width: 100%;
        background-color: #ebeced;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        max-height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
        .r_sc_d_item {
          position: relative;
          border:1px solid transparent;
          display: flex;
          align-items: center;
          padding: 8px 0;
          .r_sc_d_i_goods_name {
            width: 55%;
            display: flex;
            flex-direction: column;
            span {
              margin-left: 10px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .r_sc_d_i_gn_main {
              font-size: 14px;
            }
            .r_sc_d_i_gn_sub {
              color: #666566;
              font-size: 10px;
            }
          }
          .r_sc_d_i_goods_detail {
            width: 45%;
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
          content: "";
          position: absolute;
          left: 0;
          top: auto;
          bottom: 0px;
          right: auto;
          height: 1px;
          width: 100%;
          background-color: #ebeced;
        }
      }
    }
    .r_sc_icon {
      position: absolute;
      background-color: #fca511;
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
        padding-left: 5.5px;
        padding-right: 5.5px;
        height: 20px;
        border-radius: 10px;
        background-color: #fb6c6c;
        border: 1px solid #f2f3f4;
        box-sizing: border-box;
        font-size: 12px;
        color: #f2f3f4;
        line-height: px;
      }
    }
    .r_sc_recommend {
      background-color: #fde3b9;
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
  .r_choose {
    position: fixed;
    background-color: rgba(102, 101, 102, 0.5);
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 105;
    display: flex;
    justify-content: center;
    align-items: center;
    .r_c_detail {
      position: absolute;
      background-color: white;
      border-radius: 5px;
      left: 50px;
      right: 50px;
      padding: 15px;
      max-width: 85%;
      .r_c_d_title {
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 15px;
        }
        img {
          width: 17px;
          height: 17px;
        }
      }
      .r_c_d_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        .r_c_d_c_left {
          width: 85px;
          align-self: flex-start;
          font-size: 14px;
          color: #666566;
        }
        .r_c_d_c_right {
          display: flex;
          flex-wrap: wrap;
          .r_c_d_c_r_item {
            border: 0.5px solid #b1b2b3;
            color: #b1b2b3;
          }
          .r_c_d_c_r_item_selected {
            border: 0.5px solid #fca511;
            color: #fca511;
          }
          span {
            font-size: 10px;
            margin: 0 5px 3px 0;
            border-radius: 13px;
            padding: 2px 5px;
          }
        }
      }
      .r_c_d_bottom {
        height: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .r_c_d_b_price {
          color: #fb6c6c;
        }
        .r_c_d_b_submit {
          height: 34px;
          line-height: 36px;
          background-color: #fca511;
          color: white;
          border-radius: 8px;
          font-size: 15px;
          padding: 0 10px;
        }
        .r_c_d_b_operate {
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
  }
}
</style>
