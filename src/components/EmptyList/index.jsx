import React from "react";
import { Button } from "reactstrap";

export const EmptyList = ({ onBtnEmptyListClick }) => {
  return (
    <div>
      <h3> Não há nenhum pokemon!</h3> <br />
      <p> Vamos cadastrar? </p>
      <Button color="primary" onClick={() => onBtnEmptyListClick()}>
        {" "}
        Cadastrar{" "}
      </Button>
    </div>
  );
};
