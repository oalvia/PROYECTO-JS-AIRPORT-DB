import { displayPokemonList, handleScroll } from './views/view-list';
import { displayPokemonDetail } from './views/view-detaill';
import { displayPokemonRandom } from './views/view-random';
import './styles/styles.scss';
import 'bootstrap';

function addListeners() {
  document.getElementById('allPokemons').addEventListener('click', displayPokemonList);
  document.getElementById('pokeFinder').addEventListener('click', displayPokemonDetail);
  document.getElementById('randomPokemon').addEventListener('click', displayPokemonRandom);
  window.onscroll = handleScroll;
}

window.onload = function () {
  addListeners();
};
