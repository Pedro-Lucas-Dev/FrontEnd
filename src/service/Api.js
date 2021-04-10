import axios from "axios";
import { isFormValid } from "./validation";

const urlProd = "https://back-end-pokemon.herokuapp.com";
const urlDev = "http://localhost:3001";

const url = urlProd;

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

const updatePokemon = (pokemon, updateFormData) => {
  const errors = isFormValid(updateFormData);

  if (errors.length) {
    return Promise.reject(errors);
  }
  pokemon.evolutions.push(updateFormData);
  const data = {
    pokemon: {
      __id: pokemon._id,
      name: pokemon.name,
      types: pokemon.types,
      color: pokemon.color,
      evolutions: pokemon.evolutions,
    },
  };
  return axios.put(`${url}/api/pokemon/`, data);
};

export { getAllPokemons, insertPokemon, deletPokemon, updatePokemon };
