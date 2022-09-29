import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const root = ReactDOM.createRoot(document.getElementById('root'));


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfvpPSIoYrpwbXcqjtrK7iiwHxdbl13D8",
  authDomain: "e-comerce-react-19e7d.firebaseapp.com",
  projectId: "e-comerce-react-19e7d",
  storageBucket: "e-comerce-react-19e7d.appspot.com",
  messagingSenderId: "627689316834",
  appId: "1:627689316834:web:ffae2e8f7091a7c89399bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
