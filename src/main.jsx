import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//import router
import {BrowserRouter as Router} from 'react-router-dom'

//importar torneo context provider
import TorneoContextProvider from './components/TorneoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //elementos que quiero renderizar dentro del div con id root
  <TorneoContextProvider>

    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>


  </TorneoContextProvider>
);
