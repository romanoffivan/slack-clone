import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RemoveChannelModal = (props) => {
  const disabled = props.сhannelRemovingState === 'requested';
  return (
    <Modal backdrop={false} show={props.showModalType === 'removingChannelModal'}>
      <Modal.Header>
        <Modal.Title>
          Removing channel
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.removable
          ? 'Are you sure you want to remove this channel?'
          : 'You can`t remove this channel'}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.hideModal} bsStyle="primary">Close</Button>
        {props.removable
          ? <Button disabled={disabled} onClick={props.handleRemoveChannel} bsStyle="success">Remove</Button>
          : null}
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveChannelModal;
