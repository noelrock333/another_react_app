import { createStore, combineReducers } from 'redux';
import pokemons from './reducers/pokemons';

let reducers = combineReducers({
  pokemons: pokemons,
});

let store = createStore(reducers);

export default store;
