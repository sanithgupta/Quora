import React, { Component } from 'react'
import axios from 'axios';
import './child.css'
import { Button, Form, FormGroup, Label, Col, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip, Popover, PopoverHeader, PopoverBody, UncontrolledPopover, Input } from 'reactstrap';

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downvoteTool: false,
      facbookTool:false,
      twitterTool:false,
      moreTool:false,
      dotsTool:false,
      // questions: []
    }
    this.downvoteToolTip = this.downvoteToolTip.bind(this);
    this.facebookToolTip = this.facebookToolTip.bind(this);
    this.twitterToolTip = this.twitterToolTip.bind(this);
    this.moreToolTip = this.moreToolTip.bind(this);
    this.dotsToolTip =this.dotsToolTip.bind(this);

  }

  downvoteToolTip() {
    console.log("inside downvote tooltip", this.state.downvoteTool)
    this.setState({
      downvoteTool: !this.state.downvoteTool
    });
    // this.downvoteToolTip = this.downvoteToolTip.bind(this);

  }

  facebookToolTip(){
    console.log("inside facbook tooltip", this.state.facbookTool)
    this.setState({
      facbookTool:!this.state.facbookTool
    });
    // this.facebookToolTip = this.facebookToolTip.bind(this)
  }

  twitterToolTip(){
    console.log("inside twitter tooltip", this.state.twitterTool)
    this.setState({
      twitterTool:!this.state.twitterTool
    });
  }

  moreToolTip(){
    console.log("inside more tooltip", this.state.moreTool)
    this.setState({
      moreTool:!this.state.moreTool
    });
  }

  dotsToolTip(){
    console.log("inside dots tooltip", this.state.dotsTool)
    this.setState({
      dotsTool:!this.state.dotsTool
    });
  }

  componentDidMount = () => {
    let data = {
      user_id: localStorage.getItem("user_id")
    }
    console.log("for ", data, " we are getting questions")
    axios.post("http://localhost:3001/getUserQuestions", data)
      .then((response) => {
        console.log("Status Code : ", response.status);
        if (response.data.length > 0) {
          console.log(response.data)
          // var len = response.data.length;
          // var i = 0;
          // for (i = 0; i < len; i++) {
          //   alert(i)
          this.state.questions = response.data
          console.log("questions", this.state.questions)
          // }
        }
      })

  }
  render() {
    if (this.state.questions) {
      var dataSize = this.state.questions.length;
    }
    if (dataSize > 0) {
      // let view = <div></div>
      this.view = this.state.questions.map(question => {
        return (
          <div>          <li><a class="ques" href="#">{question.question}</a>
            <br></br>
            <i class="fal fa-edit"></i>
            <span >Answer</span>
            <div style={{ float: "right" }}>
              <i class="fal fa-arrow-alt-down fa-lg" id="downvote"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fab fa-facebook fa-lg" id ="shareOnFacebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fab fa-twitter fa-lg" id="shareOnTwitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fal fa-share fa-lg" id="more"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fal fa-ellipsis-h-alt fa-lg" id="dots"></i>
            </div>
            <hr></hr>

          </li>
            <Tooltip placement="top" isOpen={this.state.downvoteTool} target="downvote" toggle={this.downvoteToolTip}>
              Downvote
            </Tooltip>
            <Tooltip placement="top" isOpen={this.state.facbookTool} target="shareOnFacebook" toggle={this.facebookToolTip}>
              Share On Facebbok
            </Tooltip>
            <Tooltip placement="top" isOpen={this.state.twitterTool} target="shareOnTwitter" toggle={this.twitterToolTip}>
              Share On Twitter
            </Tooltip>
            <Tooltip placement="top" isOpen={this.state.moreTool} target="more" toggle={this.moreToolTip}>
              More Sharing Options
            </Tooltip>
            <Tooltip placement="top" isOpen={this.state.dotsTool} target="dots" toggle={this.dotsToolTip}>
              More 
            </Tooltip>

          </div>

        )

      })
    }
    else {
      return (
        this.state.did = <div></div>
      )
    }
    return (
      <div>
        <p>{dataSize} Questions</p>
        <hr></hr>
        {dataSize > 0 ? (<div style={{ marginLeft: "-8%" }}>
          {/* <h3 class="font1"> */}
          <ul>{this.view}</ul>
          {/* </h3> */}
          <hr></hr>
        </div>
        ) : (
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
