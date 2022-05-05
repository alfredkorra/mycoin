import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';


import store from './redux';

const persistedStore = persistStore(store);


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistedStore}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>
);


