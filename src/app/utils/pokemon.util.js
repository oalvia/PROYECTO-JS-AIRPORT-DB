
class PokemonUtil {
  constructor() { }
  static pokemonLevel(level) {
    let levelPokemon;
    if (typeof level === 'number') {
      if (level <= 50) {
        levelPokemon = 'Basic';
      } else if (50 < level < 100) {
        levelPokemon = 'Medium';
      } else if (level >= 100) {
        levelPokemon = 'Advance';
      } else {
        levelPokemon = 'Not Exist';
      }
    } else {
      console.error('API error');
    }
    return levelPokemon;
  }

  static togglePokeLoader() {
    document.getElementById('loader').classList.toggle('is-hidden');
  }
}

export { PokemonUtil };
