import React from 'react';
import cn from 'classnames';
import connect from '../connect';
import RemoveChannelModal from './RemoveChannelModal';
import RenameChannelModal from './RenameChannelModal';
import channelsSelector from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    currentChannel: state.channels[state.currentChannelId],
    channels: channelsSelector(state),
    channelRemovingState: state.channelRemovingState,
    channelRenamingState: state.channelRenamingState,
    showModalType: state.showModalType,
  };
  return props;
};

@connect(mapStateToProps)

class ChannelList extends React.Component {
  handleShowModalRemove = id => () => {
    this.props.showModal({ channelId: id, modalType: 'removingChannelModal' });
  };

  handleShowModalRename = id => () => {
    this.props.showModal({ channelId: id, modalType: 'renamingChannelModal' });
  };

  handleChannelClick = id => () => {
    this.props.changeCurrentChannel({ channelId: id });
  };
  handleRemoveChannel = () => {
    this.props.sendRemoveChannel(this.props.currentChannelId);
  }

  renderList() {
    const { channels } = this.props;

    return channels.map((channel) => {
      const listItemClass = cn({
        'list-group-item': true,
        active: this.props.currentChannelId === channel.id,
      });
      return (
        <button
          onClick={this.handleChannelClick(channel.id)}
          className={listItemClass}
          key={channel.id}
        >
          {channel.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group mb-3">
          {this.renderList()}
        </ul>
        <div className="d-flex justify-content-between mb-3">
          <button onClick={this.handleShowModalRename(this.props.currentChannelId)} className="btn btn-success" type="button">rename</button>
          <button onClick={this.handleShowModalRemove(this.props.currentChannelId)} className="btn btn-success" type="button">delete</button>
        </div>
        <RemoveChannelModal
          showModalType={this.props.showModalType}
          hideModal={this.props.hideModal}
          removable={this.props.currentChannel.removable}
          handleRemoveChannel={this.handleRemoveChannel}
          сhannelRemovingState={this.props.channelRemovingState}
        />
        <RenameChannelModal
          showModalType={this.props.showModalType}
          hideModal={this.props.hideModal}
          sendRenameChannel={this.props.sendRenameChannel}
          currentChannelId={this.props.currentChannelId}
          сhannelRenamingState={this.props.channelRenamingState}
        />
      </div>
    );
  }
}

export default ChannelList;
