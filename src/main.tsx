import React from "react";
import './styles/variables.css'
import "./assets/fonts/fonts.css";
import './styles/global.css'
import  App  from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
