import React, { useRef, useEffect } from "react";

const BotChatChildAge = (props) => {
  console.log("_________ PROPS ", props)
  const chatBottom = useRef();
  
  const numOfChildren = props.message
  const numOfSelectors = []
  const children = {}

  for (let i = 0; i < numOfChildren; i++) {
    numOfSelectors.push(i)
  }

  useEffect(() => {
    chatBottom.current.scrollIntoView({ behavior: "smooth" })
  })

  const handleAge = (event) => {
    children[`age${event.target.id}`] = event.target.value;
  }

  const handleResponse = () => {
    props.actionProvider.handleChildrenAges(children)
  }


  return <div className="bot">

    <p>¿Qué edad tienen tus hijos?</p>

    {numOfSelectors.map((child, i) => <>
      <select id={i} onChange={handleAge}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
      </select>
    </>)}

    <button onClick={handleResponse}>Confirmar</button>

    <div ref={chatBottom}></div>
  </div>;

}

export default BotChatChildAge;

