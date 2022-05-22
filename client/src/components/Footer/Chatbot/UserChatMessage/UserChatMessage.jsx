import React, { useRef, useEffect } from "react";

const UserChatMessage = (props) => {

    const chatBottom = useRef();

    useEffect(() => {
        chatBottom.current.scrollIntoView({ behavior: "smooth" })
    })

    return <div className="user">
        <p>{props.message}</p>
        <div ref={chatBottom}></div>

    </div>;

}

export default UserChatMessage;
