<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
  </a-layout-header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
}
</script>
