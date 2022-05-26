import React, { useEffect, useRef } from "react";
import customHelpView from '../../../assets/img/customHelpView.png'


const CustomHelp = () => {

  const helpTop = useRef();

  useEffect(() => {
    helpTop.current.scrollIntoView({ behavior: "smooth" })
  })

  return <div className="custom-help-view">
    <div ref={helpTop}></div>
    <img  className="custom-help-img" src={customHelpView} alt="custom help view" />
  </div>;
};

export default CustomHelp;
