import { FETCH_DATA } from '../actions/data';
import { NEW_USER } from '../actions/data';
import axios from 'axios';

const state = { text: [] };

const getters = {
  text: state => state.text
};

const actions = {
  [FETCH_DATA]: ({commit, dispatch}) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      commit(FETCH_DATA, res);
    })
  },
  [NEW_USER]: ({dispatch}, user) => {
    console.log('-----NEW USER ');
    axios.post('https://reqres.in/api/users/', {
      user
    })
    .then(res => {
      console.log('-----SUCCESS');
      console.log(res);
    })
  }
}

const mutations = {
  [FETCH_DATA]: (state, res) => {
    state.text = res.data.slice(0, 3);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
