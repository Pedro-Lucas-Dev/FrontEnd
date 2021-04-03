import React, { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
export const Form = ({ title, onFormChange }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
    color: "",
  });
  useEffect(() => {
    onFormChange(form);
  }, [form]);

  const onChangeInput = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <h1>{title}</h1>
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
      <InputGroup>
        <InputGroupAddon addonType="prepend">Tipo</InputGroupAddon>
        <Input
          name="type"
          value={form.type}
          onChange={(e) => onChangeInput(e.target.name, e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">Cor</InputGroupAddon>
        <Input
          name="color"
          value={form.color}
          onChange={(e) => onChangeInput(e.target.name, e.target.value)}
        />
      </InputGroup>
    </div>
  );
};
