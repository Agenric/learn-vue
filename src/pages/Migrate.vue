<template>
  <div
    id="app"
    class="migrate">
    <ul>
      <li
        v-for="item in button_list"
        :key="item.id">
        <button
          class="my-button"
          @click="item.handle">{{ item.title }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      button_list: [
        {
          title: '继续用车',
          handle: function () {
            window.location.href =
              'mobike://bridge?name=response&callback=1&data=%7B%22type%22%3A12%2C%22data%22%3A%22%22%7D'
            window.setTimeout(function () {
              window.location.href =
                'mobike://bridge?name=close&callback=1&data=%7B%22response%22%3A15%7D'
            }, 0)
          }
        },
        {
          title: '我知道了',
          handle: function () {
            window.location.href =
              'mobike://bridge?name=close&callback=1&data=%7B%22response%22%3A15%7D'
          }
        },
        {
          title: '去美团开锁',
          handle: function () {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
              window.location.href =
                'imeituan://www.meituan.com/bike/scan?url=http%3A%2F%2Fwww.mobike.com%2Fdownload%2Fapp.html%3Fb%3D6928439741' // ios app协议
              window.setTimeout(function () {
                window.location.href =
                  'https://itunes.apple.com/cn/app/id423084029'
              }, 2000)
            }
            if (navigator.userAgent.match(/android/i)) {
              window.location.href = 'com.baidu.tieba://app' // android app协议
              window.setTimeout(function () {
                window.location.href = 'https://****.apk' // android 下载地址
              }, 2000)
            }
          }
        }
      ]
    }
  }
}
</script>

<style>
.migrate {
  background-color: aquamarine 0.8;
  float: left;
}
.my-button {
  background-color: blueviolet;
  font-size: 12px;
}
</style>
