import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../estilos/estilo.css";
import PokemonContext from "../context/PokemonContext";

const PokemonDetalles = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { traerDetallesPokemon } = useContext(PokemonContext);

  useEffect(() => {
    traerDetallesPokemon(id).then((p) => {
      setPokemon(p);
      setIsLoading(false)
    });
  }, []);

  return (
    <div className="centrado container-pokemon-detalles">
      {!isLoading ? (
        <div className="pokemon-detalles">
          <div className="primera-columna">
            <div className="nombre">{pokemon.nombre}</div>
            <div className="centrado">
              <img className="" src={pokemon.img} />
            </div>
          </div>
          <div className="segunda-columna">
            <div className="titulo">HABILIDADES</div>
            {pokemon.nombreHabilidad.map((nh, i) => (
              <div key={i} className="">
                <p className="nombre">{nh}</p>
                <p>{pokemon.descripcionHabilidad[i]}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container-img">
          <img
            alt="Cargando..."
            className=""
            src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"
          ></img>
        </div>
      )}
    </div>
  );
};

export default PokemonDetalles;
