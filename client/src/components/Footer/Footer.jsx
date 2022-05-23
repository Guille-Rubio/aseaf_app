
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Chatbot from "react-chatbot-kit";
import config from "../../utils/chatbotConfig/config";
import MessageParser from '../../utils/chatbotConfig/MessageParser';
import ActionProvider from "../../utils/chatbotConfig/ActionProvider";
import APIRequest from "../../utils/chatbotConfig/widgets/APIRequest";


const Footer = () => {

  const [displayChat, setDisplayChat] = useState(true);

  const handleChatDisplay = () => {
    setDisplayChat(!displayChat)
  }

  return (
    <footer>
      <div className="footer__top">
        <div className="footer__top--knowus">
          <p>CONÓCENOS</p>
          <ul>
            <li>Transparencia</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div className="footer__top--legal">
          <p>LEGAL</p>
          <ul>
            <li>Términos y condiciones</li>
            <li>Política y privacdad</li>
            <li>Política de cookies</li>
            <li>Aviso legal</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div>
          <p>©️ 2022 ASEAF</p>
          <hr />
        </div>
        <div className="footer__bottom--social">
          <p>¿Nos ayudas a difundir el acogimiento?</p>
          <div className="footer__bottom--social--icons"><FaFacebookF size={20} /><FaTwitter size={20} /><FaInstagram size={20} /><FaYoutube size={20} /> </div>
        </div>
      </div>
      <APIRequest/>

      <button className="chat-button" onClick={handleChatDisplay}>Habla con Nexus</button>
      {displayChat ?
        <>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />

        </>
        : ""}
    </footer>
  );
}
export default Footer;
