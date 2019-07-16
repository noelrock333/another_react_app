import React from 'react';
import { Link } from 'react-router-dom';

const capitalizeName = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const Item = ({ name }) => {
  return (
    <div>
      <Link to={`/pokemon/${name}`}>
        <h4>{capitalizeName(name)}</h4>
      </Link>
    </div>
  )
}

export default Item;
