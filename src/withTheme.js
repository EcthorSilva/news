import React, { useEffect } from 'react';

const withTheme = (WrappedComponent) => {
   return (props) => {
      const applyTheme = () => {
         const selectedTheme = localStorage.getItem('selectedTheme') || 'listGroupCheckableRadios1';
         const html = document.querySelector('html');
         switch (selectedTheme) {
            case 'listGroupCheckableRadios2': // Dark
               html.setAttribute('data-bs-theme', 'dark');
               html.id = 'html-theme-dark';
               break;
            case 'listGroupCheckableRadios3': // Light
               html.setAttribute('data-bs-theme', 'light');
               html.id = 'html-theme-light';
               break;
            default: // Auto
               html.removeAttribute('data-bs-theme');
               html.id = 'html-theme-auto';
               break;
         }
      };

      useEffect(() => {
         applyTheme();
      }, []);

      return <WrappedComponent {...props} />;
   };
};

export default withTheme;