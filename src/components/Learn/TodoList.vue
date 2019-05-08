<template>
  <div>
    <ol>
      <todoItem
        v-for="item in todoLists"
        :todo="item"
        :key="item.id" />
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
