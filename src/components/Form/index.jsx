import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  CustomInput,
  Label,
  FormGroup,
  Col,
  Row,
} from "reactstrap";
export const Form = ({
  title = "Cadastro do Pokemon",
  onFormChange,
  actionForm,
}) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    types: {
      water: {
        name: "Water",
        check: false,
        color: "primary",
      },
      fire: {
        name: "Fire",
        check: false,
        color: "danger",
      },
      grass: {
        name: "Grass",
        check: false,
        color: "success",
      },
    },
    color: "",
  });

  useEffect(() => {
    onFormChange && onFormChange(form);
  }, [form]);

  useEffect(() => {
    if (actionForm === "reset") {
      onResetForm();
    }
  }, [actionForm]);

  const onResetForm = () => {
    setForm({
      id: "",
      name: "",
      types: {
        water: {
          check: false,
        },
        fire: {
          check: false,
        },
        grass: {
          check: false,
        },
      },
      color: "",
    });
  };

  const onChangeInput = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const setTypes = (name, value) => {
    const typesInState = form.types;
    typesInState[name].check = value;
    setForm({ ...form, types: typesInState });
  };
  return (
    <div>
      <h3>{title}</h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">Número</InputGroupAddon>
        <Input
          name="id"
          value={form.id}
          onChange={(e) => onChangeInput(e.target.name, e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">Nome</InputGroupAddon>
        <Input
          name="name"
          value={form.name}
          onChange={(e) => onChangeInput(e.target.name, e.target.value)}
        />
      </InputGroup>
      <Label for="exampleCheckbox">Tipo: </Label>

      <Row className={"offset-lg-1"}>
        <Col lg="4">
          <Label check>
            <Input
              name="fire"
              value={form.types.fire.check}
              onChange={(e) => setTypes(e.target.name, !form.types.fire.check)}
              type="checkbox"
            />
            Fire
          </Label>
        </Col>
        <Col lg="4">
          <Label check>
            <Input
              name="grass"
              value={form.types.grass.check}
              onChange={(e) => setTypes(e.target.name, !form.types.grass.check)}
              type="checkbox"
            />
            Grass
          </Label>
        </Col>
        <Col lg="4">
          <Label check>
            <Input
              name="water"
              value={form.types.water.check}
              onChange={(e) => setTypes(e.target.name, !form.types.water.check)}
              type="checkbox"
            />
            Water
          </Label>
        </Col>
      </Row>

      <div>
        <Label for="exampleCheckbox">Cor:</Label>
        <Row>
          <Col>
            <CustomInput
              type="radio"
              name="color"
              label="Verde"
              onChange={(e) => onChangeInput(e.target.name, e.target.id)}
              id="green"
              inline
            />
          </Col>
          <Col>
            <CustomInput
              type="radio"
              name="color"
              label="Vermelho"
              onChange={(e) => onChangeInput(e.target.name, e.target.id)}
              id="red"
              inline
            />
          </Col>
          <Col>
            <CustomInput
              type="radio"
              name="color"
              label="Azul"
              onChange={(e) => onChangeInput(e.target.name, e.target.id)}
              id="blue"
              inline
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
