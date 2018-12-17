import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component {
  state = {
    message: ''
  }

  handleInputChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      message: value,
    }));
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.message === '';
  };

  handleSu
  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your message..." 
            value={this.state.message} 
            onChange={this.handleInputChange} />

          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

AddMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
}

export default AddMessage