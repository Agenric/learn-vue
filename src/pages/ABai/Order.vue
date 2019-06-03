<template>
  <div class="order_root">
    <div class="o_header">
      <tab-slider
        :items="tabs"
        @tsDidSelectTab="tsDidSelectTab" />
    </div>
    <restaurant
      v-if="currentSelectedTabIndex === 0"
      :categorys="dishCategorys"
      class="o_contanier"
      @rDidSelectCategory="rDidSelectCategory" />
    <evaluation
      v-else-if="currentSelectedTabIndex === 1"
      :comments="dishComment"
      class="o_contanier" />
    <store
      v-else-if="currentSelectedTabIndex === 2"
      :info="dishInfo"
      class="o_contanier" />
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
      dishComment: null,
      currentCategoryId: 0
    }
  },
  computed: {
    currentComponent: function () {
      return this.tabs[this.currentSelectedTabIndex].component
    }
  },
  mounted () {
    let that = this
    requestGET('/restaurant.json', {}, function (data) {
      that.dishCategorys = data.dish_cate
      that.dishInfo = data.dish_info
      that.dishComment = data.dish_comment
      that.tabs[1].name = '评价(' + data.dish_comment.comment_fenshu + '分)'
      that.tabs[2].name = data.dish_info.dish_name
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
    position: absolute;
    width: 100%;
    top: 45px;
    bottom: 0px;
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
