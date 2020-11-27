import { PokemonUtil } from '../utils/pokemon.util';

const fetchPokemonDetail = async (pokeName) => {
  PokemonUtil.togglePokeLoader();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
  const res = await fetch(url)
    .catch((error) => PokemonUtil.handleError(error)
  );

  if (res.status !== 200) {
    PokemonUtil.handleError({ message: 'Error'});
    PokemonUtil.togglePokeLoader();
    return Promise.reject();
  }

  const data = await res.json();

  let pokemon = {
    name: data.name,
    image: data.sprites['front_default'],
    type: data.types.map((type) => type.type.name).join(", "),
    id: data.id,
    attack: data,
    baseExperience: data.base_experience,
  };
  PokemonUtil.togglePokeLoader();

  return pokemon;
};

export { fetchPokemonDetail };
