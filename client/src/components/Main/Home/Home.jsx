import React from "react";
import ChatBot from 'react-simple-chatbot';

const Home = () => {
  return <div>
    <h1>Chatbot</h1>
    <ChatBot
      steps={[
        {
          id: 'hello-world',
          message: 'Hello World!',
          end: true,
        },
      ]}
    />
  </div>;
};

export default Home;
