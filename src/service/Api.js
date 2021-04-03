import axios from "axios";

const url = "https://back-end-pokemon.herokuapp.com";

const getAllPokemons = () => {
  return axios(`${url}/api/pokemon`);
};

const insertPokemon = (form) => {
  return axios.post(`${url}/api/pokemon`, {
    pokemon: {
      ...form,
      evolutions: [],
    },
  });
};

const deletPokemon = (pokemon) => {
  return axios.delete(`${url}/api/pokemon/${pokemon._id}`);
};

export { getAllPokemons, insertPokemon, deletPokemon };
