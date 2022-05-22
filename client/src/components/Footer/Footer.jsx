import React, { useState} from "react";
import Chatbot from "react-chatbot-kit";
import config from "../../utils/chatbotConfig/config";
import MessageParser from '../../utils/chatbotConfig/MessageParser';
import ActionProvider from "../../utils/chatbotConfig/ActionProvider";

const Footer = () => {

 
  const [displayChat, setDisplayChat] = useState(true)
  


  const handleChatDisplay = () => {
    setDisplayChat(!displayChat)
  }




  return <footer>
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


  </footer>;
};

export default Footer;
