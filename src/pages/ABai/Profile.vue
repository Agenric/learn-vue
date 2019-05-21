<template>
  <div class="p_root">
    <div class="p_user">
      <div class="p_u_info">
        <img
          :src="userIcon"
          alt="">
        <span>用户：20117750355</span>
      </div>
      <div class="p_u_vip">
        <div class="p_uv_left">
          <div>
            <img
              src="../../assets/logo.png"
              alt="">
            <span class="p_uv_main_title">会员特权</span>
          </div>
          <span class="p_uv_sub_title">消费返积分，各种特权享不停</span>
        </div>
        <div class="p_uv_right">
          <span @click="openVip">开通会员</span>
        </div>
      </div>
    </div>
    <div class="p_u_menu">
      <simple-menu :raw-data="menuRawData"/>
    </div>
  </div>
</template>

<script>
import SimpleMenu from '../../components/ABai/SimpleMenu'

export default {
  components: {
    'simple-menu': SimpleMenu
  },
  data () {
    return {
      userIcon: require('../../assets/ABai/user/portrait.png'),
      menuRawData: [
        {
          id: '1',
          name: '阿白手作',
          uri: 'www',
          open: true,
          list: [
            {
              id: '11',
              name: '我的订单',
              uri: 'www'
            }
          ]
        },
        {
          id: '2',
          name: '燃脂计划',
          uri: 'www',
          open: true,
          list: [
            {
              id: '21',
              name: '我的收藏',
              uri: 'www'
            },
            {
              id: '22',
              name: '我的文章',
              uri: 'www'
            }
          ]
        },
        {
          id: '3',
          name: '设置',
          open: true,
          list: []
        }
      ]
    }
  },
  methods: {
    openVip: function () {
      console.log('开通会员')
    }
  }
}
</script>

<style lang="less" scoped>
.p_root {
  .p_user {
    background-color: #FEFEFF;
    height: 250px;
    .p_u_info {
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        background-color: aqua;
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
      span {
        margin-top: 10px;
        font-size: 14px;
      }
    }
    .p_u_vip {
      height: 30%;
      margin: 0 20px;
      border-radius: 8px 8px 0 0;
      box-shadow: -5px 0 4px rgba(0, 0, 0, .1), //左边阴影
                  0 -5px 4px rgba(0, 0, 0, .1), //顶部阴影
                  0 0 0 rgba(0, 0, 0, 0), //底部阴影
                  5px 0 4px rgba(0, 0, 0, .1); //右边阴影
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .p_uv_left {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          align-items: center;
          img {
            width: 17px;
            height: 17px;
            margin-right: 4px;
          }
        }
        .p_uv_main_title {
          font-weight: 800;
          font-size: 17px;
        }
        .p_uv_sub_title {
          margin-top: 3px;
          font-weight: 400;
          font-size: 14px;
        }
      }
      .p_uv_right {
        height: 60%;
        margin-right: 15px;
        span {
          border: 1px solid;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 5px;
        }
      }
    }
    .p_u_menu {
      width: 100%;
    }
  }
}
</style>
