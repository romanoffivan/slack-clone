import React from 'react';

const MessageList = (props) => {
  const { messages } = props;
  return (
    <ul className="list-group">
      {messages.map(message =>
        (
          <li key={message.id} className="list-group-item">
            <b>{`${message.userName}: `}</b>
            {message.text}
          </li>
        ))}
    </ul>
  );
};

export default MessageList;
