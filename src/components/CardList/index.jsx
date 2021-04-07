import React from "react";
import { Row, Col } from "reactstrap";
import { CardPokemon } from "../CardPokemon";
import { EmptyList } from "../EmptyList";

export const CardList = ({ data, onDeleteClick, onBtnEmptyListClick }) => {
  if (!data.length) {
    return <EmptyList onBtnEmptyListClick={onBtnEmptyListClick} />;
  }
  return (
    <Row>
      {data.map((pokemon) => {
        return (
          <Col sm={"12"} md={"4"} lg={"3"} key={pokemon.id}>
            <CardPokemon pokemon={pokemon} onDeleteClick={onDeleteClick} />
          </Col>
        );
      })}
    </Row>
  );
};
