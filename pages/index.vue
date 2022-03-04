<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh">
<!--    <h1>{{isCollapsed}}</h1>-->
    <Sidebar/>
    <a-layout>
      <Header/>
      <Dashboard :joke="joke"/>
    </a-layout>
  </a-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Sidebar from "~/components/Sidebars/Sidebar";
import Header from "~/components/Headers/Header";
import Dashboard from "~/components/Dashboard/Dashboard";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  components: {Dashboard, Sidebar, Header},

  methods: {
    ...mapGetters('layouts', ["getCurrentValue"])
  },
  computed: {
    joke() {
      return this.getCurrentValue()
    }
  },
};

</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
