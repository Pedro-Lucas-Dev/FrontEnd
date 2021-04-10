import React from "react";
import { Row, Col } from "reactstrap";
import { CardPokemon } from "../CardPokemon";
import { EmptyList } from "../EmptyList";

export const CardList = ({
  data,
  onDeleteClick,
  onBtnEmptyListClick,
  toggle,
  term,
  toggleAddEvolutions,
  modalEvolution,
  onAddEvlution,
}) => {
  if (!data.length) {
    return <EmptyList onBtnEmptyListClick={onBtnEmptyListClick} term={term} />;
  }
  return (
    <Row>
      {data.map((pokemon) => {
        return (
          <Col xs="12" sm="4" md="4" lg="3" key={pokemon.id}>
            <CardPokemon
              pokemon={pokemon}
              onDeleteClick={onDeleteClick}
              toggle={toggle}
              toggleAddEvolutions={() => toggleAddEvolutions()}
              modalEvolution={modalEvolution}
              onAddEvlution={onAddEvlution}
            />
          </Col>
        );
      })}
    </Row>
  );
};
