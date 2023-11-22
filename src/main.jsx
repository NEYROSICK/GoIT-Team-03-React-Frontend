import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store';
import './index.css';
import './fonts/manrope-v15-latin-regular.woff2';
import './fonts/manrope-v15-latin-500.woff2';
import './fonts/manrope-v15-latin-600.woff2';
import './fonts/manrope-v15-latin-700.woff2';
import './fonts/manrope-v15-latin-800.woff2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/GoIT-Team-03-React-Frontend">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
