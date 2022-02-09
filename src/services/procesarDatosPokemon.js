import axios from "axios";

export const procesarDatosPokemon = (p) => {
  let urls = [];
  let poke = [];
  poke.nombreHabilidad = [];
  poke.descripcionHabilidad = [];
  poke.nombre = p.name
  p.abilities.map((m) => {
    urls.push(m.ability.url);
  });
  urls.map((ur) => {
    axios.get(ur).then((link) => {
      poke.nombreHabilidad.push(link.data.names[5].name);
      poke.descripcionHabilidad.push(link.data.effect_entries[0].effect);
    }).catch((e) => {
      Error(e)
    });
  });
  poke.img = p.sprites.other.dream_world.front_default;
  return poke;
};
