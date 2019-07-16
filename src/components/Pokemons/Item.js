import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ name }) => {
  return (
    <div>
      <Link to={`/pokemon/${name}`}>
        <h4>{name}</h4>
      </Link>
    </div>
  )
}

export default Item;