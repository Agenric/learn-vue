<template>
  <div id="quick-start">
    v-once：
    <span v-once>{{ message }}</span>
    <br>
    {{ message }}
    <br>
    即时联动：
    <input
      v-model="message"
      type="text">
    <br>
    延时联动：
    <input
      v-model.lazy="message"
      type="text">
    <br>
    <button @click="reverseMessage">
      反转字符串
    </button>
    <br><br>
    <span :title="mouseMessage">
      鼠标悬停几秒钟，查看此处绑定的动态信息
    </span>
    <br><br>
    v-if：
    <span v-if="seen">现在你看到了我</span>
    <br>
    <button @click="seen = !seen">
      {{ seen === true ? '隐藏' : '显示' }}
    </button>
    <br><br>
    <ol>
      <li
        v-for="todo in todoLists"
        :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
    <br><br>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue!',
      mouseMessage: '页面加载于' + new Date().toLocaleString(),
      seen: false,
      todoLists: [
        { text: 'JeffBee', id: 1 },
        { text: 'Agenric', id: 2 },
        { text: 'Target', id: 3 }
      ]

    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message
        .split(' ')
        .reverse()
        .join(' ')
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    }
  }
}
</script>
