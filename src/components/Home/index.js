import React from 'react';

class Home extends React.Component {
  state = {
    apellido: 'Soft',
    edad: this.props.edad
  }

  miFunction = () => {
    console.log(this.state.edad);
    this.setState({
      edad: this.state.edad + 1
    });
  }

  item = () => {
    return <span>Example</span>
  }

  render() {
    return (
      <div className="home-page">
        <h3>{this.state.apellido}</h3>
        <h3>{this.state.edad}</h3> {/* dasdasdas */}
        {this.props.children}
        <div>
          {this.item()}
        </div>
        <button onClick={this.miFunction}>Crecer de edad</button>
      </div>
    )
  }
}

export default Home;
