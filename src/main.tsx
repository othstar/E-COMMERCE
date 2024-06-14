import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import CartContextProvider from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
