import React, { createContext, useState } from "react";
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pagina, setPagina] = useState([]);

  const isPaginaVisitada = async (id) => {
    const visitada = await pagina.find((page) => page.pagina === id);
    return !!visitada;
  };

  const traerPokemonesDesdePagina = async (id) => {
    const data = await pagina.find((page) => page.pagina === id);
    return data.pokemones;
  };

  const guardarPagina = (numero, pokemones) => {
    const datos = {
      pagina: numero,
      pokemones: pokemones,
    };
    setPagina([...pagina, datos]);
  };

  const contextValue = {
    guardarPagina,
    isPaginaVisitada,
    traerPokemonesDesdePagina,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
export default PokemonContext;
