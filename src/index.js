import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from '@reduxjs/toolkit'
import reducer from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

const store = configureStore({ reducer, middleware: [loggerMiddleware, thunk], devTools: true })

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
