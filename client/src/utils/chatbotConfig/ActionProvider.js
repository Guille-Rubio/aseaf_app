import BotChatMessage from '../../components/Footer/Chatbot/BotChatMessage/BotChatMessage';
import UserChatMessage from '../../components/Footer/Chatbot/UserChatMessage/UserChatMessage';
import regex from '../regex';
import axios from 'axios';


const timer = 0;

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleName(message) {
    console.log(message)
    if (regex.onlyLettersAndSpace(message)) {
      const initialToUpper = message.charAt(0).toUpperCase()
      const remainder = message.slice(1)
      const capitalized = initialToUpper + remainder
      this.addToState("name", capitalized)
      const answer = this.createChatbotMessage(<BotChatMessage message={`Es un placer conocerte, ${capitalized} ¿Me dirías cómo te apellidas?`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(1);
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={`El nombre debe contener solo letras`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleSurname(message) {
    if (regex.onlyLettersAndSpace(message)) {
      this.addToState("surname", message)
      const answer = this.createChatbotMessage(<BotChatMessage message={'¿Nos podrías facilitar tu correo electrónico?'} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(2);
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={`Los apellidos deben contener solo letras`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleEmail(message) {
    if (regex.validEmail(message)) {
      this.addToState("email", message)
      const answer1 = this.createChatbotMessage(<BotChatMessage message={'¿Qué contraseña quieres poner ? '} />)
      const answer2 = this.createChatbotMessage(<BotChatMessage message={'Para mayor seguridad, crea una contraseña que tenga un mínimo de  8 caracteres, con una mínuscula, una mayúscula y un carácter especial'} />)
      setTimeout(() => { this.addToStateMessages(answer1) }, timer);
      setTimeout(() => { this.addToStateMessages(answer2) }, timer);
      this.nextQuestion(3);
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={'El email introducido no tiene el formato correcto, por favor inténtalo de nuevo'} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handlePassword(message) {
    if (regex.validPassword(message)) {
      this.addToState("password", message)
      const answer = this.createChatbotMessage(<BotChatMessage message={'¿Aceptas que al final de las preguntas te enviemos información personalizada según tus inquitudes con los datos que nos has facilitado?'} />, { widget: "ConsentGDPR" })
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(4);
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={'La contraseña proporcionada no es lo suficientemente segura, debe incluir mayúsuculas, minúsculas número y algún caracter especial y tener una longitud de al menos 8 caracteres'} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleConsentGDPR(message) {
    if (message === "Si") {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      this.addToState("consentGDPR", message)
      const answer1 = this.createChatbotMessage(<BotChatMessage message={`¡Genial!`} />)
      const answer2 = this.createChatbotMessage(<BotChatMessage message={`Para poder hacer mejor mi labor, me gustaría conocer  más sobre ti`} />)
      const answer3 = this.createChatbotMessage(<BotChatMessage message={`¿Ya eres familia de acogida o estás interesado?`} />, { widget: "UserType" })
      setTimeout(() => { this.addToStateMessages(answer1) }, timer);
      setTimeout(() => { this.addToStateMessages(answer2) }, timer);
      setTimeout(() => { this.addToStateMessages(answer3) }, timer);
      this.nextQuestion(5);

    } else if (message === "No") {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      const answer = this.createChatbotMessage(<BotChatMessage message={`Necesitamos tu consentimiento para poder darte información personalizada, ¿nos das tu permiso para enviarte información personalizada?`} />, { widget: "ConsentGDPR" })
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleUserType(message) {
    if (message === "familia" || "interesado") {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      this.addToState("userType", message);
      const answer1 = this.createChatbotMessage(<BotChatMessage message={`¡Me alegra que estés interesada!`} />);
      const answer2 = this.createChatbotMessage(<BotChatMessage message={`¿En que rango de edad te encuentras?`} />, { widget: "AgeRange" })
      setTimeout(() => { this.addToStateMessages(answer1) }, timer);
      setTimeout(() => { this.addToStateMessages(answer2) }, timer);
      this.nextQuestion(6);
    } else {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      const answer = this.createChatbotMessage(<BotChatMessage message={`Por favor confirma que tipo de usuario eres para poder darte atención personalizada`} />, { widget: "UserType" })
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleAgeQuestion(message) {
    if (message === "26-30" || message === "31-40" || message === "41-50" || message === "51-60" || message === "+60") {
      this.addToState("ageRange", message)
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      const answer = this.createChatbotMessage(<BotChatMessage message={`¡Estupendo! \nNos ayudará saber si tienes hijos`} />, { widget: "ChildrenNumber" })
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(7);
    } else {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      const answer = this.createChatbotMessage(<BotChatMessage message={`Por favor confirma tu rango de edad para poder continuar`} />, { widget: "AgeRange" })
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleChildrenNumber(message) {
    if (regex.onlyNumbers(message)) {
      this.addToState("children", message)
      if (message !== "0") {
        const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
        this.addToStateMessages(userAnswer)
        const answer = this.createChatbotMessage(<BotChatMessage message={`Que edades tienen tus hijos?`} />, { widget: "ChildrenAge" })
        setTimeout(() => { this.addToStateMessages(answer) }, timer);
        this.nextQuestion(8)
      } else {
        const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
        this.addToStateMessages(userAnswer)
        const answer = this.createChatbotMessage(<BotChatMessage message={`Gracias!
      Como los trámites varían según la comunidad autónoma, ¿me podrías facilitar tu código postal?`} />)
        setTimeout(() => { this.addToStateMessages(answer) }, timer);
        this.nextQuestion(9)
      }
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={`Por favor introduce un número válido`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }
  }

  handleChildrenAges(message) {
    if (typeof message === 'object') {
      this.addToState("childrenAge", message)
      const answer = this.createChatbotMessage(<BotChatMessage message={`Gracias!
    Como los trámites varían según la comunidad autónoma, ¿me podrías facilitar tu código postal?`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(9);
    } else {
      const answer = this.createChatbotMessage(<BotChatMessage message={`Por favor introduce las edades haciendo uso de los selectores`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);


    }
  }

  handleZipCode(message) {
    if (regex.validSpanishZipCode(message)) {
      this.addToState("zipCode", message)
      const answer = this.createChatbotMessage(<BotChatMessage message={'Dime; ¿Cuáles son tus principales inquietudes sobre el acogimiento familiar?'} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
      this.nextQuestion(10);
    } else {
      const userAnswer = this.createClientMessage(<UserChatMessage message={message} />)
      this.addToStateMessages(userAnswer)
      const answer = this.createChatbotMessage(<BotChatMessage message={`El código postal introducido no es válido`} />)
      setTimeout(() => { this.addToStateMessages(answer) }, timer);
    }

  }

  handleOpenQuestion(message, state) {
    this.addToState("openQuestion", message);
    const answer = this.createChatbotMessage(<BotChatMessage message={`Gracias por compartirlo,${state.name}! Aquí tienes contenido según tus inquietudes:`} />, { widget: "APIRequest" })
    setTimeout(() => { this.addToStateMessages(answer) }, timer);
    console.log("STATE TO SEND", state)
    axios({
      url: 'http://localhost:5000/users/signup',
      method: 'post',
      data: "prueba"
    })


    this.nextQuestion(11);

    //Sign up user


  }



  addToState(key, newValue) {
    this.setState((prevState) => ({
      ...prevState,
      [key]: newValue,
    }))
  }

  nextQuestion(number) {
    this.setState((prevState) => ({
      ...prevState,
      questionNum: number,
    }))

  }

  addToStateMessages(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }





}






export default ActionProvider;