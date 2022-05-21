import React from "react";

const BotChatMessage = (props) => {
  console.log(props)

  return <div className="bot">
    <p>{props.message}</p>
  </div>;

}

export default BotChatMessage;
