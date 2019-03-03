<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Tabs from './Tabs.vue';

export default {
  name: 'app',
  components: {
    navigation: Nav,
    tabs: Tabs
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: row;
}

a {
  color: #888;
  text-decoration: none;
}

a:visited {
  color: #888;
}
</style>
