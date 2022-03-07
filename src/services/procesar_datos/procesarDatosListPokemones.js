export const procesarDatosListPokemones = (p) => {
    let pokemons = p.map((p) => {
      let poke = [];
      let array = p.url.split("/");
      poke.id = array[6];
      poke.name = p.name;
      poke.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`;
      return poke;
    });
    // console.log(pokemons);
    return pokemons;
  };