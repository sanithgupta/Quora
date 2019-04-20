import React, { Component } from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../dashboard/navbar.css'
import '../../fontawesome/css/all.css';
export default class navbar extends Component {
  render() {

    return (
      <div>
        <nav class="navbar navbar-default" style={{ backgroundColor: "white" }}>
          <div class="container-fluid">
            <div class="navbar-header">
              {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>  
      </button> */}

              <div><a href="http://localhost:3000/"><img src={require('../../images/quora.JPG')} style={{ height: "30%", width: "20%", marginLeft: "40%" }} alt="Quora LOGO"></img></a></div>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav" style={{ marginLeft: "-12%" }}>
                <li><a href="#"><i class="fal fa-book fa-2x"></i><span style={{ fontSize: "15px", marginLeft: "4px" }}>Home</span> </a></li>
                <li><a href="#"><i class="fal fa-pencil-square fa-2x"></i><span style={{ fontSize: "15px", marginLeft: "4px" }}>Answer</span></a></li>
                <li><a href="#"><i class="fal fa-users fa-2x"></i><span style={{ fontSize: "15px", marginLeft: "4px" }}>Spaces</span></a></li>
                <li><a href="#"><i class="fal fa-bell fa-2x"></i><span style={{ fontSize: "15px", marginLeft: "4px" }}>Notifications</span></a></li>
              </ul>
              <form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search Quora"></input>
                </div>
                {/* <Button id="UncontrolledPopover" type="button" class="buttonRound"> */}
                  <a href="/profile" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">
                    <img src={require('../../images/profile.JPG')} style={{ height: "10%", width: "10%", marginLeft: "1%" }} alt="Quora LOGO"></img>
                  </a>
                {/* </Button> */}
                {/* <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                </UncontrolledPopover> */}
                <button class="btn btn-danger" style={{ marginLeft: "30px" }}>Add Question or Link</button>

              </form>

            </div>
          </div>
        </nav>




        {/* <nav class="navbar navbar-default" style={{height:"30px"}}>
 
   
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

</nav> */}
      </div>

    )
  }
}
