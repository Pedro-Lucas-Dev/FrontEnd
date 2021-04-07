import React from "react";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export const CardPokemon = ({
  pokemon,
  onDeleteClick,
  mode,
  toggle,
  modal,
}) => {
  return (
    <Card
      style={{
        backgroundColor: pokemon.color,
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
            <Row>
              {pokemon.types &&
                Object.keys(pokemon.types).map((type) => {
                  console.log(pokemon.types[type].check);
                  if (pokemon.types[type].check) {
                    return (
                      <Col lg={4}>
                        <Badge color={pokemon.types[type].color}>
                          {pokemon.types[type].name}
                        </Badge>
                      </Col>
                    );
                  }
                  return null;
                })}
            </Row>
          </CardText>
        </CardTitle>

        <hr />
      </CardBody>

      {mode !== "preview" ? (
        <>
          <Button color="danger" onClick={toggle}>
            {" "}
            Apagar{" "}
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
              <b>Deseja realmente apagar o Pokémon?</b>
              <br />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => onDeleteClick(pokemon)}>
                Sim
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      ) : null}
    </Card>
  );
};
