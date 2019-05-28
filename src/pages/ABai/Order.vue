<template>
  <div class="order_root">
    <div class="o_header">
      <tab-slider
        :items="tabs"
        @tsDidSelectTab="tsDidSelectTab" />
    </div>
    <!-- <div class="o_container"> -->
    <restaurant
      class="o_container"
      :categorys="dishCategorys"
      @rDidSelectCategory="rDidSelectCategory" />
    <!-- </div> -->

    <div class="o_footer" />
  </div>
</template>

<script>
import TabSlider from '../../components/ABai/TabSlider'
import Restaurant from '../../components/ABai/Restaurant'
import { requestGET } from '../../utils/request'

export default {
  components: {
    TabSlider,
    Restaurant
  },
  data () {
    return {
      tabs: ['外卖', '评价', '店铺'],
      dishCategorys: null,
      dishInfo: null,
      commentList: null,
      currentCategoryId: 0
    }
  },
  mounted () {
    let that = this
    requestGET('/restaurant.json', {}, function (data) {
      that.dishCategorys = data.dish_cate
      that.dishInfo = data.dish_info
      that.commentList = data.comment_list
    })
  },
  methods: {
    tsDidSelectTab: function (tabIndex) {
      switch (tabIndex) {
        case 0:
          break
        case 1:
          break
        case 2:
          break
      }
      console.log('选中了' + this.tabs[tabIndex])
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
  // width: 100%;
  // height: 100%;
  // margin: 0;
  // padding: 0;
  // align-content: center;
  .o_header {
    position: fixed;
    // left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .o_contanier {
    position: relative;
    top: 45px;
    padding-top: 45px;
    padding-bottom: 50px;
    width: 100%;
    background-color: aquamarine;
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
