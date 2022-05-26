//import './App.css';
import 'normalize.css';
import './styles/styles.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [chatRef, setChatRef] = useState("")
  const [displayChat, setDisplayChat] = useState(false);

  

  const data = {
    chatRef,
    setChatRef,
    displayChat,
    setDisplayChat
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header value={data}/>
        <Main value={data}/>
        <Footer value={data} />
      </BrowserRouter>
    </div>
  );
}

export default App;

<div>

</div>
