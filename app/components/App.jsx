import React from 'react';
import ChannelList from './ChannelList';
import ChatForm from './ChatForm';
import MessageList from './MessageList';
import AddChannelForm from './AddChannelForm';

const App = props => (
  <div className="row d-flex justify-content-between">
    <div className="col-md-3 border d-flex flex-column">
      <ChannelList />
      <AddChannelForm />
    </div>
    <div className="col-md-9 d-flex flex-column bd-highlight border p-0">
      <div className="p-3 bd-highlight border-bottom">Chat</div>
      <div className="p-3 bd-highlight border-bottom">
        <div className="container border" style={{ height: '60vh', overflowY: 'scroll' }}>
          <MessageList />
        </div>
      </div>
      <div className="p-3 bd-highlight">
        <ChatForm userName={props.userName} />
      </div>
    </div>
  </div>
);

export default App;
