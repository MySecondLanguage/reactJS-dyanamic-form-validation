import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import Reducer from '../src/reducer';

const store = createStore(Reducer);

function onStateChange() {
  store.getState();
}
store.subscribe(onStateChange)

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
