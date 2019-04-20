import React, { Component } from 'react'
import '../dashboard/navbar.css'
import '../../fontawesome/css/all.css';
export default class navbar extends Component {
  render() {
    return (
      <div>
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white",height:"50px"}}>
      <div><a href="http://localhost:3000/"><img src={require('../../images/quora.JPG')} style={{ height: "30%", width: "20%",marginLeft:"40%" }} alt="Quora LOGO"></img></a></div>
  <a class="navbar-brand" href="#"></a>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"-200px"}}>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#" style={{fontSize:"13px",marginLeft:"0px"}}><i class="fal fa-book fa-2x"></i><span style={{fontSize:"15px",padding:"4px"}}>Home</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  style={{fontSize:"13px",marginLeft:"0px"}}><i class="fal fa-pencil-square fa-2x"></i><span style={{fontSize:"15px",padding:"4px"}}>Answer</span></a>
      </li>

      <li class="nav-item ">
        <a class="nav-link" href="#"  style={{fontSize:"13px",marginLeft:"0px"}}><i class="fal fa-users fa-2x"></i><span style={{fontSize:"15px",padding:"4px"}}>Spaces</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{fontSize:"13px",marginLeft:"0px"}}><i class="fal fa-bell fa-2x"></i><span style={{fontSize:"15px",padding:"4px"}}>Notifications</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">

      <input class="form-control mr-sm-2"  style={{height:"30px"}} type="search" placeholder="Search" aria-label="Search"></input>
      <a href="#" style={{marginLeft:"60px"}}><img src={require('../../images/profile.JPG')} style={{ height: "40px", width: "40px"}} alt="Quora LOGO"></img></a>
      
      <button class="btn btn-default" style={{marginLeft:"10px",height:"35px",padding:"6px",backgroundColor:"#B92B27",color:"white"}}>Add Question or Link</button>

    </form>
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
