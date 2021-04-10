import React from "react";
import { Button } from "reactstrap";

export const EmptyList = ({ onBtnEmptyListClick, term }) => {
  return (
    <div>
      {term ? (
        <h3> {`Não há nenhum Pokémon com esse nome: ${term}`} </h3>
      ) : (
        <h3> Não há nenhum pokemon! </h3>
      )}
      <p>
        {" "}
        Vamos cadastrar? &nbsp;
        <Button color="primary" onClick={() => onBtnEmptyListClick()}>
          Cadastrar{" "}
        </Button>
      </p>
    </div>
  );
};
