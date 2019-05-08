<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: false,
      default: null
    }
  },
  data () {
    return {

    }
  }
}
</script>
