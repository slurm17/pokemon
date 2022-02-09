import { pokemonApi } from "../api/pokemonApi"
import { procesarDatosPokemon } from "./procesarDatosPokemon";

export const getPokemon = async (id) =>  {
    let res = await pokemonApi.get(
        `/pokemon/${id}`
    ).catch((e) => {
        Error(e)
      });
    return procesarDatosPokemon(res.data)
}