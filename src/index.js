import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);
reportWebVitals();
