import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Sucess from './pages/sucess/Sucess';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sucess" element={<Sucess />} />
     </Routes>
    </Router>
    
  </React.StrictMode>
)

