import { createSelector } from 'reselect';

const getChannels = state => state.channels;

export default createSelector(
  getChannels,
  channel => Object.values(channel),
);
