import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {

  _onButtonClick = (userName, userAge) => {
    console.log(this.props)
    this.props.history.push(`/users/${userName}/age/${userAge}`)
  }

  render() {
    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pokemons">Pokemons</Link>
        <button onClick={() => this._onButtonClick('Noel', 29)}>Noel user</button>
        <button onClick={() => this._onButtonClick('Myrka', 21)}>Myrka user</button>
        <button onClick={() => this._onButtonClick('Juventus', 30)}>Juventus user</button>
        <button onClick={this.props.history.goBack}>Back</button>
        <button onClick={this.props.history.goForward}>Fordward</button>
      </nav>
    );
  }
}

export default withRouter(Nav);
