import React from 'react';
import ChannelList from '../containers/ChannelList';
import ChatForm from './ChatForm';
import MessageList from '../containers/MessageList';

const App = props => (
  <div className="row">
    <ChannelList />
    <div className="col-md-9">
      <div className="card" id="msgWindow">
        <div className="card-header">
          <span className="card-title">Chat</span>
        </div>
        <div className="card-body" id="msgs">
          <MessageList />
        </div>
        <div className="card-footer">
          <ChatForm
            userName={props.userName}
            currentChannelId={props.currentChannelId}
            messageCreatingState={props.messageCreatingState}
            updateMessages={props.updateMessages}
          />
        </div>
      </div>
    </div>
  </div>
);

export default App;
