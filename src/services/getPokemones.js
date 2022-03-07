import { pokemonApi } from "../api/pokemonApi";
import { procesarDatosListPokemones } from "./procesar_datos/procesarDatosListPokemones";

export const getPokemones = async (offset, limit) => {
  let res = await pokemonApi.get(
    `/pokemon?offset=${offset}&limit=${limit}`
  ).catch((e) => {
    Error(e)
  });
  // console.log(res.data.results)
  return procesarDatosListPokemones(res.data.results);
};