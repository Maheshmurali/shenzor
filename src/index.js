import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import firebase from './Firebase/Config'
import { FirebaseContex } from './Store/FirebaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContex.Provider value={{firebase}}>
    <App />
  </FirebaseContex.Provider>
    
  
);

