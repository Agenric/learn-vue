<template>
  <div class="is_root">
    <dir class="is_window">
      <ul
        :style="containerStyle"
        class="is_container">
        <li><img
          :src="images[frontIndex].url"
          alt=""></li>
        <li><img
          :src="images[currentIndex].url"
          alt=""></li>
        <li><img
          :src="images[backIndex].url"
          alt=""></li>
      </ul>
      <ul class="is_direction">
        <li
          class="is_direction_left"
          @click="left">
          <img
            src="../../assets/ABai/imageslider/imageslider_left_circle.png"
            alt=""></li>
        <li
          class="is_direction_right"
          @click="right">
          <img
            src="../../assets/ABai/imageslider/imageslider_right_circle.png"
            alt="">
        </li>
      </ul>
      <ul class="is_segment_control">
        <li
          v-for="(image, index) in images"
          :key="index"
          :class="{is_segment_selected: index === currentIndex}" />
      </ul>
    </dir>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      currentIndex: 0,
      currentOffset: -375
    }
  },
  computed: {
    containerStyle: function () {
      return {
        transform: `translate3d(${this.currentOffset}px, 0, 0)`
      }
    },
    frontIndex: function () {
      return this.currentIndex === 0
        ? this.images.length - 1
        : this.currentIndex - 1
    },
    backIndex: function () {
      return this.currentIndex === this.images.length - 1
        ? 0
        : this.currentIndex + 1
    }
  },
  methods: {
    left: function () {
      this.move(-1, this.frontIndex, true)
    },
    right: function () {
      this.move(1, this.backIndex, true)
    },
    move: function (direction, to, animation) {
      const temp = window.setInterval(() => {
        console.log(this.currentOffset)
        if (this.currentOffset === 0 || this.currentOffset === -(375 * 2)) {
          window.clearInterval(temp)
          this.currentOffset = -375
          this.currentIndex = to
        } else {
          if (direction > 0) {
            this.currentOffset -= 1
          } else {
            this.currentOffset += 1
          }
        }
      }, 1)
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>

<style lang="less" scoped>
.is_root {
  box-sizing: border-box;
  text-align: center;
  height: 100%;
  .is_window {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
    .is_container {
      position: absolute;
      display: flex;
      // transform: translate3d(-375px, 0px, 0px);
      li {
        list-style: none;
        img {
          width: 375px;
          height: 180px;
          user-select: none;
        }
      }
    }
    .is_direction {
      li {
        list-style: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        img {
            width: 100%;
            height: 100%;
        }
      }
      .is_direction_left {
        left: 3%;
      }
      .is_direction_right {
        right: 3%;
      }
    }
    .is_segment_control {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      .is_segment_selected {
        background-color: red;
      }
      li {
        display: inline-block;
        background-color: #333;
        margin: 0 3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
</style>
