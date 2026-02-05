import "./components/i18n/index";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>
);
