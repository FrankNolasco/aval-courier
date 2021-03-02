import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TemplateProvider } from './App/hooks/global/TemplateContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceworker";
import {BrowserRouter as Router} from 'react-router-dom'
import { UsuarioProvider } from './App/hooks/global/UsuarioContext';
import SharedCSS from './shared/styles/SharedCSS';
ReactDOM.render(
  <TemplateProvider>
    <UsuarioProvider>
      <Router>
        <SharedCSS/>
        <App />
      </Router>
    </UsuarioProvider>
  </TemplateProvider>,
  document.getElementById('root')
);
reportWebVitals();
serviceWorker.register()