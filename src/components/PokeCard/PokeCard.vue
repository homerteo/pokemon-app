<template src="./PokeCard.html"></template>

<script>
import { mapGetters } from "vuex";
import pokemonService from "@/services/Pokemon";
import arrayToString from "@/filters/arrayToString.js";

export default {
  name: "PokeCard",
  data() {
    return {
      pokemonData: {
        types: [],
      },
      favorites: [],
    };
  },
  props: {
    openModal: { type: Boolean, default: false },
    pokecardName: { type: String },
  },
  filters: { arrayToString },
  async beforeUpdate() {
    const data = await pokemonService.getPokemonList(this.pokecardName);
    if (data.data) {
      this.pokemonData = data.data;
    } else {
      this.pokemonData = { types: [] };
    }
  },
  methods: {
    onCancel() {
      this.$emit("closeModal");
    },
    copyToClipboard(name) {
      const copyElement = document.createElement("input");
      copyElement.className = "copyElement";
      document.body.appendChild(copyElement);
      copyElement.value = name;
      copyElement.select();
      document.execCommand("copy");
      document.body.removeChild(copyElement);
      this.$buefy.toast.open({
        duration: 5000,
        position: "is-top",
        message: `${name} was shared successfully `,
        type: "is-success",
      });
    },
  },
  computed: {
    ...mapGetters({
      favoritesList: "getFavorites",
    }),
    isFavorite() {
      return this.favorites.some((f) => f.name === this.pokemonData.name);
    },
  },
  watch: {
    favoritesList: function (value) {
      this.favorites = value;
    },
  },
};
</script>

<style lang="scss" scoped src="./PokeCard.scss"></style>
