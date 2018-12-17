import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatHistory from './ChatHistory'
import AddMessage from './AddMessage'

class ChatWindow extends Component {
  onAddMessage = (message) => {
    this.props.onAddMessage(this.props.user.username, message);
  }

  render() {
    const { user, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ChatHistory messages={messages} user={user} />
        <AddMessage onAddMessage={this.onAddMessage} />
      </div>
    )
  }
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onAddMessage: PropTypes.func.isRequired,
};

export default ChatWindow;