import React, { useEffect, useState } from "react";
import { getAllPokemons, deletPokemon, updatePokemon } from "../service/Api";
import { CardList } from "../components/CardList";
import {
  Spinner,
  Input,
  Row,
  Col,
  Container,
  FormGroup,
  Label,
} from "reactstrap";
import { usePokemon } from "../hooks/usePokemon";

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsWithFilter, setPokemonsWithFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  const {
    contextForm,
    setContextModalConfirm,
    contextModalConfirm,
    modalEvolution,
    setModalEvolution,
  } = usePokemon();

  const toggle = () => setContextModalConfirm(!contextModalConfirm);

  useEffect(() => {
    refresh();
  }, []);
  useEffect(() => {
    if (term) {
      filterPokemon();
    }
  }, [term]);

  const refresh = () => {
    getAllPokemons().then((response) => {
      setLoading(false);
      setPokemons(response.data);
    });
  };

  const onDeleteClick = (pokemon) => {
    deletPokemon(pokemon).then(() => {
      refresh();
      toggle();
    });
  };

  const onAddEvlution = (pokemon) => {
    updatePokemon(pokemon, contextForm)
      .then((response) => {
        console.log(contextForm);
        setModalEvolution(!modalEvolution);
      })
      .catch((error) => {
        console.log(error, "deu errado");
      });
  };

  const onBtnEmptyListClick = () => {
    window.redirect("/insert");
  };

  const filterPokemon = () => {
    setPokemonsWithFilter(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Row>
        <Col>
          <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="search"
              name="search"
              id="SearchInput"
              placeholder="Barra de pesquisa"
              onChange={(e) => setTerm(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Container className={"themed-container"}>
        {!loading ? (
          <CardList
            data={term ? pokemonsWithFilter : pokemons}
            onDeleteClick={onDeleteClick}
            onBtnEmptyListClick={onBtnEmptyListClick}
            toggle={toggle}
            term={term}
            onAddEvlution={onAddEvlution}
          />
        ) : (
          <Spinner className="" color="primary" />
        )}
      </Container>
    </div>
  );
};

export default Search;
