import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import Nav from '../Header/Nav/Nav';
import crossMenuIcon from '../../assets/img/crossMenuIcon.svg';
import burgerMenuIcon from '../../assets/img/burgerMenuIcon.svg';


const Header = () => {

  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenuDisplay = () => {
    setDisplayMenu(!displayMenu);
  }


  return (
    <header className="header">
      <div className="header__menu-logo-and-button-container">
        <div className="header__menu-and-logo-container">
          {displayMenu ? <img src={crossMenuIcon} alt="close menu icon" onClick={handleMenuDisplay} />  : <img src={burgerMenuIcon} alt="burger menu" onClick={handleMenuDisplay} />}
          <Link to="/"><img src={logo} alt='logo enlace' /></Link>
        </div>
        <button className="text__intro--button">¿Charlamos?</button>
      </div>
      {displayMenu ? <Nav /> : ""}
    </header>
  );
};

export default Header;
