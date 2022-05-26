import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return <nav className="nav">
    <ul className="nav__navlist">
      <li>Quienes somos</li>
      <li><Link to="/customhelp" className="nav__hyperlink">Ayuda personalizada</Link></li>
      <li><Link to={{ pathname: "https://www.aseaf.org/" }} target="_blank">ASEAF</Link></li>
      <li><Link to="/forum" className="nav__hyperlink" onClick={props.data}>Foro</Link></li>
    </ul>
  </nav>;
};

export default Nav;
