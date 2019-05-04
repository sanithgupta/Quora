import React, { Component } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import '../dashboard/navbar.css'
import '../../fontawesome/css/all.css';
import { Redirect } from 'react-router';
import axios from 'axios';


export default class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen: false,
      redirectVar: "",
      question: "",
      addQuestionModal: false,
      nestedModal: false,
      closeAll: false,
      topics: [],
    };
    this.toggle = this.toggle.bind(this);
    // this.modal = this.modal.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

  }

  componentDidMount = () => {
    let data = {
      email_id: localStorage.getItem('email_id')
    }
    console.log("In getting user details", data)
    axios.post("http://localhost:3001/getUserDetails", data)
      .then((response) => {
        console.log("Status Code : ", response.status);
        console.log(response.data)
        console.log(response.data[0]._id)
        localStorage.setItem('user_id', response.data[0]._id)
        let full_name = response.data[0].first_name + " " + response.data[0].last_name;
        console.log(full_name)
        localStorage.setItem('Full_Name', full_name)
      })
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }
  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  loggingout = (e) => {
    console.log("In logout method")
    this.setState({
      redirectVar: <Redirect to='/login' />

    })
    localStorage.clear();

  }

  modal = (e) => {
    e.preventDefault();
    console.log("In Modal function")
    // alert(this.state.addQuestionModal)
    console.log("state", this.state.addQuestionModal)
    this.setState(prevState => ({
      addQuestionModal: !prevState.addQuestionModal
    }));
    // alert(this.state.addQuestionModal)
  }


  handleChange = async (e) => {
    console.log("In handle change")
    await this.setState({

      ...this.state,
      [e.target.name]: e.target.value,

    });
  }
  postQuestion = (e) => {
    e.preventDefault();
    console.log("This is posted question:", this.state.question)
    let questiondata = {
      question: this.state.question,
      user_id: localStorage.getItem('user_id'),
      topics: this.state.topics,
    }
    console.log("Inserting Question for userid", questiondata)
    axios.get("http://localhost:3001/Addquestion", {
      params:
      {
        question: this.state.question,
        user_id: localStorage.getItem('user_id'),
        topics: this.state.topics,
      }
    })
      .then(response => {
        console.log("Status Code : ", response.status);
        this.toggleAll();
      })
  }

  handleChange1 = async (e) => {
    let var1 = {
      'topic': e.target.name,
      'response': e.target.value
    }
    let present = 0
    await this.state.topics.map((responses, index) => {
      if (responses.topic == var1.topic) {
        this.state.topics.splice(index, 1)
        present = 1
      }
    })
    if (present == 0) {
      await this.state.topics.push(var1)
    }
    console.log(this.state.topics)
  }


  render() {
    return (
      <div>
        {this.state.redirectVar}

        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white", height: "50px" }}>
          <div><a href="http://localhost:3000/"><img src={require('../../images/quora.JPG')} style={{ height: "30%", width: "20%", marginLeft: "40%" }} alt="Quora LOGO"></img></a></div>
          <a class="navbar-brand" href="#"></a>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "-200px" }}>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/" class="nav-link" href="#" style={{ fontSize: "13px", marginLeft: "0px" }}><i class="fal fa-book fa-2x"></i><span style={{ fontSize: "15px", padding: "4px" }}>Home</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ fontSize: "13px", marginLeft: "0px" }}><i class="fal fa-pencil-square fa-2x"></i><span style={{ fontSize: "15px", padding: "4px" }}>Answer</span></a>
              </li>

              <li class="nav-item ">
                <a class="nav-link" href="#" style={{ fontSize: "13px", marginLeft: "0px" }}><i class="fal fa-users fa-2x"></i><span style={{ fontSize: "15px", padding: "4px" }}>Spaces</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ fontSize: "13px", marginLeft: "0px" }}><i class="fal fa-bell fa-2x"></i><span style={{ fontSize: "15px", padding: "4px" }}>Notifications</span></a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">

              <input class="form-control mr-sm-2" style={{ height: "30px" }} type="search" placeholder="Search" aria-label="Search"></input>
              <a id="Popover1" href="#" style={{ marginLeft: "60px" }}><img src={require('../../images/profile.JPG')} style={{ height: "40px", width: "40px" }} alt="Quora LOGO"></img></a>

              <button onClick={this.modal} class="btn btn-default" style={{ marginLeft: "10px", height: "35px", padding: "6px", backgroundColor: "#B92B27", color: "white" }}>Add Question or Link</button>

              <Modal isOpen={this.state.addQuestionModal} toggle={this.modal} >
                <ModalHeader toggle={this.modal}>Add Question</ModalHeader>
                <ModalBody>
                  <div class=" container row">
                    <img src={require('../../images/profile.JPG')} style={{ height: "40px", width: "40px" }} alt="Quora LOGO"></img>
                    <p class="font-weight-light" style={{ marginTop: "1.5%" }}>User Asked</p>
                  </div>
                  <textarea class="textareaclass font-weight-bold" onChange={this.handleChange} name="question" placeholder='start your question with "What", "How", "Why", etc.'></textarea>
                </ModalBody>
                <ModalFooter>
                  <a href="#" style={{ color: "#AAAAAA" }} onClick={this.modal}>Cancel</a>
                  <Button color="primary" onClick={this.toggleNested}>Select Topics</Button>{' '}

                  <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.modal : undefined}>
                    <ModalHeader>{this.state.question}</ModalHeader>
                    <ModalBody>
                      <div class="container">
                        <div class="col-sm-5">
                          <div class="row">
                            <Input type="checkbox" name="Topic_1" value="Technology" onChange={this.handleChange1}></Input>
                            <p>Technology</p>
                          </div>
                          <div class="row">
                            <Input type="checkbox" name="Topic_2" value="Movies" onChange={this.handleChange1}></Input>
                            <p>Movies</p>
                          </div>
                          <div class="row">
                            <Input type="checkbox" name="Topic_3" value="Cooking" onChange={this.handleChange1}></Input>
                            <p>Cooking</p>
                          </div>
                          <div class="row">
                            <Input type="checkbox" name="Topic_4" value="Photography" onChange={this.handleChange1}></Input>
                            <p>Photography</p>
                          </div>
                          <div class="row">
                            <Input type="checkbox" name="Topic_5" value="Health" onChange={this.handleChange1}></Input>
                            <p>Health</p>
                          </div>

                        </div>
                        <div class="col-sm-5">
                          <div class="row">

                          </div>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <a href="#" style={{ color: "#AAAAAA" }} onClick={this.toggleAll}>Cancel</a>
                      <Button color="primary" onClick={this.postQuestion}>Post Question</Button>{' '}

                    </ModalFooter>
                  </Modal>

                </ModalFooter>
              </Modal>

            </form>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
              <PopoverHeader>
                <ul class="widthHeight" style={{ marginLeft: "-20%" }}>
                  <a style={{ color: "#3775B1", marginTop: "-6px" }} class="less" href="/profile"> <li >Profile</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"><li class="liStyle">Blogs</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"> <li class="liStyle">Messages</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"><li class="liStyle">Your Content</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"><li class="liStyle">Stats</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"><li class="liStyle">Ads Manager</li></a>
                  <hr class="hrClass"></hr>
                  <a style={{ color: "#3775B1" }} class="less" href="#"><li class="liStyle">Settings</li></a>
                </ul>
              </PopoverHeader>
              <PopoverBody>
                <ul style={{ marginLeft: "-20%", marginTop: "-10px" }}>
                  <li ><a class="aclass" href="#">Help</a><span> . </span></li>
                  <hr class="hrClass"></hr>
                  <li class="liStyle">
                    <a class="aclass" href="#">About</a>
                    <span> . </span>
                    <a class="aclass" href="#">Carrers</a>
                    <span> . </span>
                    <a class="aclass" href="#">Terms</a>
                    <span> . </span>
                  </li>
                  <li>
                    <a class="aclass" href="#">Privacy</a>
                    <span> . </span>
                    <a class="aclass" href="#">Accetable Use</a>
                    <span> . </span>
                  </li>
                  <li>
                    <a class="aclass" href="#">Businesses</a>
                    <span> . </span>
                    <a class="aclass" href="#">Languages</a>
                    <span> . </span>
                  </li>
                  <li>
                    <a class="aclass" onClick={this.loggingout} href="#">Logout</a>
                  </li>
                </ul>
              </PopoverBody>
            </Popover>
          </div>
        </nav>




        {/* <nav class="navbar navbar-expand-sm " style={{backgroundColor:"white"}}>
  <div class="container-fluid">
  <div class="row">
    <div class="navbar-header"> */}
        {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>  
      </button> */}
        {/*       
      <div><a href="http://localhost:3000/"><img src={require('../../images/quora.JPG')} style={{ height: "30%", width: "20%",marginLeft:"40%" }} alt="Quora LOGO"></img></a></div>
    </div>     */}
        {/* <div class="collapse navbar-collapse"> */}
        {/* <ul class="navbar-nav" style={{marginLeft:"-12%"}}>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fal fa-book fa-2x"></i><span style={{fontSize:"15px",marginLeft:"4px"}}>Home</span> </a></li>
        <li class="nav-item"><a class="nav-link"  href="#"><i class="fal fa-pencil-square fa-2x"></i><span style={{fontSize:"15px",marginLeft:"4px"}}>Answer</span></a></li>
        <li class="nav-item"><a class="nav-link"  href="#"><i class="fal fa-users fa-2x"></i><span style={{fontSize:"15px",marginLeft:"4px"}}>Spaces</span></a></li>
        <li class="nav-item"><a class="nav-link"  href="#"><i class="fal fa-bell fa-2x"></i><span style={{fontSize:"15px",marginLeft:"4px"}}>Notifications</span></a></li>
      </ul>
       */}

        {/* <input type="text"  placeholder="Search Quora"></input> */}

        {/* <a href="#"><img src={require('../../images/profile.JPG')} style={{ height: "60px", width: "60px"}} alt="Quora LOGO"></img></a>
        <button class="btn btn-default" style={{marginLeft:"30px",backgroundColor:"#B92B27",color:"white"}}>Add Question or Link</button>
         */}

        {/* </div> */}
        {/* </div> */}
      </div>
      // </nav>




      /* <nav class="navbar navbar-default" style={{height:"30px"}}>
 
 
  <div class="navbar-header">
  <div class="col col-sm-1"></div>
  <div class="col col-sm-9">
    <a class="navbar-brand brandcol" href="#">Quora</a>
  </div>

  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
      <li><a href="#">Answer</a></li>
      <li><a href="#">Spaces</a></li>
      <li><a href="#">Notifications</a></li>

    
      <input type="text" class="form-control" style={{width:"60%"}} placeholder="Search"></input>

      <button class="btn btn-danger">Add Question or Link</button>
      
    </ul>
    </div>
    <form class="navbar-form navbar-left">
      <div class="form-group">
        
      </div>  
    </form>
   
  </div>

</nav> */
      // </div>

    )
  }
}
