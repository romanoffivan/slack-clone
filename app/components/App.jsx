import React from 'react';
import ChannelList from './ChannelList';
import gon from 'gon';

const channels = gon.channels;

const App = props => (
  <div className="col-md-4 order-md-2 mb-4">
    <ChannelList channels={channels} />
    <p className="col">Your nickname {props.userName}</p>
  </div>
);

export default App;
