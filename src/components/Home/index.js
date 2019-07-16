import React from 'react';

class Home extends React.Component {
  state = {
    apellido: 'Soft',
    edad: this.props.edad || 0
  }

  wrogUp = () => {
    // console.log(this.state.edad);
    this.setState({
      edad: this.state.edad + 1
    });
  }

  item = () => {
    return <span>This is an item example</span>
  }

  render() {
    return (
      <div className="home-page">
        <h2>Wellcome, this is the home page!</h2>
        <div>
          <h3>{this.state.apellido}</h3>
          <h3>{this.state.edad}</h3> {/* dasdasdas */}
          {this.props.children}
          <div>
            {this.item()}
          </div>
          <button onClick={this.wrogUp}>Crecer de edad</button>
        </div>
      </div>
    )
  }
}

export default Home;
