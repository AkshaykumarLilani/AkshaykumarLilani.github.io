import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './Redux/store.js';
import { Provider } from "react-redux";
import { BreakpointProvider } from 'react-socks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BreakpointProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BreakpointProvider>,
)
