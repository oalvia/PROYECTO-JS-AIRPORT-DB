
const fetchPokemonDetail = async (pokeName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
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

  const data = await res.json();

  let pokemon = {
    name: data.name,
    image: data.sprites['front_default'],
    type: data.types.map((type) => type.type.name).join(", "),
    id: data.id,
    attack: data,
    baseExperience:data.base_experience,
  };

  return pokemon;
};

export { fetchPokemonDetail };
