<template>
  <div id="list-animation">
    <button @click="add">
      Add
    </button>
    <button @click="remove">
      Remove
    </button>
    <transition-group
      name="list"
      tag="p">
      <span
        v-for="item in items"
        :key="item"
        class="listItem">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>

<style scoped>
.listItem{
    display: inline-block;
    margin-right: 10px
}
.list-enter-active,
.list-leave-active{
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    transform: translateY(30px)
}
</style>
