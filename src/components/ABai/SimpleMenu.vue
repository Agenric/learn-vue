<template>
  <div class="sm_root">
    <ul
      v-for="parent in rawData"
      :key="parent.id"
      class="sm_section">
      <li
        :style="{'border-bottom-style': parent.list.length > 0 ? 'solid' : ''}"
        class="sm_s_header"
        @click="parent.open = !parent.open">
        <div>
          <img
            src="../../assets/ABai/user/menu_circle.png"
            alt="">
          <span>{{ parent.name }}</span>
        </div>
        <img
          :style="{visibility: parent.list.length > 0 ? '' : 'hidden'}"
          :class="{arrow_trans: parent.open}"
          src="../../assets/ABai/user/menu_arrow.png"
          alt="">
      </li>
      <li
        v-for="(child, index) in parent.list"
        :key="child.id"
        :class="{sm_s_cell_last: !(index === parent.list.length - 1)}"
        :style="{display: parent.open ? '' : 'none'}"
        class="sm_s_cell">
        <img
          src="../../assets/ABai/user/menu_arrow.png"
          alt="">
        <span>{{ child.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rawData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.sm_root {
  width: 100%;
  .sm_section {
    list-style: none;
    padding: 0;
    display: inline;
    li {
      -webkit-tap-highlight-color: transparent;
      background-color: white;
      height: 50px;
      display: flex;
      padding: 0 20px;
      align-items: center;
      border-width: 1px;
      border-color: #ECECEB;
      box-sizing: border-box;
      span {
        margin-left: 8px;
        color: #504F50;
        font-size: 15px;
      }
      img {
        width: 14px;
        height: 14px;
        -webkit-transition: transform .25s linear;
        -moz-transition: transform .25s linear;
        -o-transition: transform .25s linear;
        transition: transform .25s linear;
      }
      .arrow_trans {
        transform: rotate(90deg);
        -webkit-transition: transform .25s linear;
        -moz-transition: transform .25s linear;
        -o-transition: transform .25s linear;
        transition: transform .25s linear;
      }
    }
    .sm_s_header {
      margin-top: 10px;
      justify-content: space-between;
    }
    .sm_s_cell {
      position: relative;
      img {
        margin-left: 5px;
      }
      span {
        color: #666566;
      }
    }
    .sm_s_cell_last:before {
      content: '';
      position: absolute;
      left: 20px;
      top: auto;
      bottom: 0;
      right: auto;
      height: 1px;
      width: 100%;
      background-color: #ECECEB;
    }
  }
}
</style>
