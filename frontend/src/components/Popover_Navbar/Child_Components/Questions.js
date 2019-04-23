import React, { Component } from 'react'

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["What is the best trade in a website for a laptop, and why?"]
    }
  }
  render() {
    const dataSize = this.state.questions.length;
    // if (dataSize > 0) {
    //   let view = <div></div>
    //   view = this.state.questions.map(did => {
    //     return (
    //       { did }
    //     )
    //   })
    // }
    // else {
    //   return (
    //     this.state.did = <div></div>
    //   )
    // }
    return (
      <div>
        <p>Questions</p>
        <hr></hr>
        {dataSize > 0 ? (<div>
          <h3 class="font1">{this.view}</h3>
          <hr></hr>
        </div>) : (
            <center>
              <div>
                <p class="font-weight-light"> User haven't asked Questions yet</p>
              </div>
            </center>
          )
        }
      </div>
    )
  }
}

export default Questions
