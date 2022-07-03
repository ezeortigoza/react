import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqg7O7MAnsM2f4Ustbr9sHapL8874bBig",
  authDomain: "apple-434d0.firebaseapp.com",
  projectId: "apple-434d0",
  storageBucket: "apple-434d0.appspot.com",
  messagingSenderId: "303565942169",
  appId: "1:303565942169:web:84729e6bc2c1b932c07708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

