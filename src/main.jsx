import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import './assets/languages/i18n.js';
import { withTranslation } from 'react-i18next';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,

);

export default withTranslation()(App);

