import React, { createContext, useState } from "react";
import { getPokemon } from "../services/getPokemon";
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pagina, setPagina] = useState([]);
  const [listaDetallePokemones, setListaDetallePokemones] = useState([]);

  const traerDetallesPokemon = async (id) => {
    const data = await listaDetallePokemones.find((p) => p.id == id);
    return data;
  };

  const isPaginaVisitada = async (id) => {
    const visitada = await pagina.find((page) => page.pagina === id);
    return !!visitada;
  };

  const traerPokemonesDesdePagina = async (id) => {
    const data = await pagina.find((page) => page.pagina === id);
    return data.pokemones;
  };

  const guardarPokemonDetalles = (pokms) => {
    let array = listaDetallePokemones;
    pokms.forEach((p) => {
      getPokemon(p.id).then((pok) => {
        array.push(pok);
      });
    });
    setListaDetallePokemones(array);
  };

  const guardarPagina = (numero, pokemones) => {
    const datos = {
      pagina: numero,
      pokemones: pokemones,
    };
    guardarPokemonDetalles(datos.pokemones);
    setPagina([...pagina, datos]);
  };

  const contextValue = {
    guardarPagina,
    isPaginaVisitada,
    traerPokemonesDesdePagina,
    traerDetallesPokemon,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
export default PokemonContext;
