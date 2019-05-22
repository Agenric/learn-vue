<template>
  <div class="order">
    <div class="o_header">
      <tab-slider
        :items="tabs"
        @tsDidSelectTab="tsDidSelectTab" />
    </div>
    <div class="o_container">
      <restaurant-menu :menu="menu" />
    </div>

    <div class="o_footer" />
  </div>
</template>

<script>
import TabSlider from '../../components/ABai/TabSlider'
import RestaurantMenu from '../../components/ABai/RestaurantMenu'

export default {
  components: {
    'tab-slider': TabSlider,
    'restaurant-menu': RestaurantMenu
  },
  data () {
    return {
      tabs: ['外卖', '评价', '店铺'],
      menu: [
        {
          精品折扣: [
            {
              name: '商品1',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品2',
              sales: 11,
              praise: 3,
              price: 9.99
            },
            {
              name: '商品3',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品4',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品5',
              sales: 10,
              praise: 2,
              price: 19.99
            }
          ]
        },
        {
          最新上架: [
            {
              name: '商品11',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品12',
              sales: 11,
              praise: 3,
              price: 9.99
            },
            {
              name: '商品13',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品14',
              sales: 10,
              praise: 2,
              price: 19.99
            },
            {
              name: '商品15',
              sales: 10,
              praise: 2,
              price: 19.99
            }
          ]
        }
      ]
    }
  },
  methods: {
    tsDidSelectTab: function (tabIndex) {
      console.log('选中了' + this.tabs[tabIndex])
    }
  }
}
</script>

<style lang="less" scoped>
.order {
  .o_header {
    left: 0;
    // position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .o_contanier {
    position: absolute;
    height: 300px;
  }
  .o_footer {
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 50px;
    background-color: red;
  }
}
</style>
