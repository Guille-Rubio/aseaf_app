import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../../utils/chatbotConfig/config";
import MessageParser from '../../utils/chatbotConfig/MessageParser';
import ActionProvider from "../../utils/chatbotConfig/ActionProvider";

const Footer = () => {
  return <footer>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />

  </footer>;
};

export default Footer;
