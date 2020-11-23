import { fetchPokemonDetail } from '../api/call-to-api-detail'
import { PokemonRandomizer } from '../models/pokemon';
import { PokemonUtil } from '../utils/pokemon.util';

const displayPokemonRandom = async () => {
  const pokedex = document.getElementById('pokedex');
  const pokeId = Math.round(Math.random() * (150 - 1) + 1);
  const pokemon = await fetchPokemonDetail(pokeId);
  const myPokemonClass = new PokemonRandomizer(
    pokemon.id,
    pokemon.name,
    pokemon.image,
    pokemon.type,
    pokemon.baseExperience
  );
  const level = PokemonUtil.pokemonLevel(pokemon.baseExperience);

  const pokemonHTMLString =
    `<li class="flex-item">
      <img class="flex-item-image" src="${ myPokemonClass.getPokemonImg() }"/>
      <h2 class="flex-item-title">${ myPokemonClass.getPokemonId()}. ${myPokemonClass.getPokemonName() }</h2>
      <p class="flex-item-subtitle">Type: ${ myPokemonClass.getPokemonType() }</p>
      <p class="flex-item-subtitle">PokeExperience: ${ level }</p>
    </li>`;
  pokedex.innerHTML = pokemonHTMLString;
};

export { displayPokemonRandom }