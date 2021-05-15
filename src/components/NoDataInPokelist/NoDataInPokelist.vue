<template src="./NoDataInPokelist.html"></template>

<script>
export default {
  name: "NoDataInPokelist",
  methods: {
    redirectTo() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped src="./NoDataInPokelist.scss"></style>
