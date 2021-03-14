import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppLoadingScreen from 'components/app/AppLoadingScreen/AppLoadingScreen';
import App from 'components/app/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AppLoadingScreen />}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App /> 
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-root')
);
