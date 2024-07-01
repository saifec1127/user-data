import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Dynamically load the first micro frontend
const loadMicroFrontend = async (containerId) => {
  const { renderMicroFrontend } = await import('micro-frontend-app/dist/bundle.js');
  renderMicroFrontend(containerId);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div id="micro-frontend-container"></div>
  </React.StrictMode>
);

// Load the micro frontend
loadMicroFrontend('micro-frontend-container');
