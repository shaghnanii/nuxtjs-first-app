<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <center>
      <h4>{{ joke }}</h4>
    </center>
    <p>Do you want another joke ?</p>
    <Button class="btn" @click="addJoke">Yes</Button>
    <Button class="btn">No</Button>
  </a-layout-content>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  props: {
    joke: {
      type: String,
      default: null
    }
  },
  methods: {
    // clean method
    ...mapActions({ addJoke: "layouts/setCurrentValue" }),

    // ...mapActions('layouts', ["setCurrentValue"]),
    // addJoke(){
    //   this.setCurrentValue()
    // }
  },
}
</script>
