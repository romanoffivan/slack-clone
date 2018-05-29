import React from 'react';

export default class ChannelList extends React.Component {
  renderList = () => {
    const { channels } = this.props;

    return channels.map(({ id, name }) =>
      <a href="#" className="list-group-item list-group-item-action" id={id}>{name}</a>);
  }

  render() {
    return <div className="list-group">
      {this.renderList()}
    </div>
  }
};
