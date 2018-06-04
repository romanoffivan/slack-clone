import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client'; // eslint-disable-line
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import _ from 'lodash';
import thunk from 'redux-thunk';
import gon from 'gon';
import App from './containers/App';
import reducers from './reducers';
import * as actions from './actions';

const { channels, messages, currentChannelId } = gon;

const preloadedState = {
  messages: _.keyBy(messages, 'id'),
  channels: _.keyBy(channels, 'id'),
  currentChannelId,
};

const store = createStore(
  reducers,
  preloadedState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
    applyMiddleware(thunk),
  ),
);

const socket = io();
socket
  .on('connect', () => console.log('connected to server'))
  .on('disconnect', () => console.log('disconnected from server'))
  .on('newMessage', (data) => {
    store.dispatch(actions.addMessage(data));
  });

export default user => render(
  <Provider store={store}>
    <App userName={user} />
  </Provider>,
  document.getElementById('chat'),
);
