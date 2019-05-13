<template>
  <div class="h_root">
    <div class="h_image_slider">
      <ImageSlider :images="images" />
    </div>
    <!-- <span>{{ title }}</span> -->
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
      ]
    }
  }
}
</script>

<style lang="less">
.h_root {
  align-content: center;
  .h_image_slider {
    width: 375px;
    height: 180px;
  }
}
</style>
