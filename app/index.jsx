import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

export default userName => render(
  <App userName={userName} />,
  document.getElementById('chat'),
);
