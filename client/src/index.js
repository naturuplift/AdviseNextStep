import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Use the createRoot API for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Call reportWebVitals if needed
reportWebVitals();