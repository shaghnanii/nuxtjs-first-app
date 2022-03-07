<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <center>
      <h4>{{ joke }}</h4>
    </center>
    <p>Do you want another joke ?</p>
    <Button class="btn" @click="addJoke">Yes</Button>
    <Button class="btn">No</Button>

    <hr>
    <Button @click="testing">Testing</Button>
    <h5>{{ extra }}</h5>
  </a-layout-content>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  props: {
    joke: {
      type: String,
      default: null
    }
  },
  computed: {
    extra() {
      return this.getExtraValue()
    }
  },
  methods: {
    // clean method
    ...mapActions({ addJoke: "layouts/setCurrentValue" }),
    ...mapMutations('layouts', ['setExtraValue']),
    ...mapGetters('layouts', ['getExtraValue']),

    testing() {
      this.setExtraValue('Clicked on Testing button')
    }

    // ...mapActions('layouts', ["setCurrentValue"]),
    // addJoke(){
    //   this.setCurrentValue()
    // }
  },
}
</script>
