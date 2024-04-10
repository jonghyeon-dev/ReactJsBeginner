import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React 18버전 부터 createRoot로 render 생성 (ReactDOM.render 로 생성불가)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
