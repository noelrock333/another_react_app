import React from 'react';
import './pokemons.css'
import Item from './Item';
import { connect } from 'react-redux';
import getPokemons from '../../redux/actions/getPokemons';

const Pokemons = ({ pokemons, getPokemons }) => {
  return (
    <div className="pokemons">
      {pokemons.map(item => <Item key={item.name} name={item.name}/>)}
      <button onClick={getPokemons}>Get pokemons</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
