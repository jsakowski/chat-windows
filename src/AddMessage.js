import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component {
  render () {
    return (
      <div>
        <form className="input-group">
          <input type="text" className="form-control" placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" disabled="">
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddMessage