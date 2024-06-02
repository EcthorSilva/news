import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './router/routes';
import reportWebVitals from './reportWebVitals';
import withTheme from './withTheme';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ThemedAppRoutes = withTheme(AppRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemedAppRoutes />
   </React.StrictMode>
);

reportWebVitals();