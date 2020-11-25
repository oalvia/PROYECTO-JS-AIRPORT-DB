import { fetchPokemonList } from '../api/call-to-api-list';

let offset = 0;

const displayPokemonList = (event, offset = 0) => {
  const pokedex = document.getElementById('pokedex');
  if (offset === 0) {
    pokedex.innerHTML = ''; // clean content
  }
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

const handleScroll = (event) => {
  if (Math.ceil(window.scrollY) == Math.ceil(document.querySelector('body').scrollHeight - window.innerHeight)) {
    offset += 30;
    if (document.getElementById('pokedex').childElementCount > 1 && offset < 150) {
      displayPokemonList(event, offset);
    }
  }
}

export { displayPokemonList, handleScroll };
