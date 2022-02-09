import React from "react";
import { useNavigate } from "react-router-dom";
import '../estilos/estilo.css'
const Pokemon = ({ id, nombre, imagen }) => {
  const history = useNavigate();

  return (
    <div className="card card-pokemon"  onClick={()=>{history(`/details/${id}`)}}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p className="card-text">
          {nombre}
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
