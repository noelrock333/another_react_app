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
      <div>
        {params.name}
        {params.age}
      </div>
    )
  }

}

export default Users;
