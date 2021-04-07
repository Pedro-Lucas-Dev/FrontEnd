import React from "react";
import { Row, Col } from "reactstrap";
import { CardPokemon } from "../CardPokemon";
import { EmptyList } from "../EmptyList";

export const CardList = ({
  data,
  onDeleteClick,
  onBtnEmptyListClick,
  toggle,
  modal,
}) => {
  if (!data.length) {
    return <EmptyList onBtnEmptyListClick={onBtnEmptyListClick} />;
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
              modal={modal}
            />
          </Col>
        );
      })}
    </Row>
  );
};
