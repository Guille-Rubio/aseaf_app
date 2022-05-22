import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ChatBotFlow from "./ChatBotFlow/ChatBotFlow";

const Footer = () => {
  return (
    <footer>
      {/* <ChatBotFlow /> */}
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
          <div className="footer__bottom--social--icons"><FaFacebookF size={20}/><FaTwitter size={20} /><FaInstagram size={20} /><FaYoutube size={20} /> </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
