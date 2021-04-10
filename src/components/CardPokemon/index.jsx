import React, { useState } from "react";
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
import { Form } from "../Form";
import { usePokemon } from "../../hooks/usePokemon";

export const CardPokemon = ({
  pokemon,
  onDeleteClick,
  mode,
  toggle,
  onAddEvlution,
}) => {
  const {
    setContextForm,
    contextModalConfirm,
    modalEvolution,
    setModalEvolution,
  } = usePokemon();

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
          <CardText tag={"div"}>
            <Row>
              {pokemon.types &&
                Object.keys(pokemon.types).map((type) => {
                  if (pokemon.types[type].check) {
                    return (
                      <Col lg={4} key={pokemon.id}>
                        <h3>
                          <Badge color={pokemon.types[type].color}>
                            {pokemon.types[type].name}
                          </Badge>
                        </h3>
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
          <div>
            <Button
              color="primary"
              block
              onClick={() => setModalEvolution(!modalEvolution)}
            >
              Cadastrar Evolução
            </Button>
            {modalEvolution && (
              <Modal
                isOpen={modalEvolution}
                toggle={() => setModalEvolution(!modalEvolution)}
              >
                <ModalBody>
                  <Form
                    title="Cadastrar Evolução"
                    onFormChange={(form) => setContextForm(form)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => onAddEvlution(pokemon)}
                  >
                    Cadastrar
                  </Button>{" "}
                  <Button
                    color="secondary"
                    onClick={() => setModalEvolution(!modalEvolution)}
                  >
                    Calcelar
                  </Button>
                </ModalFooter>
              </Modal>
            )}
          </div>
          <div>
            <Button color="danger" block onClick={toggle}>
              {" "}
              Apagar{" "}
            </Button>
            {contextModalConfirm && (
              <Modal isOpen={contextModalConfirm} toggle={toggle}>
                <ModalBody>
                  <b>Deseja realmente apagar o Pokémon?</b>
                  <br />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => onDeleteClick(pokemon)}
                  >
                    Sim
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            )}
          </div>
        </>
      ) : null}
    </Card>
  );
};
