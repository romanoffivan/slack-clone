import React from 'react';
import connect from '../connect';

const mapStateToProps = (state) => {
  const channelMessages = Object.values(state.messages).filter(el =>
    el.channelId === state.currentChannelId);
  const props = {
    messages: channelMessages,
  };
  return props;
};

@connect(mapStateToProps)

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="d-flex flex-column p-1">
        {messages.map(message =>
          (
            <p key={message.id}>
              <b>{`${message.userName}: `}</b>
              {message.text}
            </p>
          ))}
      </div>
    );
  }
}

export default MessageList;
