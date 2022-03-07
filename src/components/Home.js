import React from "react";
import ListaPokemons from "./ListaPokemons";
import Paginado from "./Paginado";
import Titulo from "./Titulo";
import { PokemonProvider } from "../context/PokemonContext";

const Home = () => {
  //se puede setear cualquier numero
  const cantPokemonesAMostrar = 5;

  return (
    <>
      <Titulo />
      <PokemonProvider>
        <ListaPokemons cantPokemonesAMostrar={cantPokemonesAMostrar} />
      </PokemonProvider>
      <Paginado cantPokemonesAMostrar={cantPokemonesAMostrar} />
    </>
  );
};

export default Home;
