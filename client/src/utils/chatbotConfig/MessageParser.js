// in MessageParser.js
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        
        if (this.state.questionNum === 0) {
            console.log("question1")
            this.actionProvider.handleName(message)

        } else if (this.state.questionNum === 1) {
            console.log("question2")
            this.actionProvider.handleSurname(message)

        } else if (this.state.questionNum === 2) {
            console.log("question3")
            this.actionProvider.handleEmail(message)
            

        } else if (this.state.questionNum === 3) {
            console.log("question4")
            this.actionProvider.handlePassword(message)
           

        } else if (this.state.questionNum === 4) {
            console.log("question5")
            this.actionProvider.handleConsentGDPR(message, this.state)
       

        } else if (this.state.questionNum === 5) {
            console.log("question6")
            this.actionProvider.handleAgeQuestion(message)
           

        } else if (this.state.questionNum === 6) {
            console.log("question7")
            this.actionProvider.handleUserType(message)
            

        } else if (this.state.questionNum === 7){
            console.log("Open question")
            this.actionProvider.handleOpenQuestion(message, this.state)
        }


    }
}

export default MessageParser;