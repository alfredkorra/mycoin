import { createStore, compose } from 'redux';


import persistedReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer,composeEnhancers());

export default store;