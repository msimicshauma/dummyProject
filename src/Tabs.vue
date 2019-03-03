<template>
  <div class="tabs">
    <ul>
      <li @click="loadTab(1)" v-bind:class="{ active: tab1 }">Tab 1</li>
      <li @click="loadTab(2)" v-bind:class="{ active: tab2 }">Tab 2</li>
      <li @click="loadTab(3)" v-bind:class="{ active: tab3 }">Tab 3</li>
    </ul>
    <p v-for="par in text.slice(0,1)" class="par-1" v-if="tab1">
      {{ par.body }}
    </p>
    <p v-for="par in text.slice(1,2)" class="par-2" v-if="tab2">
      {{ par.body }}
    </p>
    <p v-for="par in text.slice(2,3)" class="par-3" v-if="tab3">
      {{ par.body }}
    </p>
  </div>
</template>

<script>
import { FETCH_DATA } from './store/actions/data';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false
    }
  },
  methods: {
    loadTab: function(tab) {
      if (tab === 1) {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
      } else if (tab === 2) {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
      } else if (tab === 3) {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        console.log(this.text);
      }
    }
  },
  computed: {
    ...mapGetters([
      'text'
    ])
  },
  created: function() {
    this.$store.dispatch(FETCH_DATA);
  }
}
</script>

<style scoped>
.tabs {
  background-color: #24252a;
  color: #fff;
  flex-basis: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  height: 40px;
}

li {
  padding: 10px;
  text-decoration: underline;
  color: #7befb2;
  font-weight: bold;
  cursor: pointer;
}

.active {
  color: #6bb9f0;
}

li:not(:first-child) {
  margin-left: 10px;
}

p {
  padding: 0 350px;
  font-size: 18px;
}

.par-1 {
  color: #eee;
}

.par-2 {
  color: #90c695;
}

.par-3 {
  color: #65c6bb;
}
</style>
