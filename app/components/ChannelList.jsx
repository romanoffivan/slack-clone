import React from 'react';

class ChannelList extends React.Component {
  renderList = () => {
    const { channels } = this.props;

    return channels.map(channel => (
      <li className="list-group-item list-group-item-action" key={channel.id}>
        {channel.name}
      </li>
    ));
  }

  render() {
    return (
      <ul className="col-md -3 list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default ChannelList;
