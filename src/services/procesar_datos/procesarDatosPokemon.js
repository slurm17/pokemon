import axios from "axios";
const habilidad = {nombre: "", descripcion : ""}
const data = {
  nombre : "",
  imagen : "",
  habilidades: [
  ]
}

export const procesarDatosPokemon = (p) => {
  let urls = [];
  let poke = [];
  poke.nombreHabilidad = [];
  poke.descripcionHabilidad = [];
  poke.id = p.id
  poke.nombre = p.name
  data.nombre = p.name
  p.abilities.forEach((m) => {
    urls.push(m.ability.url);
  });
  urls.forEach((ur) => {
    axios.get(ur).then((link) => {
      poke.nombreHabilidad.push(link.data.names[5].name);
      poke.descripcionHabilidad.push(link.data.effect_entries[0].effect);
      habilidad.nombre = link.data.names[5].name
      habilidad.descripcion = link.data.effect_entries[0].effect
      data.habilidades.push(habilidad)
    }).catch((e) => {
      Error(e)
    });
  });
  data.imagen = p.sprites.other.dream_world.front_default;
  poke.img = p.sprites.other.dream_world.front_default;
  // console.log(poke)
  // console.log(data)
  return poke;
};
