// grab infromation form here to display in our app
export default {
  getCurrentValue: state => state.currentValue,
  // getExtraValue: state => state.extraValue
  getExtraValue (state) {
    return state.extraValue;
  }
}
