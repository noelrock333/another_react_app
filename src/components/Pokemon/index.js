import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
  state = {
    name: '',
    abilities: [],
    imageUrl: '',
    isRequesting: true
  }

  componentDidMount() {
    const { match: { params: { name } }} = this.props;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        const { name, abilities, sprites } = response.data;
        console.log(abilities)
        this.setState({
          name,
          abilities,
          imageUrl: sprites.front_default,
          isRequesting: false
        })
      })
  }  

  modifyPokemon = () => {
    this.setState({
      name: ''
    })
  }

  render() {
    const { name, abilities, imageUrl } = this.state;
    return (
      <div className="pokemon">
        <h3>Pokemon: {name}</h3>
        <img src={imageUrl} alt=""/>
        <label htmlFor="">Abilities</label>
        <ul>
          {abilities.map(({ ability, slot }) => <li key={slot}>{ability.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Pokemon;