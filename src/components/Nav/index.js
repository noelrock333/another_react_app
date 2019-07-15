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
        <button onClick={() => this._onButtonClick('Noel', 29)}>Click me 1</button>
        <button onClick={() => this._onButtonClick('Myrka', 21)}>Click me 2</button>
        <button onClick={() => this._onButtonClick('Juventus', 30)}>Click me 3</button>
        <button onClick={this.props.history.goBack}>Back</button>
        <button onClick={this.props.history.goForward}>Fordward</button>

      </nav>
    );
  }
}

export default withRouter(Nav);
