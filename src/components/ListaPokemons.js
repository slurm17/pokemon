import React, { useEffect, useState, useContext } from "react";
import { getPokemones } from "../services/getPokemones";
import Pokemon from "./Pokemon";
import "../estilos/estilo.css";
import { useParams } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";

const ListaPokemons = ({ cantPokemonesAMostrar }) => {
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { isPaginaVisitada, guardarPagina, traerPokemonesDesdePagina } =
    useContext(PokemonContext);

  useEffect(() => {
    setIsLoading(true);
    isPaginaVisitada(id).then((visitada) => {
      if (visitada) {
        traerPokemonesDesdePagina(id).then((pok) => {
          setPokemones(pok);
          setIsLoading(false);
        });
      } else {
        //Envía offset y limit
        getPokemones(
          (parseInt(id) - 1) * cantPokemonesAMostrar,
          cantPokemonesAMostrar
        ).then((pok) => {
          setPokemones(pok);
          guardarPagina(id, pok);
          setIsLoading(false);
        });
      }
    });
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
