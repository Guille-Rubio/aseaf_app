import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const ChatBotFlow = () => {

  const input = useRef();
  const chatBottom = useRef();
  const [questionNum, setQuestionNum] = useState(0);
  const [answers, setAnswers] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    consentGDPR: "",
    ageRange: "",
    userType: ""
  });

  const [conversation, setConversation] = useState(
    [{
      sender: "bot",
      message: '¡Hola!'
    },
    {
      sender: "bot",
      message: "'Soy Nexus! Estoy aqui para ayudarte y resolver tus dudas e inquietudes'"
    },
    {
      sender: "bot",
      message: 'Para poder ofrecerte una información más personalizada necesitamos crearte un perfil mediante un correo electrónico y una contraseña donde poder compartir contigo esa información.'
    }]
  )



  useEffect(() => {
    //carga siguiente pregunta del bot
    setConversation([...conversation, { sender: "bot", message: botQuestions[questionNum] }])
    // eslint-disable-next-line
  }, [questionNum])


  const inputKeys = ["name", "surname", "email", "password", "consentGDPR", "ageRange", "userType"]

  const botQuestions =
    ['Para poder conocerte mejor, ¿Cómo quieres que te llame?',
      `Es un placer conocerte, ${answers.name} ¿Me dirías cómo te apellidas?`,
      '¿Nos podrías facilitar tu correo electrónico?',
      '¿Qué contraseña quieres poner ? Crea una contraseña que tenga más de x caracteres',
      '¿Aceptas que al final de las preguntas te enviemos información personalizada según tus inquitudes con los datos que nos has facilitado?',
      `¡Genial ${answers.name}!
      Para poder hacer mejor mi labor, me gustaría conocer  más sobre ti, empezando por tu edad:`,
      `¿Ya eres familia de acogida o estás interesado?`,
      'Dime; ¿Cuáles son tus principales inquietudes sobre el acogimiento familiar?'
    ]


  /* const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({behavior:"smooth"})
  } */

  const saveAnswer = (answerKey, answerValue) => {
    setAnswers({ ...answers, [answerKey]: answerValue })
    setConversation([...conversation, { sender: "user", message: answerValue }])
    setQuestionNum(questionNum + 1);
  }

  const handleMessage = (message) => {
    const userAnswer = input.current.value;
    saveAnswer(inputKeys[questionNum], userAnswer)
    input.current.value = ""
  }

  const handleButtonQuestion = (event) => {
    const userAnswer = event.target.value
    saveAnswer(inputKeys[questionNum], userAnswer)
  }


  return <div className="chatbot">

    {conversation.map(msg => <div className={msg.sender} key={uuidv4()}><p>{msg.message}</p></div>)}


    {questionNum === 4 ?
      <>
        <button className="chat-button" value="No" onClick={handleButtonQuestion}>No</button>
        <button className="chat-button" value="Si" onClick={handleButtonQuestion}>Si</button>
      </> : ""}

    {questionNum === 5 ?
      <>
        <button className="chat-button" value="25-30" onClick={handleButtonQuestion}>25-30</button>
        <button className="chat-button" value="31-40" onClick={handleButtonQuestion}>31-40</button>
        <button className="chat-button" value="41-50" onClick={handleButtonQuestion}>41-50</button>
        <button className="chat-button" value="51-60" onClick={handleButtonQuestion}>51-60</button>
        <button className="chat-button" value="+60" onClick={handleButtonQuestion}>+60</button>
      </> : ""}

    {questionNum === 6 ?
      <>
        <button className="chat-button" value="familia" onClick={handleButtonQuestion}>Soy familia de acogida</button>
        <button className="chat-button" value="interesado" onClick={handleButtonQuestion}>Estoy interesado</button>
      </> : ""}

    {questionNum === 7 ? <textarea rows="5"></textarea> : ""}

    {questionNum !== 4 &&
      questionNum !== 5 &&
      questionNum !== 7

      ? <>
        <input type="text" id="input" name="input" ref={input} />
        <button onClick={handleMessage}>Enviar</button>
      </> : ""}

    <div ref={chatBottom}></div>
   {/*  {scrollToBottom()} */}
  </div>;


};

export default ChatBotFlow;
