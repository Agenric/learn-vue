<template>
  <div>
    <ol>
      <todoItem
        v-for="item in todoLists"
        :key="item.id"
        :todo="item" />
    </ol>
  </div>
</template>

<script>
import todoItem from '@/components/Learn/TodoItem'
export default {
  components: {
    todoItem
  }
}
</script>
