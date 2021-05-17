<template src="./PokemonList.html"></template>

<script>
import pokemonService from "@/services/Pokemon";
import NoDataInPokelist from "@/components/NoDataInPokelist/NoDataInPokelist";
import PokeList from "@/components/PokeList/PokeList";
import PokeCard from "@/components/PokeCard/PokeCard";

export default {
  name: "PokemonList",
  data() {
    return {
      pokemonData: [],
      pokemonsToShow: [],
      serachPokeword: "",
      openModal: false,
      pokecardName: "",
      loading: false,
    };
  },
  components: { NoDataInPokelist, PokeList, PokeCard },
  async beforeCreate() {
    const data = await pokemonService.getPokemonList();
    this.pokemonData = data.data.results;
    this.pokemonsToShow = data.data.results;
  },
  created() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 5000);
  },
  methods: {
    openPokeModal(name) {
      this.openModal = true;
      this.pokecardName = name;
    },
    closeModal() {
      this.openModal = false;
      this.pokecardName = "";
    },
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
