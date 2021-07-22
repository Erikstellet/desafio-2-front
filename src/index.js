import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { GlobalStyle } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
     <ToastContainer className="tostado"
                     autoClose={3000}
                     newestOnTop={false}
                     closeOnclick
                     rtl={false}
                     pauseOnFocusLoss
                     pauseOnHover
    />

    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
