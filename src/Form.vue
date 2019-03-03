<template>
  <div>
    <form v-on:submit.prevent>
      <label for="name">First name</label>
      <input v-model="user.name" type="text" id="name" placeholder="First name">
      <label for="lastName">Last name</label>
      <input v-model="user.lastName" type="text" id="lastName" placeholder="Last name">
      <label for="email">E-mail</label>
      <input v-model="user.email" type="email" id="email" placeholder="E-mail">
      <button @click="submitUser">Submit</button>
    </form>
  </div>
</template>

<script>
import { NEW_USER } from './store/actions/data';

export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    submitUser: function() {
      this.$store.dispatch(NEW_USER, this.user);
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
}

form {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

form label:not(:first-child) {
  margin-top: 15px;
}

form input {
  border: 0;
  width: 250px;
  height: 40px;
  border: 1px solid #888;
}

form button {
  margin-top: 15px;
  border: 0;
  border: 1px solid #888;
  width: 100px;
  height: 40px;
}
</style>
