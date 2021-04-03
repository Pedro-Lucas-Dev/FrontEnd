import React, { useState } from "react";
import { Form } from "../components/Form/index";
import { Container, Col, Button, Row, Alert } from "reactstrap";
import { insertPokemon } from "../service/Api";

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
      <Alert isOpen={error} toggle={onDismiss} color="danger">
        Não foi possivel Cadastrar
      </Alert>
      <Row fluid="true" className={"text-center justify-content-center"}>
        <Col lg="4" style={{ backgroundColor: "#99d9f0" }}>
          <Form title={"Formulario"} onFormChange={(form) => setForm(form)} />
          <Button onClick={() => postPokemon()}>Cadastrar</Button>
          <Button onClick={() => window.redirect("/")}>Cancelar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Insert;
