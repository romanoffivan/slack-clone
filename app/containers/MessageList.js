import { connect } from 'react-redux';
import Component from '../components/MessageList';

const mapStateToProps = (state) => {
  const channelMessages = Object.values(state.messages).filter(el =>
    el.channelId === state.currentChannelId);
  const props = {
    messages: channelMessages,
  };
  return props;
};

export default connect(mapStateToProps)(Component);
