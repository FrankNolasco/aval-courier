import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TemplateProvider } from './App/hooks/global/TemplateContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceworker";
import './shared/styles/Theme/theme.css'
import './shared/styles/Theme/components.css'
import './shared/styles/antd.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { UsuarioProvider } from './App/hooks/global/UsuarioContext';
ReactDOM.render(
  <TemplateProvider>
    <UsuarioProvider>
      <Router>
        <App />
      </Router>
    </UsuarioProvider>
  </TemplateProvider>,
  document.getElementById('root')
);
reportWebVitals();
serviceWorker.register()