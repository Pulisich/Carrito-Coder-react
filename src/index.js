import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCROXEINAh0h9HJrRJc0LHQOP0fKVgwjbA",
  authDomain: "react-coderhouse-ecommer-67e24.firebaseapp.com",
  projectId: "react-coderhouse-ecommer-67e24",
  storageBucket: "react-coderhouse-ecommer-67e24.appspot.com",
  messagingSenderId: "344724902917",
  appId: "1:344724902917:web:bd62d06dafa59ba28a386c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    
    <App />

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
