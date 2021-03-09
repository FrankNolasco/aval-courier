import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TemplateProvider } from "./App/hooks/global/TemplateContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceworker";
import { BrowserRouter as Router } from "react-router-dom";
import { UsuarioProvider } from "./App/hooks/global/UsuarioContext";
import SharedCSS from "./shared/styles/SharedCSS";
import store from "./App/redux/ReduxStore";
import { Provider } from "react-redux";
import ToastDispacher from "./shared/components/Template/ToastDispacher";

ReactDOM.render(
  <Provider store={store}>
    <TemplateProvider>
      <UsuarioProvider>
        <ToastDispacher>
          <Router>
            <SharedCSS />
            <App />
          </Router>
        </ToastDispacher>
      </UsuarioProvider>
    </TemplateProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
serviceWorker.register();
