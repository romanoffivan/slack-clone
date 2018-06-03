const api = '/api/v1';

export default {
  addMessageUrl: channelId => [api, 'channels', `${channelId}`, 'messages'].join('/'),
};
