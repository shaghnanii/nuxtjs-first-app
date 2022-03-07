// these are asynchronous
// import axios from "axios";
import api from '../../routes/api'

export default {
  async setCurrentValue(state) {
    const data = api.joke('/');
    console.log('here')
    console.log('data', data)
    const response = await data;
    console.log('axios response ', response.data)
    state.commit('setCurrentValue', response.data.joke) // this will do the change in mutations
  },

  async login({ commit }, payload) {
    console.log('state data', payload)
    const data = await api.store('/login', payload);
    console.log(data)
  },

  async register({ commit }, payload) {
    console.log('state data', payload)
    const data = await api.store('/register', payload);
    console.log(data)
  }
}
