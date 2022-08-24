import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from "../GlobalStyles";
import Home from "./pages/home/Home";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home/>
  </React.StrictMode>
)

