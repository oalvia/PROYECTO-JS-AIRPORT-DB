
const fetchPokemonList = async (offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
  const res = await fetch(url)
    .catch((error) => {
      const pokedex = document.getElementById('pokedex');
      const pokemonHTMLString =
        `<div class="flex-item">
          <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
        </div>`;
      pokedex.innerHTML = pokemonHTMLString;
    }
  );

  const { results: data } = await res.json();

  const getIdFromUrl = (url) => url.split('/').slice(-2).join('');

  const pokemonList = data.map(({ name, url }) => ({ name, id: getIdFromUrl(url) }));

  return pokemonList;
};

export { fetchPokemonList };
