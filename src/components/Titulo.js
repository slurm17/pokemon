import React from "react";
import imgTitulo from "../imagenes/pokemon.png";
import "../estilos/estilo.css";

const Titulo = () => {
  return (
    <div className="text-center">
      <img
        alt="POKEMON"
        className="img-thumbnail img-titulo"
        src={imgTitulo}
      ></img>
    </div>
  );
};

export default Titulo;
