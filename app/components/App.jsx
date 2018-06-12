import React from 'react';
import ChannelList from './ChannelList';
import ChatForm from './ChatForm';
import MessageList from './MessageList';
import AddChannelForm from './AddChannelForm';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageCreatingState: state.messageCreatingState,
    channelCreatingState: state.channelCreatingState,
    isShowAddChannelForm: state.isShowAddChannelForm,
  };
  return props;
};

@connect(mapStateToProps)

class App extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-between">
        <div className="col-md-3 border d-flex flex-column">
          <ChannelList />
          <AddChannelForm
            сhannelCreatingState={this.props.channelCreatingState}
            sendUpdateChannels={this.props.sendUpdateChannels}
            isShowAddChannelForm={this.props.isShowAddChannelForm}
            showAddChannelForm={this.props.showAddChannelForm}
          />
        </div>
        <div className="col-md-9 d-flex flex-column bd-highlight border p-0">
          <div className="p-3 bd-highlight border-bottom">Chat</div>
          <div className="p-3 bd-highlight border-bottom">
            <div className="container border" style={{ height: '60vh', overflowY: 'scroll' }}>
              <MessageList />
            </div>
          </div>
          <div className="p-3 bd-highlight">
            <ChatForm
              userName={this.props.userName}
              currentChannelId={this.props.currentChannelId}
              messageCreatingState={this.props.messageCreatingState}
              updateMessages={this.props.updateMessages}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
