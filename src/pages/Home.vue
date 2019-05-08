<template>
  <div>
    <ul>
      <li
        v-for="item in menu"
        :key="item.id">
        <a :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Migrate',
          path: '/migrate'
        },
        {
          title: 'Learn',
          path: '/learn'
        },
        {
          title: 'HelloWord',
          path: '/helloword'
        }
      ]
    }
  }
}
</script>
