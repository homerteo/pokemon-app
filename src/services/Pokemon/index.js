import axios from "axios";
import configService from "../../config/config.js";

const pokemonService = {};

pokemonService.getPokemonList = (name = "") => {
  return axios
    .get(`${configService.apiUrl}/${name}`)
    .then((res) => {
      return res;
    })
    .catch((error) => error);
};

export default pokemonService;
