<template src="./Home.html"></template>

<script>
export default {
  name: "Home",
  methods: {
    redirectTo() {
      this.$router.push({ path: "/pokelist" });
    },
  },
};
</script>

<style lang="scss" scoped src="./Home.scss"></style>
