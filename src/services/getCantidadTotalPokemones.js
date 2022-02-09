import { pokemonApi } from "../api/pokemonApi";

export const getCantidadTotalPokemones = async () => {
  let res = await pokemonApi.get("/pokemon?limit=1500").catch((e) => {
    Error(e);
  });
  return res.data.count;
};
