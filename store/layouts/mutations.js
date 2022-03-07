// Mutations update the state (Synchronous)
export default {
  setCurrentValue(state, payload){
    state.currentValue = payload;
    state.extraValue = "Clicked on Add New Joke"
  },
  setExtraValue(state, payload){
    state.extraValue = payload;
  }
}
