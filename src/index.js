import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import infoButton from './Assests/info-Button.svg'
import './Styles/home.css';
import './Styles/gallery.css';
import './Styles/nav.css';
import './Styles/modal.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


