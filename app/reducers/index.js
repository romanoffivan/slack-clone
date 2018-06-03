import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const messageCreatingState = handleActions({
  [actions.updateMessageRequest]() {
    return 'requested';
  },
  [actions.updateMessageSuccess]() {
    return 'successed';
  },
  [actions.updateMessageFailure]() {
    return 'failed';
  },
}, 'none');

const messages = handleActions({
  [actions.addMessage](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
}, {});

const channels = handleActions({
  [actions.addChannel](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
}, {});

const currentChannelId = handleActions({
  [actions.changeCurrentChannel](state, channelId) {
    return channelId;
  },
}, {});

export default combineReducers({
  messageCreatingState,
  form: formReducer,
  currentChannelId,
  messages,
  channels,
});
