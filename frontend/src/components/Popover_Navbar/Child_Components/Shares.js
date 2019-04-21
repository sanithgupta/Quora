import React, { Component } from 'react'

export class Shares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: "User hasen't shared anything"
    }
  }
  render() {
    return (
      <div>
        <p>Shares</p>
        <hr></hr>
        <center>
          <div >
            <p class="font-weight-light">{this.state.shares}</p>
          </div>
        </center>
      </div>
    )
  }
}

export default Shares
