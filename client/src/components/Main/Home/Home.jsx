import React from "react";
import {Link} from 'react-router-dom';
import family_top from '../../../assets/img/family_top.png';
import family_mid from '../../../assets/img/family_mid.png';
import chatIcon from '../../../assets/img/chat.png';
import peopleIcon from '../../../assets/img/people.png';
import infoIcon from '../../../assets/img/info.png';
import kids from '../../../assets/img/kids.png';

const Home = () => {
  return (
    <>
      <img className='img__top' src={family_top} alt='family' />
      <div className='text__intro' >
        <p className="text__intro--bold">¡Hola! <br />Somos un enlace entre las familias y la asociación. Te ayudamos con las principales dudas e incertidumbres sobre el acogimiento familiar.</p>
        <p className="text__intro--normal">Conecta con nuestro chat inteligente para recibir un contenido de información personalizado</p>
        <Link to=""><button id='nexus1' className="text__intro--button">Accede al chat</button></Link>
      </div>

      <div className="text__forum">
        <img src={family_mid} alt='family' />
        <p className="text__forum--question">¿Tienes alguna duda o inquietud sobre el proceso de acogida?</p>
        <p className="text__forum--answer">No te preocupes, es normal. Estamos aquí para ayudarte. </p>
        <p className="text__forum--answer">A través del foro puedes compartir tu experiencia, comentar inquitudes o preguntar dudas con el resto de familias que puedan estar pasando o ya hayan pasado por tus mismos pensamientos.</p>
        <Link to="/forum"><button id="foro" className="text__forum--button">Accede al foro</button></Link>
      </div>

      <div className="text__offer">
        <div className="text__offer--question">
          <p className="text__offer--question--text">¿Qué ofrecemos?</p>
          <p className="text__offer--question--answer">Una ayuda personalizada de las inquietudes  sobre el acogimiento familiar.</p>
        </div>
      </div>
      <div className="offer__items">
        <div className="offer__items--item">
          <img src={chatIcon} alt='icono chat' />
          <p className="offer__items--item--title">Chatbot</p>
          <p className="offer__items--item--content">Charla de tus inquietudes para aliviarlas a través de una conversación con nuestro chatbot.</p>
        </div>
        <div className="offer__items--item">
          <img src={infoIcon} alt='icono info' />
          <p className="offer__items--item--title">Información personalizada</p>
          <p className="offer__items--item--content">Contenido personalizado según tus inquietudes.</p>
        </div>
        <div className="offer__items--item">
          <img src={peopleIcon} alt='icono gente' />
          <p className="offer__items--item--title">Comparte tus inquietudes</p>
          <p className="offer__items--item--content">Comparte con otras familias reales tu experiencia, dudas o inquietudes</p>
        </div>
      </div>

      <div className="text__info">
        <p className="text__info--title">¿Quieres más información?</p>
        <p className="text__info--subtitle">Contacta con ASEAF</p>
        <div className="text__info--container">
          <div className="text__info--container--text">
            <p>SOMOS ASEAF<br />ASOCIACIÓN ESTATAL DE ACOGIMIENTO FAMILIAR</p>
          </div>
          <img className="text__info--container--img" src={kids} alt='kids' />
        </div>
        <p className="text__info--text">ASEAF es la Asociación Estatal de Acogimiento Familiar y está integrada por 21 asociaciones de distintas Comunidades Autónomas formadas, en su mayoría, por familias acogedoras a las que además prestan apoyo de forma directa.</p>
        <button id='info' className="text__info--button">+ Información</button>
      </div>
    </>
  );
};

export default Home;
