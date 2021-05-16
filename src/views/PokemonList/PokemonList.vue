<template src="./PokemonList.html"></template>

<script>
import pokemonService from "@/services/Pokemon";
import NoDataInPokelist from "@/components/NoDataInPokelist/NoDataInPokelist";
import PokeList from "@/components/PokeList/PokeList";

export default {
  name: "PokemonList",
  data() {
    return {
      pokemonData: [],
      pokemonsToShow: [],
      serachPokeword: "",
    };
  },
  components: { NoDataInPokelist, PokeList },
  async beforeCreate() {
    const data = await pokemonService.getPokemonList();
    this.pokemonData = data.data.results;
    this.pokemonsToShow = data.data.results;
  },
  watch: {
    serachPokeword: function (val) {
      const pokemons = this.pokemonData.filter((pokemon) => {
        if (pokemon.name.toUpperCase().includes(val.toUpperCase())) {
          return pokemon;
        }
      });
      this.pokemonsToShow = pokemons;
    },
  },
};
</script>

<style lang="scss" scoped src="./PokemonList"></style>
