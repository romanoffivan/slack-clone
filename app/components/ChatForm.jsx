import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ChatForm extends React.Component {
  sendUpdateMessage = (values) => {
    this.props.updateMessages(
      this.props.currentChannelId,
      { text: values.text, userName: this.props.userName },
    );
    this.props.reset();
  };

  render() {
    return (
      <form action="" id="msgForm" className="input-group" onSubmit={this.props.handleSubmit(this.sendUpdateMessage)}>
        <Field className="form-control" name="text" required component="input" type="text" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMessage',
})(ChatForm);
