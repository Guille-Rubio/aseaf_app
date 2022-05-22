import React, { Component } from "react";
import userAvatar from '../../../../assets/img/userAvatar.svg';

class UserAvatar extends Component {
  render() {
    return <img className="user-avatar" src={userAvatar} alt="nexus"/>;
  }
}

export default UserAvatar;