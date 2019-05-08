<template>
  <div class="learn">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', {active: currentTab === tab}]"
      @click="currentTab = tab">{{ tab }}</button>
    <keep-alive>
      <component
        :is="currentTabComponent"
        class="tab"/>
    </keep-alive>
  </div>
</template>

<script>
import QuickStart from '@/components/Learn/QuickStart'
import ListAnimation from '@/components/Learn/ListAnimation'
import Request from '@/components/Learn/Request'

export default {
  components: {
    QuickStart,
    ListAnimation,
    Request
  },
  data () {
    return {
      currentTab: 'QuickStart',
      tabs: ['QuickStart', 'ListAnimation', 'Request']
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab
    }
  }
}
</script>

<style scoped>
.learn {
  float: left;
  text-align: left;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>
