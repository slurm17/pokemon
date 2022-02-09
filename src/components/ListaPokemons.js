import React, { useEffect, useState } from "react";
import { getPokemones } from "../services/getPokemones";
import Pokemon from "./Pokemon";
import "../estilos/estilo.css";
import {useParams } from "react-router-dom";

const ListaPokemons = ({cantPokemonesAMostrar }) => {
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    //Envía offset y limit
    setIsLoading(true);
    getPokemones((parseInt(id) - 1) * cantPokemonesAMostrar, cantPokemonesAMostrar).then(
      (p) => {
        setPokemones(p);
        setIsLoading(false);
      }
    );
  }, [id]);

  return (
    <div>
      {!isLoading ? (
        <div className="lista-pokemones">
          {pokemones.map((p) => (
            <Pokemon
              key={p.id}
              id={p.id}
              nombre={p.name}
              imagen={p.image}
            ></Pokemon>
          ))}
        </div>
      ) : (
        <div className="centrado">
          <img
            className="loading-lista-pokemones"
            alt="Cargando..."
            src="https://acegif.com/wp-content/uploads/loading-25.gif"
          ></img>
        </div>
      )}
    </div>
  );
};

export default ListaPokemons;
