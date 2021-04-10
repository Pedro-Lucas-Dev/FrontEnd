import React, { useContext } from "react";
import { PokemonProvider } from "../context/context";

export const usePokemon = () => {
  const context = useContext(PokemonProvider);
  return context;
};
