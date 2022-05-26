import React, { useRef } from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {

 
  
/*   const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if(!props.show)
    return null;
 */


  return <nav className="nav" /* ref={ref} */>
    <ul className="nav__navlist">
      <li>Quienes somos</li>
      <li>Ayuda personalizada</li>
      <li>ASEAF</li>
      <li><Link to="/forum" className="nav__hyperlink" onClick={props.data}>Foro</Link></li>
    </ul>
  </nav>;
};

export default Nav;
