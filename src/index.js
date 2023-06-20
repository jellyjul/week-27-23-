import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import dark from './components/themes/dark.module.scss'
import light from './components/themes/light.module.scss'
import styles from './components/Tarif/Tarif.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App theme ={dark} />
  </React.StrictMode>
);


reportWebVitals();
