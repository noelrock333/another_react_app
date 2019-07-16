import pokemonsData from '../pokemonsData';

function reducer(currentState = [], action) {
  switch(action.type) {
    case 'GET_POKEMONS':
      return [...pokemonsData];
    default:
      return currentState;
  }
}

export default reducer;
