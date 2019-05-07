import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import axios from 'axios';

export default class viewanswers extends Component {
    constructor() {
        super();
    
        this.state = {
        //  answers:[{question_id:"10",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"101",answer:"Well to put things in the right perspective, consider this: before a fight, a fighter goes through the meticulous After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc.  and extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.",user_id:"10",user_name:"Madhusudhan",owner_status:"active",is_anonymous:false,upvotes:[{user_id:"11",user_id:"12"}],downvotes:[{user_id:"11",user_id:"12"}],comments:[{user_id:"10",comment:"this is great",date_time:"04202019",user_name:"Jali"}],date_time:"04202019"},{question_id:"10",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"102",answer:"Well to put things in the right perspective, consider this: before a fight, a fighter goes through the meticulous and After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc. extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.",user_id:"11",user_name:"Koushik",owner_status:"active",is_anonymous:false,upvotes:[{user_id:"12",user_id:"13"}],downvotes:[{user_id:"12",user_id:"13"}],comments:[{user_id:"11",comment:"this is super",date_time:"04202019",user_name:"Jali"}],date_time:"04202019"},{question_id:"10",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"101",answer:"Well to put things in the right perspective, After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc.  consider this: before a fight, a fighter goes through the meticulous and extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.",user_id:"11",user_name:"Naveen",owner_status:"active",is_anonymous:false,upvotes:[{user_id:"10",user_id:"12"}],downvotes:[{user_id:"10",user_id:"12"}],comments:[{user_id:"10",comment:"this is nothing",date_time:"04202019",user_name:"Jali"},{user_id:"11",comment:"this is super",date_time:"04202019",user_name:"Krishna"}],date_time:"04202019"}],
    answers:"",
    commentText:"",
    commentStatus:"",
    temp:0,
    bookmark_check:"Bookmark",
    answers_bookmarked:[],
    answerBlock:"0px",
    answerBlock1:["a"],
    answertext:"",
    ansvis:"Answer",
    anonymous:false,
    question_val:""

    
    // bookmark_check:"checked"
   
    }

    }
    commentChangeHandler=(e)=>{
        this.setState({
            commentText:e.target.value
        })
    }
     addComment=async(val,e)=>{
        e.preventDefault();
        alert("inside comment")
        console.log("comment",val)
        const comment_data={
            answer_id:val._id,
            user_id:localStorage.getItem('user_id'),
            user_name:localStorage.getItem('Full_Name'),
            comment:this.state.commentText
        }
        await axios.post('http://localhost:3001/add_comment_to_answer',comment_data)
        .then(response => {
            // alert("after response")
            // console.log("response",response.data)
              this.setState({
                commentStatus:"updated"
              })
              window.location.reload();
              console.log("answers",this.state.commentStatus)
        })
    }
    downvote=async(val,e)=>{
        alert("upvote")
        e.preventDefault();
    
        const upvote_data={
            answerId:val,
            user_id:localStorage.getItem('user_id')
        }
        
        await axios.post('http://localhost:3001/downvote',upvote_data)
        .then(response => {
            // alert("after response")
            // console.log("response",response.data)
            //   this.setState({
            //     commentStatus:"updated"
            //   })
              window.location.reload();
            //   console.log("answers",this.state.commentStatus)
        })
    }
    upvote=async(val,e)=>{
        alert("upvote")
        e.preventDefault();
     
        const upvote_data={
            answerId:val,
            user_id:localStorage.getItem('user_id')
        }
        
        await axios.post('http://localhost:3001/upvote',upvote_data)
        .then(response => {
            // alert("after response")
            // console.log("response",response.data)
            //   this.setState({
            //     commentStatus:"updated"
            //   })
              window.location.reload();
            //   console.log("answers",this.state.commentStatus)
        })

    }
    bookmark_answer=(val,bookmark_check,e)=>{
        // alert(bookmark_check)
        e.preventDefault();
    //  alert(val)
        const bookmark_data={
            answer_id:val,
            bookmark_check:bookmark_check,
            user_id:localStorage.getItem('user_id')
        }
        
         axios.post('http://localhost:3001/answers_bookmarked',bookmark_data)
        .then(response => {
            // alert("after response")
            // console.log("response",response.data)
            //   this.setState({
            //     commentStatus:"updated"
            //   })
         
              window.location.reload();
            //   console.log("answers",this.state.commentStatus)
        })
    }
    answerBlock=(e)=>{
        if(this.state.answerBlock=='0px'){
       this.setState({
           answerBlock:"390px"

       })
    }
    else{
        this.setState({
            answerBlock:"0px"
 
        })
    }
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
                // is_anonymous:this.state.anonymous,
                is_anonymous:this.state.anonymous,
                question: this.state.question_val
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
    anonymous=(e)=>{
        this.setState({anonymous: !this.state.anonymous});
    }
    followQuestion=async(e)=>{
        e.preventDefault();
        //  alert(val)
            const follow_data={
                questionid:localStorage.getItem('questionclicked'),
                user_id:localStorage.getItem('user_id')
            }
            
             await axios.post('http://localhost:3001/followquestion',follow_data)
            .then(response => {
                console.log(response.status)
                if(response.status=="201"){
                    alert("unfollowed successfully")
                }
                else{
                    alert("followed")

                }
                // alert("after response")
                // console.log("response",response.data)
                //   this.setState({
                //     commentStatus:"updated"
                //   })
             
                  window.location.reload();
                //   console.log("answers",this.state.commentStatus)
            })
    }
    textanswer=(e)=>{
        this.setState({
            answertext:e.target.value
        })
    }
    handleScroll=(e)=>{
        alert("hi")
    }
    async componentDidMount(){
       
    // alert(localStorage.getItem('questionclicked'))
        axios.defaults.withCredentials = true;
        const data = {
            question_id:localStorage.getItem('questionclicked'),
            user_id:localStorage.getItem('user_id')
        }
        // console.log("data",data)
        // alert(data)
        await axios.post('http://localhost:3001/get_answers',data)
        .then(response => {
            // alert("after response")
            console.log("response",response.data)
              this.setState({
                answers:response.data,
                
              })
              console.log("answers",this.state.answers)
        })

        const get_bookmark_data = {
            user_id:localStorage.getItem('user_id')
        }
        await axios.post('http://localhost:3001/get_answers_bookmarked',get_bookmark_data)
        .then(response => {
            // alert("after response")
            console.log("response",response.data)
              this.setState({
                answers_bookmarked:response.data,
                
              })
              console.log("answers bookmarked",this.state.answers_bookmarked)
        })

      }
    render() {
// alert(localStorage.getItem('questionclicked'))
        let answerDivBlock = null;
      
        answerDivBlock = this.state.answerBlock1.map(block=>{
            // alert(this.state.answerBlock)
            return(
               <div style={{width:this.state.answerBlock*2,height:this.state.answerBlock,overflow:"hidden"}}>
                  <div class="row" >
                  
                   <div class="col col-sm-1" >
               <span class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
               <span class="col col-sm-2" style={{marginLeft:"-15px"}}>{localStorage.getItem('Full_Name')}
            </span>
               </div>
               <div class="border" style={{width:"82.5%",color:"#666666"}}>
               <i style={{fontWeight:"700"}} class="fal fa-bold"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"700"}} class="fal fa-italic"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"700"}} class="fal fa-list-ol"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i  style={{fontWeight:"700"}} class="fal fa-list-ul"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
               <i  style={{fontWeight:"500"}} class="fal fa-video"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-images"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-link"></i>&nbsp;&nbsp;&nbsp;&nbsp;
               <i style={{fontWeight:"500"}} class="fal fa-ellipsis-h-alt"></i>&nbsp;&nbsp;&nbsp;
              
               <input type="radio" onChange={this.anonymous} defaultChecked={this.state.anonymous}></input>Anonymous

               </div>
                   <textarea  onChange={this.textanswer} rows="9" cols="70"></textarea>
                   <br></br>
                   <button onClick={this.submitAnswer} class="btn btn-default">Submit Answer</button>
               </div>
            )
        })
        let question_val = null;
        
console.log(this.state.commentStatus)

        let answerdiv = null;
        if(this.state.answers){
            question_val = this.state.answers.question_details[0].question
            this.state.question_val = question_val
         answerdiv = this.state.answers.answer_details.map(answer => {
             var user_name = answer.user_name
          
             if(answer.is_anonymous=="true"){
                user_name = "Guest"
             }
            
          var bookmark_check = "Bookmark"
          if(answer.user_id==localStorage.getItem('user_id')){
              this.state.ansvis="Edit"
          }
            this.state.answers_bookmarked.map(booked=>{
                console.log("booked",booked)
                // alert(answer._id)
                if(booked.answer_id==answer._id){
                    
                    bookmark_check = "Bookmarked"
                }
            })
            // alert(this.state.bookmark_check)
   let commentdiv = null
   commentdiv = answer.comments.map(comment=>{
       return(
           <div>
               
                 <div class="row" >
                   <div class="col col-sm-1" style={{marginLeft:"0px"}}>
               <span class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
               <div class="col col-sm-6" style={{marginLeft:"-15px"}}>{comment.user_name}
                <br></br>
                 <div style={{marginTop:"-10px"}}><label class="date_size text_color" >Answered {comment.date_time.substring(1,10)}</label><br></br></div>
                 </div>
                
               </div>
               <label>{comment.comment}</label>
           </div>
       )
   })
            return (
              
             <div style={{padding:"3px"}}>
               <div>
                   <div class="row" >
                   <div class="col col-sm-1" style={{marginLeft:"-20px"}}>
               <span class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
               <div class="col col-sm-6" style={{marginLeft:"-15px"}}>{user_name}
                <br></br>
                 <div style={{marginTop:"-10px"}}><label class="date_size text_color" >Answered {answer.date_time.substring(0,10)}</label><br></br></div>
                 </div>
                 </div>
        
                <pre style={{whiteSpace:"pre-wrap"}}><span  style={{fontWeight:"400",color:"#333D46"}}>{answer.answer}</span></pre><br></br>
                <br></br>
               <div style={{marginLeft:"-16px"}}>
               <a onClick={this.upvote.bind(this,answer._id)}><i class="fal fa-arrow-alt-up">&nbsp;&nbsp;</i><label style={{cursor:"pointer"}}>Upvote {answer.user_id_upvoted.length} </label></a>&nbsp;&nbsp;&nbsp;&nbsp;
               <i class="fal fa-share-alt"></i>&nbsp;&nbsp;<label>Share</label>&nbsp;&nbsp;&nbsp;&nbsp;
                   <a onClick={this.downvote.bind(this,answer._id)} style={{cursor:"pointer"}}><i class="fal fa-arrow-alt-down"></i>&nbsp;&nbsp;Downvote</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <input type="checkbox"  onChange={this.bookmark_answer.bind(this,answer._id)} checked="true" value="bookmark"></input>Bookmark&nbsp;&nbsp;&nbsp;&nbsp; */}
                
                <a onClick={this.bookmark_answer.bind(this,answer._id,bookmark_check)} style={{cursor:"pointer"}}>{bookmark_check}</a>
               </div >

               </div>
               <div class="border bg" style={{marginLeft:"-16px"}}>
               <form class="form-inline" style={{opacity:"0.7"}}>
               
             <input class="form-control" onChange={this.commentChangeHandler} style={{width:"60%",height:"35px",borderRadius:"25px"}} type="text" placeholder="Add Comment"></input>&nbsp;&nbsp;
                   <button class="btn btn-primary" onClick={this.addComment.bind(this,answer)} style={{borderRadius:"10px",height:"35px",padding:"6px"}}>Add Comment</button>
               </form>
               <br></br>
               {commentdiv}

               </div>
               
               <hr></hr>
             </div>
            )
          });
        }

        return (
            <div >
                <div class="bg" >
                    <Navbar />
                 <hr></hr>
                </div>
                <div class="container">
                <div class="row">
                <div class="col col-sm-1"></div>
                <div class="col col-sm-7 ">
                <div class="question_size">
                    {question_val}
                    
                    </div>
                <div>
                    <a  onClick={this.answerBlock}><i class="fal fa-edit"></i>&nbsp;{this.state.ansvis}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                    <a onClick={this.followQuestion} style={{cursor:"pointer"}}><i class="fal fa-rss"></i>&nbsp;Follow</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><i class="fal fa-user"></i>&nbsp;Request</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fal fa-comment"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fal fa-arrow-alt-down"></i>

                <hr></hr>
                {answerDivBlock}
                </div>
                    </div>
                    <div class="col col-sm-4">
                    
                    </div>

                </div>

              
                <div class="row">
                <div class="col col-sm-1">
                </div>
                <div class="col col-sm-7">
                <div >
                        {answerdiv}
                        </div>
                </div>

                <div class="col col-sm-4">
                
      <img src={require('../../images/related_questions.JPG')} style={{ height: "600px", width: "350px" }} alt="Questions"></img>
                </div>
                  
                        </div>
                        </div>
            </div>
        )
    }
}
