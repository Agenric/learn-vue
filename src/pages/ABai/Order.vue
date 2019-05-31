<template>
  <div class="order_root">
    <div class="o_header">
      <tab-slider
        :items="tabs"
        @tsDidSelectTab="tsDidSelectTab" />
    </div>
    <restaurant
      v-if="currentSelectedTabIndex === 0"
      class="o_contanier"
      :style="contanierStyle"
      :categorys="dishCategorys"
      @rDidSelectCategory="rDidSelectCategory" />
    <evaluation
      v-else-if="currentSelectedTabIndex === 1"
      :comments="commentList"
      class="o_contanier"
      :style="contanierStyle" />
    <store
      v-else-if="currentSelectedTabIndex === 2"
      class="o_contanier"
      :style="contanierStyle" />
  </div>
</template>

<script>
import TabSlider from '../../components/ABai/TabSlider'
import Restaurant from '../../components/ABai/Restaurant'
import Evaluation from '../../components/ABai/Evaluation'
import Store from '../../components/ABai/Store'
import { requestGET } from '../../utils/request'

export default {
  components: {
    TabSlider,
    Restaurant,
    Evaluation,
    Store
  },
  data () {
    return {
      tabs: [
        {
          name: '点餐',
          component: 'restaurant'
        },
        {
          name: '评价',
          component: 'evaluation'
        },
        {
          name: '店铺',
          component: 'store'
        }
      ],
      currentSelectedTabIndex: 0,
      dishCategorys: null,
      dishInfo: null,
      commentList: null,
      currentCategoryId: 0
    }
  },
  computed: {
    contanierStyle: function () {
      return {
        height: `${window.innerHeight - 45}px`
      }
    },
    currentComponent: function () {
      return this.tabs[this.currentSelectedTabIndex].component
    }
  },
  mounted () {
    let that = this
    requestGET('/restaurant.json', {}, function (data) {
      that.dishCategorys = data.dish_cate
      that.dishInfo = data.dish_info
      that.commentList = data.dish_comment
    })
  },
  methods: {
    tsDidSelectTab: function (tabIndex) {
      this.currentSelectedTabIndex = tabIndex
      console.log('选中了' + this.tabs[tabIndex].name)
    },
    rDidSelectCategory: function (categoryId, needRefresh) {
      let that = this
      if (needRefresh) {
        requestGET(`/restaurant/${categoryId}.json`, {}, function (data) {
          that.dishCategorys.filter(function (obj, idx, array) {
            return obj.id === categoryId
          })[0].child_cate = data
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.order_root {
  .o_header {
    position: fixed;
    top: 0;
    height: 45px;
    width: 100%;
    z-index: 100;
  }
  .o_contanier {
    // position: absolute;
    // top: 45px;
    margin-top: 45px;
  }
  .o_footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    z-index: 100;
    background-color: red;
  }
}
</style>
