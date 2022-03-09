export const procesarDatosListPokemones = (p) => {
  let pokemons = p.map((p) => {
    let array = p.url.split("/");
    let datos = {
      id: array[6],
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${array[6]}.png`,
    };
    return datos;
  });
  // console.log(pokemons);
  return pokemons;
};
// let poke = [];
// poke.id = array[6];
// poke.name = p.name;
// poke.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
