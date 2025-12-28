import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Injeta estilos globais básicos para evitar erros de ficheiros CSS em falta
const style = document.createElement('style');
style.textContent = `
  body { margin: 0; background-color: #05080f; color: white; font-family: sans-serif; -webkit-font-smoothing: antialiased; }
  * { box-sizing: border-box; }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
