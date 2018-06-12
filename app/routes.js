const api = '/api/v1';

export default {
  addChannelUrl: () => [api, 'channels'].join('/'),
  changeChannel: channelId => [api, 'channels', `${channelId}`].join('/'),
  addMessageUrl: channelId => [api, 'channels', `${channelId}`, 'messages'].join('/'),
};
