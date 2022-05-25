import React, { useRef, useEffect } from "react";

const BotChatMessage = (props) => {
  console.log(props)

  const chatBottom = useRef();

  useEffect(() => {
    chatBottom.current.scrollIntoView({ behavior: "smooth" })
  })

  

  
  return <div className="bot">
    <p>{props.message}</p>


    <div ref={chatBottom}></div>
  </div>;

}

export default BotChatMessage;
