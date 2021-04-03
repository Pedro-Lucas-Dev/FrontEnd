import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Sejá Bem Vindo</h1>
      <h3> Este site é para aprendizado! </h3>
      <p> - Está é a página inicial! </p>
      <p>
        {" "}
        1-Quando clica{" "}
        <img
          src="https://data.apkhere.com/03/com.satsumasoftware.pokedex.pro/4.1.2/icon.png!s"
          width={"45"}
        />{" "}
        vocé volta para página inicial!
      </p>

      <p>
        2- Quando clica em Consultar irá mostrar todos os pokemons que foram
        Cadastrados.
      </p>
      <p>
        3- Quando clicar em Cadastrar irá exibir um formulario para o Cadastro
        do pokemon.
      </p>
      <p></p>
    </div>
  );
};
export default Home;
