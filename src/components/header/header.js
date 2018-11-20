import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <div className="header d-flex">
      <h3><a href="#">Swapi DB</a></h3>
      <ul className="d-flex">
        <li><a href="#">People</a></li>
        <li><a href="#">Starships</a></li>
        <li><a href="#">Planets</a></li>
      </ul>
    </div>
  )
};

export default Header;
