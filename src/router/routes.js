// src/router/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Config from './config';

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/config" element={<Config />} />
         </Routes>
      </Router>
   );
};

export default AppRoutes;
