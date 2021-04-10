import React, { useState } from "react";
import { PokemonProvider } from "./context";

const ContextPokemonProvider = ({ children }) => {
  const [contextForm, setContextForm] = useState({});
  const [contextModalConfirm, setContextModalConfirm] = useState(false);
  const [modalEvolution, setModalEvolution] = useState(false);

  return (
    <PokemonProvider.Provider
      value={{
        contextForm,
        setContextForm,
        contextModalConfirm,
        setContextModalConfirm,
        modalEvolution,
        setModalEvolution,
      }}
    >
      {children}
    </PokemonProvider.Provider>
  );
};
export default ContextPokemonProvider;
