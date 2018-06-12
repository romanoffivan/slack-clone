import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
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

const channelCreatingState = handleActions({
  [actions.updateChannelRequest]() {
    return 'requested';
  },
  [actions.updateChannelSuccess]() {
    return 'successed';
  },
  [actions.updateChannelFailure]() {
    return 'failed';
  },
}, 'none');

const channelRemovingState = handleActions({
  [actions.removeChannelRequest]() {
    return 'requested';
  },
  [actions.removeChannelSuccess]() {
    return 'successed';
  },
  [actions.removeChannelFailure]() {
    return 'failed';
  },
}, 'none');

const channelRenamingState = handleActions({
  [actions.renameChannelRequest]() {
    return 'requested';
  },
  [actions.renameChannelSuccess]() {
    return 'successed';
  },
  [actions.renameChannelFailure]() {
    return 'failed';
  },
}, 'none');


const messages = handleActions({
  [actions.addMessage](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return _.omit(state, id);
  },
}, {});

const channels = handleActions({
  [actions.addChannel](state, { payload: { data: { attributes } } }) {
    return { ...state, [attributes.id]: attributes };
  },
  [actions.removeChannel](state, { payload: { data: { id } } }) {
    return _.omit(state, id);
  },
  [actions.renameChannel](state, { payload: { data } }) {
    const updatedChannel = { ...state[data.id], name: data.attributes.name };
    return { ...state, [data.id]: updatedChannel };
  },
}, {});

const currentChannelId = handleActions({
  [actions.changeCurrentChannel](state, { payload: { channelId } }) {
    return channelId;
  },
  [actions.showModal](state, { payload: { channelId } }) {
    return channelId;
  },
  [actions.removeChannel](state, { payload: { generalChannelId } }) {
    return generalChannelId;
  },
}, null);

const isShowAddChannelForm = handleActions({
  [actions.showAddChannelForm](state) {
    return !state;
  },
  [actions.addChannel](state) {
    return !state;
  },
}, false);

const showModalType = handleActions({
  [actions.showModal](state, { payload: { modalType } }) {
    return modalType;
  },
  [actions.hideModal]() {
    return 'none';
  },
  [actions.renameChannel]() {
    return 'none';
  },
  [actions.removeChannel]() {
    return 'none';
  },
}, 'none');

export default combineReducers({
  messageCreatingState,
  channelCreatingState,
  channelRemovingState,
  channelRenamingState,
  isShowAddChannelForm,
  showModalType,
  form: formReducer,
  currentChannelId,
  messages,
  channels,
});
