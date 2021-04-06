import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
} from "reactstrap";

export const CardPokemon = ({ pokemon, onDeleteClick, mode }) => {
  return (
    <Card
      style={{
        backgroundColor: pokemon.color,
        width: "200px",
      }}
    >
      <CardImg
        top
        width={"100%"}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
        alt="imagem"
      />
      <CardBody style={{ height: "120px" }}>
        <CardTitle tag="h6">
          {" "}
          {pokemon.name} N°{pokemon.id}{" "}
          <CardText>
            <Badge color="success">{pokemon.type}</Badge>
          </CardText>
        </CardTitle>

        <hr />
      </CardBody>

      {mode !== "preview" ? (
        <Button color="danger" onClick={() => onDeleteClick(pokemon)}>
          {" "}
          Apagar{" "}
        </Button>
      ) : null}
    </Card>
  );
};
