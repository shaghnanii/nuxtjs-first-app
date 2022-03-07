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

    <hr>
    <section class="report">
      <h1 class="report__heading">Report an Incident</h1>
      <form class="report__form">
        <div class="input__container">
          <label for="email" class="input__label">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            v-model="credential.email"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="password" class="input__label">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            v-model="credential.password"
            required
            class="input__field"
          />
        </div>
        <input type="submit" value="LOGIN" class="input__button" @click.prevent="login_user" />
        <p class="loading__indicator" v-if="loading">Please wait....</p>
      </form>
    </section>
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
    ...mapActions("layouts", ["login"]),
    ...mapMutations('layouts', ['setExtraValue']),
    ...mapGetters('layouts', ['getExtraValue']),

    testing() {
      this.setExtraValue('Clicked on Testing button')
    },

    login_user() {
      console.log('clikced... ')
      const data = this.credential;
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      this.loading = true;

      console.log(formData)
      try {
        console.log('try')
        this.login(this.credential);
        // await this.$store.dispatch("reportIncident", formData);
        // this.$notify({
        //   group: "success",
        //   title: "Success",
        //   text: "Incident reported successfully!"
        // });
        // this.loading = false;
        // this.$router.push("/my-reports");
      } catch (error) {
        console.log(error)
        this.loading = false;
        // this.$notify({
        //   group: "error",
        //   title: "Error!",
        //   text: error.response
        //     ? error.response.data.error
        //     : "Sorry an error occured, check your internet"
        // });
      }
    }
  },

  data() {
    return {
      loading: false,
      credential: {
        type: "red-flag",
        email: "",
        password: "",
      }
    };
  },
}
</script>
