import React from "react";
import userAvatar from '../../../../assets/img/userAvatar.svg';


const UserChatMessage =(props)=> {
  
    return <div className="user">
       <p>{props.message}</p>
       <img src={userAvatar} alt="user avatar"/>

    </div>;
 
}

export default UserChatMessage;
