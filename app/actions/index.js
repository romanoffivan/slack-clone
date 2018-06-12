import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addMessage = createAction('MESSAGE_ADD');

export const updateMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const updateMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const updateMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const updateChannelRequest = createAction('CHANNEL_ADD_REQUEST');
export const updateChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const updateChannelFailure = createAction('CHANNEL_ADD_FAILURE');

export const removeChannelRequest = createAction('CHANNEL_REMOVE_REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVE_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE_FAILURE');

export const renameChannelRequest = createAction('CHANNEL_RENAME_REQUEST');
export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILURE');

export const addChannel = createAction('CHANNEL_ADD');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const renameChannel = createAction('CHANNEL_RENAME');
export const changeCurrentChannel = createAction('CHANNEL_CHANGE');

export const showAddChannelForm = createAction('ADD_CHANNEL_FORM_SHOW');

export const showModal = createAction('MODAL_SHOW');
export const hideModal = createAction('MODAL_HIDE');

export const updateMessages = (channelId, message) => async (dispatch) => {
  dispatch(updateMessageRequest());
  try {
    await axios.post(routes.addMessageUrl(channelId), { data: { attributes: message } });
    dispatch(updateMessageSuccess({ attributes: message }));
  } catch (e) {
    dispatch(updateMessageFailure());
  }
};

export const sendUpdateChannels = name => async (dispatch) => {
  dispatch(updateChannelRequest());
  try {
    await axios.post(routes.addChannelUrl(), { data: { attributes: name } });
    dispatch(updateChannelSuccess());
  } catch (e) {
    dispatch(updateChannelFailure());
  }
};

export const sendRemoveChannel = currentChannelId => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    await axios.delete(routes.changeChannel(currentChannelId));
    dispatch(removeChannelSuccess());
  } catch (e) {
    dispatch(removeChannelFailure());
  }
};

export const sendRenameChannel = (id, name) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    await axios.patch(routes.changeChannel(id), { data: { attributes: name } });
    dispatch(renameChannelSuccess());
  } catch (e) {
    dispatch(renameChannelFailure());
  }
};
