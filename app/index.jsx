import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from 'faker';
import cookies from 'js-cookie';
import '../assets/application.css';
import App from './components/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const userName = faker.name.findName();
const getName = () => cookies.get('name');
if (!getName()) {
  cookies.set('name', userName);
}

render(
  <App userName={getName()} />,
  document.getElementById('chat'),
);
