import React from "react";
import ChatBotFlow from "./ChatBotFlow/ChatBotFlow";

const Footer = () => {
  return (
    <footer>
      {/* <ChatBotFlow /> */}
      <div className="">
        <div>
          <p>CONÓCENOS</p>
          <ul>
            <li>Transparencia</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div>
          <p>LEGAL</p>
          <ul>
            <li>Términos y condiciones</li>
            <li>Política y privacdad</li>
            <li>Política de cookies</li>
            <li>Aviso legal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
