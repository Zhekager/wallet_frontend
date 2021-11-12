import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
import App from './App';

import 'modern-normalize/modern-normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
