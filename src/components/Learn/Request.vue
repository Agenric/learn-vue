<template>
  <div>
    <p>
      Ask a yes/no question:
      <input
        v-model="question"
        type="text">
    </p>
    <p>{{ answer }}</p>
    <img
      :src="url"
      alt=""
      srcset="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      question: '',
      url: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created () {
    setTimeout(() => {
      this.debouncedGetAnswer = this.getAnswer
    }, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      vm.axios.get('https://yesno.wtf/api').then(function (response) {
        vm.answer = response.data.answer.toLowerCase()
        vm.url = response.data.image.toLowerCase()
        console.log(vm.answer)
        console.log(vm.url)
      }).catch(function (error) {
        vm.answer = 'Error! Could not reach the API. ' + error
      })
    }
  }
}
</script>
