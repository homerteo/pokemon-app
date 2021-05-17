<template src="./PokeList.html"></template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PokeList",
  props: {
    list: { type: Array },
  },
  data() {
    return {
      favorites: [],
    };
  },
  methods: {
    ...mapActions({
      addFavorite: "addFavorite",
      removeFavorite: "removeFavorite",
    }),
    isFavorite(name) {
      return this.favorites.some((f) => f.name === name);
    },
  },
  computed: {
    ...mapGetters({
      favoritesList: "getFavorites",
    }),
  },
  watch: {
    favoritesList: function (value) {
      this.favorites = value;
    },
  },
};
</script>

<style lang="scss" scoped src="./PokeList.scss"></style>
