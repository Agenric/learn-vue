<template>
  <div>
    <ul>
      <li
        v-for="item in menu"
        :key="item.id">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
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
          title: 'ABai',
          path: '/abai'
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
