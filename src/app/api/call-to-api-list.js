import { PokemonUtil } from '../utils/pokemon.util';

const fetchPokemonList = async (offset) => {
  PokemonUtil.togglePokeLoader();
  const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
  const res = await fetch(url)
    .catch((error) => PokemonUtil.handleError(error)
  );

  if (res.status !== 200) {
    PokemonUtil.handleError({ message: 'Error'});
    PokemonUtil.togglePokeLoader();
    return Promise.reject();
  }

  const { results: data } = await res.json();

  const getIdFromUrl = (url) => url.split('/').slice(-2).join('');

  const pokemonList = data.map(({ name, url }) => ({ name, id: getIdFromUrl(url) }));
  PokemonUtil.togglePokeLoader();

  return pokemonList;
};

export { fetchPokemonList };
