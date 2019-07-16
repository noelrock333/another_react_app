import React from 'react';
// import PropTypes from 'prop-types';

class Users extends React.Component {
  // static propTypes = {
  //   age: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired
  // }

  render() {
    const { match: { params } } = this.props;
    return (
      <div className="person-container">
        <h2>User section</h2>
        <span>
          { `${params.name}: ${params.age} years` }
        </span>
      </div>
    )
  }

}

export default Users;
