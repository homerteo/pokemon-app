<template src="./PokeCard.html"></template>

<script>
import pokemonService from "@/services/Pokemon";
import arrayToString from "@/filters/arrayToString.js";

export default {
  name: "PokeCard",
  data() {
    return {
      pokemonData: null,
    };
  },
  props: {
    openModal: { type: Boolean, default: false },
    pokecardName: { type: String },
  },
  filters: { arrayToString },
  async beforeUpdate() {
    console.log("beforeUpdate", this.pokecardName);
    const data = await pokemonService.getPokemonList(this.pokecardName);
    this.pokemonData = data.data;
  },
  methods: {
    onCancel() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped src="./PokeCard.scss"></style>
