import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from './components/styles/Global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);        
root.render(
  <React.StrictMode>
    <Global/>
    <App />
    <ToastContainer/>
  </React.StrictMode>
);
