<template>
  <div class="nav">
    <ul>
      <li><router-link to="/">Tabs</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/about">About us</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  height: 100vh;
  min-width: 150px;
  font-size: 16px;
  background-color: #fff;
  color: #888;
  font-weight: bold;
}

.nav li {
  padding: 5px;
}
</style>
