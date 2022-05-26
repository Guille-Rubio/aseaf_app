import React, { /* useState, */ useRef, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Chatbot from "react-chatbot-kit";
import config from "../../utils/chatbotConfig/config";
import MessageParser from '../../utils/chatbotConfig/MessageParser';
import ActionProvider from "../../utils/chatbotConfig/ActionProvider";


const Footer = (props) => {

  const chatRef = useRef();

  useEffect(() => {
    props.value.setChatRef(chatRef.current) 
    console.log(props.value.displayChat)
    // eslint-disable-next-line
  }, [])

  const handleChatDisplay = () => {
    props.value.setDisplayChat(!props.value.displayChat)
  }

  return (
    <footer id="footer">
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


      {/* <button id='nexus2' className="chat-button" onClick={handleChatDisplay}>Habla con Nexus</button> */}
      <div ref={chatRef}></div>
      {props.value.displayChat ?
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
