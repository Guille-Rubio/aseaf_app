import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return <nav className="nav">
    <ul className="nav__navlist">
      <li>Quienes somos</li>
      <li>Ayuda personalizada</li>
      <li>ASEAF</li>
      <li><Link to="/forum" className="nav__hyperlink" onClick={props.data}>Foro</Link></li>
    </ul>
  </nav>;
};

export default Nav;
