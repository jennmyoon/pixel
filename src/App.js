import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import infoButton from './Assests/info-Button.svg';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Navbar from './Components/Navbar';
import {ModalProvider} from './Components/ModalContext.js'; 
import { useEffect } from 'react';

function App() {

  return (
    <div id='app-wrapper'>
      <ModalProvider>
        <Navbar infoButton={infoButton}/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/gallery' Component={Gallery} />
        </Routes>
      </ModalProvider>
    </div>
 
  );
}

export default App;
