import { fetchPokemonList } from '../api/call-to-api-list';

let offset = 0;

const displayPokemonList = (offset = 0) => {
  const pokedex = document.getElementById('pokedex');
  const pokemon = fetchPokemonList(offset);

  pokemon.then((pokemons) => {
    pokemons.forEach((pokemon) => {
      const li = document.createElement('li');
      li.id = pokemon.id;
      li.classList.add('flex-item');
      const p = document.createElement('p');
      p.innerHTML = `Nº ${pokemon.id}`;
      li.appendChild(p);
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = pokemon.name;
      li.appendChild(h3);
      pokedex.appendChild(li);
    });
  });
};

const handleScroll = () => {
  if (window.scrollY == document.querySelector('body').scrollHeight - window.innerHeight) {
    if (document.getElementById('pokedex').childElementCount > 1 && offset < 150) {
      offset += 30;
      displayPokemonList(offset);
    }
  }
}

export { displayPokemonList, handleScroll };
