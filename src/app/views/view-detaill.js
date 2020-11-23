import { fetchPokemonDetail } from '../api/call-to-api-detail';
import { PokemonDetailClass } from '../models/pokemon';

const displayPokemonDetail = async () => {
  const pokedex = document.getElementById('pokedex');
  const pokeName = await document.getElementById('pokeName').value;
  const pokemon = await fetchPokemonDetail(pokeName);
  const pokemonDetail = new PokemonDetailClass(
    pokemon.id,
    pokemon.name,
    pokemon.image,
    pokemon.type,
    pokemon.attack
  );
  const pokeAttacks = pokemonDetail.getPokemonAttacks();
  let attacksStrings = '';

  for (let i = 0; i < pokeAttacks.abilities.length; i++) {
    attacksStrings += `<div>${i} - ${pokeAttacks.abilities[i].ability.name}</div>`;
  }

  const pokemonHTMLString =
    `<li class="flex-item">
      <img class="flex-item-image" src="${pokemonDetail.getPokemonImg()}"/>
      <h2 class="flex-item-title">${pokemonDetail.getPokemonId()}. ${pokemonDetail.getPokemonName()}</h2>
      <p class="flex-item-subtitle">Type: ${pokemonDetail.getPokemonType()}</p>
      <h2 class="flex-item-title"> Attacks:</h2>
      <p class="flex-item-subtitle">${attacksStrings}</p>
    </li>`;
  pokedex.innerHTML = pokemonHTMLString;
};

export { displayPokemonDetail };
