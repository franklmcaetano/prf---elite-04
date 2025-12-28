import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos globais para garantir o fundo escuro
const style = document.createElement('style');
style.textContent = `
  body { margin: 0; background-color: #05080f; color: white; font-family: sans-serif; }
  * { box-sizing: border-box; }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
