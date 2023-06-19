import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import dark from './components/themes/dark.module.css'
import light from './components/themes/light.module.css'
import styles from './components/Tarif/Tarif.module.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App theme ={dark} />
  </React.StrictMode>
);


reportWebVitals();
