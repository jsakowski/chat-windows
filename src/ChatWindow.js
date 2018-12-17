import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ChatHistory from './ChatHistory'
import AddMessage from './AddMessage'

class ChatWindow extends Component {
  render () {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <ChatHistory messages={this.props.messages} user={this.props.user} />
        <AddMessage />
      </div>
    )
  }
}

export default ChatWindow;