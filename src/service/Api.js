import axios from "axios";

const url = "http://localhost:3001";

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
