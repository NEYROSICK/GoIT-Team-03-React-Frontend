import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App.jsx';
import './index.css';
import { store } from './components/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store }>
    <BrowserRouter basename="/GoIT-Team-03-React-Frontend">
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
