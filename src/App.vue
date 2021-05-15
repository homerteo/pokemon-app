<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "dashboard";

export default {
  name: "app",
  computed: {
    layout() {
      return default_layout + "-layout";
    },
  },
};
</script>

<style lang="scss"></style>
