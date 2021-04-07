import React, { useState } from "react";
import { Form } from "../components/Form/index";
import { Container, Col, Button, Row, Alert } from "reactstrap";
import { insertPokemon } from "../service/Api";
import { CardPokemon } from "../components/CardPokemon";

const Insert = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onDismiss = () => setError(false);
  const onSuccess = () => setSuccess(false);
  const [formAction, setFormAction] = useState("insert");

  const postPokemon = () => {
    setFormAction("insert");
    insertPokemon(form)
      .then((response) => {
        setSuccess(true);
        setFormAction("reset");
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
      <Alert isOpen={success} toggle={onSuccess} color="success">
        Pokemon Salvado
      </Alert>
      <Row style={{ paddingTop: "200px", justifyContent: "center" }}>
        <Col
          xs="12"
          sm="12"
          md="8"
          lg="4"
          style={{
            backgroundColor: "#99d9f0",
            alignItems: "center",
          }}
        >
          <Form
            onFormChange={(form) => setForm(form)}
            actionForm={formAction}
          />
          <Button onClick={() => postPokemon()} color="success" size="md" block>
            Cadastrar
          </Button>
          <Button
            onClick={() => window.redirect("/")}
            color="secondary"
            size="md"
            block
          >
            Cancelar
          </Button>
        </Col>
        {form.id ? <CardPokemon pokemon={form} mode={"preview"} /> : null}
      </Row>
    </Container>
  );
};

export default Insert;
