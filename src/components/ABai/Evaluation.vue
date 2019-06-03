<template>
  <div class="evaluation_root">
    <div
      v-if="comments != null"
      class="e_header">
      <div class="e_h_score">
        <span class="e_h_s_value">{{ comments.comment_fenshu }}</span>
        <span class="e_h_s_unit"> 分</span>
      </div>
      <span class="e_h_comment_count">共有{{ comments.comment_count }}条评价</span>
    </div>
    <div
      v-if="comments != null"
      class="e_container">
      <div
        v-for="comment in comments.comment_list"
        :key="comment.id"
        class="e_c_item">
        <div class="e_c_i_title">
          <div class="e_c_i_title">
            <span class="e_c_i_t_name">{{ comment.user_nickname }}</span>
            <ul class="e_c_i_t_star">
              <li
                v-for="index in [1, 2, 3, 4, 5]"
                :key="index"
                class="e_c_i_t_s_item">
                <img
                  :src="comment.shi_xing_arr.includes(index) ? require('../../assets/ABai/comment/comment_star_fill.png') : require('../../assets/ABai/comment/comment_star.png')"
                  alt="">
              </li>
            </ul>
          </div>
          <span class="e_c_i_t_date">{{ comment.add_time }}</span>
        </div>
        <div class="e_c_i_detail">
          <span class="e_c_i_d_content">{{ comment.content }}</span>
          <div
            v-if="comment.imglist && comment.imglist.length"
            class="e_c_i_d_images">
            <img
              v-for="image in comment.imglist"
              :key="image.id"
              :src="image.imgurl"
              alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Object,
      default: null
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.evaluation_root {
  .e_header {
    padding-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    .e_h_score {
      .e_h_s_value {
        font-size: 29px;
      }
      .e_h_s_unit {
        font-size: 9px;
      }
      span {
        color: #FB6C6C;
      }
    }
    .e_h_comment_count {
      font-size: 17px;
      color: #878889;
    }
  }
  .e_container {
    .e_c_item {
      position: relative;
      padding: 10px;
      .e_c_i_title {
        display: flex;
        justify-content: space-between;
        .e_c_i_title {
          flex-wrap: wrap;
        }
        .e_c_i_t_name {
          font-size: 15px;
          color: #878889;
        }
        .e_c_i_t_star {
          list-style: none;
          padding: 0 0 0 5px;
          margin: 0;
          .e_c_i_t_s_item {
            padding: 0;
            float: left;
            img {
              padding: 0;
              margin: 0;
              width: 18px;
              height: 18px;
            }
          }
        }
        .e_c_i_t_date {
          font-size: 15px;
          color: #878889;
        }
      }
      .e_c_i_detail {
        margin-top: 10px;
        .e_c_i_d_content {
          font-size: 15px;
        }
        .e_c_i_d_images {
          display: flex;
          flex-wrap: wrap;
          img {
            width: 50px;
            height: 50px;
            margin-top: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .e_c_item:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: auto;
      right: auto;
      height: 0.5px;
      width: 100%;
      background-color: #EBECED;
    }
  }
}
</style>
