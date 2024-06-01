import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import ConfigPage from './ConfigPage';

const AppRoutes = () => {
  const [config, setConfig] = useState({ maxPages: 10 });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App maxPages={config.maxPages} />} />
        <Route path="/ConfigPage" element={<ConfigPage config={config} setConfig={setConfig} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;