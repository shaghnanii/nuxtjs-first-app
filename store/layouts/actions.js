// these are asynchronous
import axios from "axios";
const headers = { Accept: "application/json" }
export default {
  async setCurrentValue(state) {
    const data = await axios.get('https://icanhazdadjoke.com/', { headers });
    console.log('here')
    console.log('data', data)
    const response = await data;
    console.log('axios repsonse ', response.data.joke)
    state.commit('setCurrentValue', response.data.joke) // this will do the change in mutations
  }
}
