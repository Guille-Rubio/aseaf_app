import React from "react";
import family_top from '../../../assets/img/family_top.png';
import family_mid from '../../../assets/img/family_mid.png';
import chatIcon from '../../../assets/img/chat.png';
import peopleIcon from '../../../assets/img/people.png';
import infoIcon from '../../../assets/img/info.png';
import kids from '../../../assets/img/kids.png';

const Home = () => {
  return (
    <>
      <img src={family_top} alt='family' />
      <p>¡Hola!</p>
      <p>Somos un enlace entre las familias y la asociación. Te ayudamos con las principales dudas e incertidumbres sobre el acogimiento familiar.</p>
      <p>Conecta con nuestro chat inteligente para recibir un contenido de información personalizado</p>
      <button>Accede al chat</button>
      <div>
        <img src={family_mid} alt='family' />
        <p>¿Tienes alguna duda o inquietud sobre el proceso de acogida?</p>
        <p>No te preocupes, es normal. Estamos aquí para ayudarte. </p>
        <p>A través del foro puedes compartir tu experiencia, comentar inquitudes o preguntar dudas con el resto de familias que puedan estar pasando o ya hayan pasado por tus mismos pensamientos.</p>
        <button>Accede al foro</button>
      </div>
      <p>¿Qué ofrecemos?</p>
      <p>Una ayuda personalizada de las inquietudes  sobre el acogimiento familiar.</p>
      <img src={chatIcon} alt='icono chat' />
      <p>Chatbot</p>
      <p>Charla de tus inquietudes para aliviarlas a través de una conversación con nuestro chatbot.</p>
      <img src={infoIcon} alt='icono info' />
      <p>Información personalizada</p>
      <p>Contenido personalizado según tus inquietudes.</p>
      <img src={peopleIcon} alt='icono gente' />
      <p>Comparte tus inquietudes</p>
      <p>Comparte con otras familias reales tu experiencia, dudas o inquietudes</p>
      <p>¿Quieres más información?</p>
      <p>Contacta con ASEAF</p>
      <img src={kids} alt='kids' />
      <p>ASEAF es la Asociación Estatal de Acogimiento Familiar y está integrada por 21 asociaciones de distintas Comunidades Autónomas formadas, en su mayoría, por familias acogedoras a las que además prestan apoyo de forma directa.</p>
    </>
  );
};

export default Home;
