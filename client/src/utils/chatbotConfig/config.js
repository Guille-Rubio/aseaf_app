import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '../../components/Footer/Chatbot/Avatar/Avatar';
import UserAvatar from '../../components/Footer/Chatbot/UserAvatar/UserAvatar';
import UserChatMessage from '../../components/Footer/Chatbot/UserChatMessage/UserChatMessage';
import BotChatMessage from '../../components/Footer/Chatbot/BotChatMessage/BotChatMessage';
import ConsentGDPR from './widgets/consentGDPR';
import AgeRange from './widgets/ageRange';
import UserType from './widgets/userType';
import ChildrenNumber from './widgets/childrenNumber';
import ChildrenAge from './widgets/childrenAge';
import APIRequest from './widgets/APIRequest';

const botName = 'Nexus';


const config = {

    botName: botName,
    lang: "es",

    initialMessages: [

        createChatBotMessage(<BotChatMessage message={"¡Hola!"} />, { delay: 500 }),
        createChatBotMessage('Soy Nexus! Estoy aqui para ayudarte y resolver tus dudas e inquietudes', { delay: 2500 }),
        createChatBotMessage('Para poder ofrecerte una información más personalizada necesitamos crearte un perfil mediante un correo electrónico y una contraseña donde poder compartir contigo esa información.', { delay: 4500 }),

        createChatBotMessage('Para poder conocerte mejor, ¿Cómo quieres que te llame?', { delay: 7000 }),

    ],

    customStyles: {
        chatButton: {
            backgroundColor: '#465E53',
            borderRadius: "15px",
        },
    },

    state: {//estado inyectado en el chatbot, se puede usar en widgets
        name: "",
        surname: "",
        email: "",
        password: "",
        consentGDPR: "",
        userType: "",
        ageRange: "",
        children: "",
        childrenAge: "",
        zipCode: "",
        questionNum: 0,
        openQuestion: "",
        apiResponse: {}
    },

    customComponents: {

        botAvatar: (props) => <Avatar />,
        userAvatar: (props) => <UserAvatar {...props} />,
        botChatMessage: (props) => <BotChatMessage {...props} />,
        userChatMessage: (props) => <UserChatMessage {...props} />
    },

    widgets: [
        {
            widgetName: 'ConsentGDPR',
            widgetFunc: (props) => <ConsentGDPR {...props} />,
        },
        {
            widgetName: 'UserType',
            widgetFunc: (props) => <UserType {...props} />,
        },
        {
            widgetName: 'AgeRange',
            widgetFunc: (props) => <AgeRange {...props} />,
        },
        {
            widgetName: 'ChildrenNumber',
            widgetFunc: (props) => <ChildrenNumber {...props} />,
        },
        {
            widgetName: 'ChildrenAge',
            widgetFunc: (props) => <ChildrenAge {...props} />,
            mapStateToProps:["children"]
        },
        {
            widgetName: 'APIRequest',
            widgetFunc: (props) => <APIRequest {...props} />,
            mapStateToProps:["openQuestion"]
        }



    ]


};




export default config;