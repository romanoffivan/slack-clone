import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addMessage = createAction('MESSAGE_ADD');

export const updateMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const updateMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const updateMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addChannel = createAction('CHANNEL_ADD');
export const changeCurrentChannel = createAction('CHANNEL_CHANGE');

export const updateMessages = (channelId, message) => async (dispatch) => {
  dispatch(updateMessageRequest());
  try {
    await axios.post(routes.addMessageUrl(channelId), { data: { attributes: message } });
    dispatch(updateMessageSuccess({ attributes: message }));
  } catch (e) {
    console.log(e);
    dispatch(updateMessageFailure());
  }
};
