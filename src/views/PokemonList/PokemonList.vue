<template src="./PokemonList.html"></template>

<script>
import { mapGetters } from "vuex";
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
      favorites: [],
      favoritesToShow: [],
      serachPokeword: "",
      openModal: false,
      pokecardName: "",
      loading: false,
      favoriteView: false,
    };
  },
  components: { NoDataInPokelist, PokeList, PokeCard },
  async beforeCreate() {
    const data = await pokemonService.getPokemonList();
    this.pokemonData = data.data.results;
    this.pokemonsToShow = data.data.results;
    this.$nextTick();
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
    showAll() {
      this.favoriteView = false;
      this.serachPokeword = "";
    },
    showFavorites() {
      this.favoriteView = true;
      this.serachPokeword = "";
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
      const favPokemons = this.favorites.filter((pokemon) => {
        if (
          pokemon.name.toUpperCase().includes(this.serachPokeword.toUpperCase())
        ) {
          return pokemon;
        }
      });
      this.favoritesToShow = favPokemons;
    },
    serachPokeword: function (val) {
      const pokemons = this.pokemonData.filter((pokemon) => {
        if (pokemon.name.toUpperCase().includes(val.toUpperCase())) {
          return pokemon;
        }
      });
      const favPokemons = this.favorites.filter((pokemon) => {
        if (pokemon.name.toUpperCase().includes(val.toUpperCase())) {
          return pokemon;
        }
      });
      this.pokemonsToShow = pokemons;
      this.favoritesToShow = favPokemons;
    },
  },
};
</script>

<style lang="scss" scoped src="./PokemonList"></style>
