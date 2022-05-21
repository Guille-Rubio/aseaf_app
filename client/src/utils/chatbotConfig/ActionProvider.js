import BotChatMessage from '../../components/Footer/Chatbot/BotChatMessage/BotChatMessage';

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }


  handleName(message) {
    const initialToUpper = message.charAt(0).toUpperCase()
    const remainder = message.slice(1)
    const capitalized = initialToUpper + remainder
    this.addToState("name", capitalized)
    const answer = this.createChatbotMessage(<BotChatMessage message={`Es un placer conocerte, ${capitalized} ¿Me dirías cómo te apellidas?`} />)
    this.addToStateMessages(answer);
    this.nextQuestion(1);
   
   
    
  }

  handleSurname(message) {
    this.addToState("surname", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={'¿Nos podrías facilitar tu correo electrónico?'}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(2);
  }

  handleEmail(message) {
    this.addToState("email", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={'¿Qué contraseña quieres poner ? Crea una contraseña que tenga más de x caracteres'}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(3);
  }

  handlePassword(message) {
    this.addToState("password", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={'¿Aceptas que al final de las preguntas te enviemos información personalizada según tus inquitudes con los datos que nos has facilitado?'}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(4);
  }

  handleConsentGDPR(message, state) {
    this.addToState("consentGDPR", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={`¡Genial ${state.name}!
    Para poder hacer mejor mi labor, me gustaría conocer  más sobre ti, empezando por tu edad:`}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(5);
  }

  handleAgeQuestion(message) {
    this.addToState("ageRange", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={`¿Ya eres familia de acogida o estás interesado?`}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(6);
  }

  handleUserType(message) {
    this.addToState("userType", message)
    const answer = this.createChatbotMessage(<BotChatMessage message={'Dime; ¿Cuáles son tus principales inquietudes sobre el acogimiento familiar?'}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(7);
  }

  handleOpenQuestion(message) {
    const answer = this.createChatbotMessage(<BotChatMessage message={'Tras la petición a la API estos son tus enlaces de interés....'}/>)
    this.addToStateMessages(answer);
    this.nextQuestion(8);
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