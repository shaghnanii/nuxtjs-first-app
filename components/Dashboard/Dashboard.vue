<template>
  <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
    <center>
      <h4>{{ joke }}</h4>
    </center>
    <p>Do you want another joke ?</p>
    <a-button type="primary" @click="addJoke">Yes</a-button>
    <a-button type="disabled">No</a-button>

    <hr>
    <a-button type="primary" @click="testing">Testing</a-button>
    <h5>{{ extra }}</h5>

    <hr>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="Note">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender">
        <a-select
          v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            male
          </a-select-option>
          <a-select-option value="female">
            female
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <hr>
    <section class="report">
      <h1 class="report__heading">Login a user</h1>
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

    <hr>
    <section class="report">
      <h1 class="report__heading">Register a user</h1>
      <form class="report__form">
        <div class="input__container">
          <label for="email" class="input__label">Email</label>
          <input
            type="text"
            name="register_email"
            id="register_email"
            v-model="register_credential.email"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="register_name" class="input__label">Name</label>
          <input
            type="text"
            name="register_name"
            id="register_name"
            v-model="register_credential.name"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="register_address" class="input__label">Address</label>
          <input
            type="text"
            name="register_address"
            id="register_address"
            v-model="register_credential.address"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="register_gender" class="input__label">Gender</label>
          <input
            type="text"
            name="register_gender"
            id="register_gender"
            v-model="register_credential.gender"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="register_salary" class="input__label">Salary</label>
          <input
            type="text"
            name="register_salary"
            id="register_salary"
            v-model="register_credential.salary"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="register_phone_number" class="input__label">Phone Number</label>
          <input
            type="text"
            name="register_phone_number"
            id="register_phone_number"
            v-model="register_credential.phone_number"
            class="input__field"
            required
          />
        </div>
        <div class="input__container">
          <label for="password" class="input__label">Password</label>
          <input
            type="text"
            name="register_password"
            id="register_password"
            v-model="register_credential.password"
            required
            class="input__field"
          />
        </div>
        <input type="submit" value="Register" class="input__button" @click.prevent="register_user" />
        <p class="loading__indicator" v-if="loading_register">Please wait....</p>
      </form>
    </section>

    <hr>

    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item
        label="Fail"
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <a-input id="error" placeholder="unavailable choice" />
      </a-form-item>
      <a-form-item label="Warning" validate-status="warning">
        <a-input id="warning" placeholder="Warning" />
      </a-form-item>
      <a-form-item
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <a-input id="validating" placeholder="I'm the content is being validated" />
      </a-form-item>
      <a-form-item label="Success" has-feedback validate-status="success">
        <a-input id="success" placeholder="I'm the content" />
      </a-form-item>
      <a-form-item label="Warning" has-feedback validate-status="warning">
        <a-input id="warning2" placeholder="Warning" />
      </a-form-item>
      <a-form-item
        label="Fail"
        has-feedback
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <a-input id="error2" placeholder="unavailable choice" />
      </a-form-item>
      <a-form-item label="Success" has-feedback validate-status="success">
        <a-date-picker style="width: 100%" />
      </a-form-item>
      <a-form-item label="Warning" has-feedback validate-status="warning">
        <a-time-picker style="width: 100%" />
      </a-form-item>
      <a-form-item label="Error" has-feedback validate-status="error">
        <a-select default-value="1">
          <a-select-option value="1">
            Option 1
          </a-select-option>
          <a-select-option value="2">
            Option 2
          </a-select-option>
          <a-select-option value="3">
            Option 3
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <a-cascader :default-value="['1']" :options="[]" />
      </a-form-item>
      <a-form-item label="inline" style="margin-bottom:0;">
        <a-form-item
          validate-status="error"
          help="Please select the correct date"
          :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
        >
          <a-date-picker style="width: 100%" />
        </a-form-item>
        <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
        <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
          <a-date-picker style="width: 100%" />
        </a-form-item>
      </a-form-item>
      <a-form-item label="Success" has-feedback validate-status="success">
        <a-input-number style="width: 100%" />
      </a-form-item>
      <a-form-item label="Success" has-feedback validate-status="success">
        <a-input allow-clear placeholder="with allowClear" />
      </a-form-item>

      <a-form-item label="Warning" has-feedback validate-status="warning">
        <a-input-password placeholder="with input password" />
      </a-form-item>

      <a-form-item label="Error" has-feedback validate-status="error">
        <a-input-password allow-clear placeholder="with input password and allowClear" />
      </a-form-item>
    </a-form>
    <br>
    <hr>
    <br>
  </a-layout-content>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex';
// import { Button } from 'antd';
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
    ...mapActions("layouts", ["register"]),
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
    },
    register_user() {
      console.log('register clicked ')
      // this.register_credential;
      // const formData = new FormData();
      // formData.append("email", data.email);
      // formData.append("password", data.password);
      this.loading_register = true;
      try {
        console.log('try')
        this.register(this.register_credential);
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
        this.loading_register = false;
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
      },
      register_credential: {
        name: null,
        email: null,
        address: null,
        gender: null,
        salary: null,
        phone_number: null,
        password: null,
      },

      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
}
</script>
