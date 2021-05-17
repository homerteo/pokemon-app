<template src="./PokeCard.html"></template>

<script>
import pokemonService from "@/services/Pokemon";
import arrayToString from "@/filters/arrayToString.js";

export default {
  name: "PokeCard",
  data() {
    return {
      pokemonData: {
        types: [],
      },
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
  },
};
</script>

<style lang="scss" scoped src="./PokeCard.scss"></style>
