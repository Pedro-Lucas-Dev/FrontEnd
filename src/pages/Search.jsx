import React, { useEffect, useState } from "react";
import { getAllPokemons, deletPokemon } from "../service/Api";
import { CardList } from "../components/CardList";
import { Spinner } from "reactstrap";

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getAllPokemons().then((response) => {
      setLoading(false);
      setPokemons(response.data);
    });
  };

  const onDeleteClick = (pokemon) => {
    deletPokemon(pokemon).then(() => {
      refresh();
    });
  };
  const onBtnEmptyListClick = () => {
    window.redirect("/insert");
  };

  return (
    <div>
      {!loading ? (
        <CardList
          data={pokemons}
          onDeleteClick={onDeleteClick}
          onBtnEmptyListClick={onBtnEmptyListClick}
        />
      ) : (
        <Spinner className="" color="primary" />
      )}
    </div>
  );
};

export default Search;
