import "tailwindcss/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {store }from "./module/store/store";
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import App from "./App";
import './App.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
