import React, { useState } from "react";
import { Form } from "../components/Form/index";
import { Container, Col, Button, Row, Alert } from "reactstrap";
import { insertPokemon } from "../service/Api";
import { CardPokemon } from "../components/CardPokemon";

const Insert = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);
  const onDismiss = () => setError(false);

  const postPokemon = () => {
    insertPokemon(form)
      .then((response) => {
        window.redirect("/search");
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <Container>
      {form.id ? <CardPokemon pokemon={form} mode={"preview"} /> : null}
      <Alert isOpen={error} toggle={onDismiss} color="danger">
        Não foi possivel Cadastrar
      </Alert>
      <Row fluid="true" className={"text-center justify-content-center"}>
        <Col lg="4" style={{ backgroundColor: "#99d9f0" }}>
          <Form onFormChange={(form) => setForm(form)} />
          <Button onClick={() => postPokemon()} color="success" size="lg" block>
            Cadastrar
          </Button>
          <Button
            onClick={() => window.redirect("/")}
            color="secondary"
            size="lg"
            block
          >
            Cancelar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Insert;
