import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Импортируем главный компонент App
import './styles.css'; // Подключаем стили (если есть)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
