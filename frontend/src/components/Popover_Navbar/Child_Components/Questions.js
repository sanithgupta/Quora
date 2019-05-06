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
      answerBlock:"0px",
    answerBlock1:["a"],
    tempval:null,
    answertext:"",
    temp:0,
    temp1:0,
      questions: []
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
  submitAnswer=(e)=>{
    e.preventDefault();
    //  alert(val)
        const answer_data={
            question_id:localStorage.getItem('questionclicked'),
            answer:this.state.answertext,
            user_id:localStorage.getItem('user_id'),
            user_name:localStorage.getItem('Full_Name'),
            profile_credential:"",
            is_anonymous:false
        }
        
         axios.post('http://localhost:3001/add_answer',answer_data)
        .then(response => {
            // alert("after response")
            // console.log("response",response.data)
            //   this.setState({
            //     commentStatus:"updated"
            //   })
            alert("answered successfully")
         
              window.location.reload();
            //   console.log("answers",this.state.commentStatus)
        })
}
textanswer=(e)=>{
        this.setState({
            answertext:e.target.value
        })
    }
  answerBlock=async(val,e)=>{
    e.preventDefault();

    if(this.state.tempval!=null){
   
      await this.setState({
        tempval:null
      })
    }
    else{
   
      await this.setState({
        tempval:val
      })
    }
    
    // alert(this.state.value)

  //  await alert(value)
  //   await alert(this.state.value)
    
//     if(this.state.value!="380px"){
//       await this.setState({
//         value:"380px"

//     })
  
// }
// else{
//   // alert("hello")
//   await this.setState({
//     value:"0px"

// })
// }
// await alert(this.state.value)
// await alert("Res")
// alert("val"+this.state.value)
}
  componentDidMount = async() => {
  
    let data = {
      user_id: localStorage.getItem("user_id")
    }
    console.log("for ", data, " we are getting questions")
    await axios.post("http://localhost:3001/getUserQuestions", data)
      .then((response) => {
        console.log("Status Code : ", response.status);

        if (response.data.length > 0) {
          console.log(response.data)
          // var len = response.data.length;
          // var i = 0;
          // for (i = 0; i < len; i++) {
          //   alert(i)
          this.setState({
            questions:response.data
          })
           
          console.log("questions", this.state.questions)
          // }
        }
      })

  }
  render() {
    let question_list = null
    let answerDivBlock = null;
      
        answerDivBlock = this.state.answerBlock1.map((block,index)=>{
          var val = "answerBlock"+this.state.tempval
          // alert(this.state.temp)
         
          // alert("in render")
            // alert(this.state.val)
            return(
               <div >
               <hr></hr>
                  <div class="row" >
                  
                   <div class="col col-sm-1" >
               <span class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
               <span class="col col-sm-5" style={{marginLeft:"-15px"}}>{localStorage.getItem('Full_Name')}
            </span>
               </div>
               <div class="border" style={{width:"99.6%",color:"#666666"}}>
               <i style={{fontWeight:"700"}} class="fal fa-bold"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"700"}} class="fal fa-italic"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"700"}} class="fal fa-list-ol"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i  style={{fontWeight:"700"}} class="fal fa-list-ul"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
               <i  style={{fontWeight:"500"}} class="fal fa-video"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-images"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-link"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-ellipsis-h-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;

               </div>
                   <textarea onChange={this.textanswer} rows="8" cols="67"></textarea>
                   <br></br>
                   <button onClick={this.submitAnswer} class="btn btn-default">Submit Answer</button>
               </div>
            )
        })
    if(this.state.questions.length>0){
    
      question_list = this.state.questions.map((question,idx) => {
      
    if(this.state.temp==0){
      var value="0px"
      this.state.temp = 1
    }
    if(this.state.tempval==idx){
      if(value=="380px"){
        value="0px"
      }
      else{
        value="380px"
      }
     
    }
    else{
      value="0px"
    }
       
       return (
         
        <div class="font_style">
                <div class="font_white border" style={{marginTop:"10px",width:"100%"}}>
                <label class="profile_question_size"><a onClick ={()=>{localStorage.setItem('questionclicked',question._id)}} href="/viewanswers"  style={{color:"black"}}>{question.question}</a></label><br></br>
                <a onClick={this.answerBlock.bind(this,idx)}><i class="fal fa-edit"></i>&nbsp;Answer</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                   <a onClick={this.followQuestion} style={{cursor:"pointer"}}><i class="fal fa-rss"></i>&nbsp;Follow</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span><i class="fal fa-user"></i>&nbsp;Request</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i class="fal fa-comment"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i class="fal fa-arrow-alt-down"></i>
                   <div style={{width:value*2,height:value,overflow:"hidden"}}> 
                   {answerDivBlock}
                   </div>
       
       </div>
           
        </div>
       )
     });
    }
    // if (this.state.questions) {
    //   var dataSize = this.state.questions.length;
    // }
    // if (dataSize > 0) {
    //   // let view = <div></div>
    //   this.view = this.state.questions.map(question => {
    //     return (
    //       <div>          <li><a class="ques" href="#">{question.question}</a>
    //         <br></br>
    //         <i class="fal fa-edit"></i>
    //         <span >Answer</span>
    //         <div style={{ float: "right" }}>
    //           <i class="fal fa-arrow-alt-down fa-lg" id="downvote"></i>&nbsp;&nbsp;&nbsp;&nbsp;
    //         <i class="fab fa-facebook fa-lg" id ="shareOnFacebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
    //         <i class="fab fa-twitter fa-lg" id="shareOnTwitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
    //         <i class="fal fa-share fa-lg" id="more"></i>&nbsp;&nbsp;&nbsp;&nbsp;
    //         <i class="fal fa-ellipsis-h-alt fa-lg" id="dots"></i>
    //         </div>
    //         <hr></hr>

    //       </li>
    //         <Tooltip placement="top" isOpen={this.state.downvoteTool} target="downvote" toggle={this.downvoteToolTip}>
    //           Downvote
    //         </Tooltip>
    //         <Tooltip placement="top" isOpen={this.state.facbookTool} target="shareOnFacebook" toggle={this.facebookToolTip}>
    //           Share On Facebbok
    //         </Tooltip>
    //         <Tooltip placement="top" isOpen={this.state.twitterTool} target="shareOnTwitter" toggle={this.twitterToolTip}>
    //           Share On Twitter
    //         </Tooltip>
    //         <Tooltip placement="top" isOpen={this.state.moreTool} target="more" toggle={this.moreToolTip}>
    //           More Sharing Options
    //         </Tooltip>
    //         <Tooltip placement="top" isOpen={this.state.dotsTool} target="dots" toggle={this.dotsToolTip}>
    //           More 
    //         </Tooltip>

    //       </div>

    //     )

    //   })
    // }
    // else {
    //   return (
    //     this.state.did = <div></div>
    //   )
    // }
    return (
<div style={{width:"600px"}}>
{question_list}

</div>

      
      // <div>
      //   <p>{dataSize} Questions</p>
      //   <hr></hr>
      //   {dataSize > 0 ? (<div style={{ marginLeft: "-8%" }}>
      //     {/* <h3 class="font1"> */}
      //     <ul>{this.view}</ul>
      //     {/* </h3> */}
      //     <hr></hr>
      //   </div>
      //   ) : (
      //       <center>
      //         <div>
      //           <p class="font-weight-light"> User haven't asked Questions yet</p>
      //         </div>
      //       </center>
      //     )
      //   }
      // </div>
    )
  }
}

export default Questions
