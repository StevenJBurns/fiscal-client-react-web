import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from 'state/store';
import App from 'components/app/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-root')
);
