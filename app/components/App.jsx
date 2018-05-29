import React from 'react';
import gon from 'gon';
import ChannelList from './ChannelList';

const channelsList = gon.channels;

const App = props => (
  <div className="col-md-4 order-md-2 mb-4">
    <ChannelList channels={channelsList} />
    <p className="col">Your nickname {props.userName}</p>
  </div>
);

export default App;
