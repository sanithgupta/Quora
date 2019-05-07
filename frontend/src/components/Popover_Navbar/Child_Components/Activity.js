import React, { Component } from 'react'
import axios from 'axios';

export class Activity extends Component {
  constructor() {
    super();

    this.state = {
// activity:[{user_id:"101",type:"QuestionsAsked",date_time:"05-04-2019",question:"When police officers stop people in a vehicle, why do they touch the taillight or the back of the car as they're walking towards it?",question_id:"201"},{user_id:"102",type:"QuestionsAnswered",date_time:"05-04-2019",question:"What is the best Git client for Mac OS X?",question_id:"201",answer:"I have recently started using Git Kraken by Axosoft for my personal projects and I am really amazed by how great it is. It is cross platform and is available for Linux, Mac and Windows.",answer_id:"202"},{user_id:"103",type:"TopicFollowed",date_time:"05-04-2019",topic_name:"Movies"},{user_id:"103",type:"TopicFollowed",date_time:"05-04-2019",topic_name:"Entertainment"},{user_id:"103",type:"TopicFollowed",date_time:"05-04-2019",topic_name:"Science"},{user_id:"103",type:"TopicFollowed",date_time:"05-04-2019",topic_name:"Technology"}]
activity:[]  ,
activityoption:"None" ,
dateoption:"oldestFirst",
prevcount:0,
nextcount:4,
}
  }
  activityfilter=(e)=>{
    this.setState({
      activityoption:e.target.value
    })
   
  }
  datefilter=(e)=>{
this.setState({
  dateoption:e.target.value
})
  }
  searchActivity=async(e)=>{
    e.preventDefault();
    axios.defaults.withCredentials = true;
    const data = {
        user_id:localStorage.getItem('user_id'),
        activityoption:this.state.activityoption,
        dateoption:this.state.dateoption
    }
  
    await axios.post('http://localhost:3001/activity',data)
    .then(response => {
        // alert("after response")
        console.log("response",response.data)
          this.setState({
            activity:response.data,
            nextcount:4,
            prevcount:0
          })
          console.log("answers",this.state.activity)
    })

  }

  next=(e)=>{
    if(this.state.nextcount<this.state.activity.length){
    this.setState({
      nextcount:this.state.nextcount+4,
      prevcount:this.state.prevcount+4
    })
  }
    if(this.state.nextcount>=this.state.activity.length){
     
      alert("no next items")

    }
    

  }
  previous=(e)=>{
    if(this.state.prevcount>1){
    this.setState({
      nextcount:this.state.nextcount-4,
      prevcount:this.state.prevcount-4
    })
  }
    if(this.state.prevcount<=0){  
      alert("no previous items")
    }
   

  }
  async componentDidMount(){
    axios.defaults.withCredentials = true;
    const data = {
        user_id:localStorage.getItem('user_id'),
        activityoption:this.state.activityoption,
        dateoption:this.state.dateoption
    }
  
    await axios.post('http://localhost:3001/activity',data)
    .then(response => {
        // alert("after response")
        console.log("response",response.data)
          this.setState({
            activity:response.data,
            
          })

          console.log("answers",this.state.activity)
    })

  }
  render() {
    let activityBlock = null
    activityBlock = this.state.activity.map((task,idx)=>{
      if(idx>=this.state.prevcount && idx<this.state.nextcount){
      switch(task.type){
        case "QuestionsAsked":
        return(
          <div>
            
              <div class="font_style">
             
                <div class="font_white border" style={{marginTop:"10px",width:"100%"}}>
                <label class="text_color">User asked this Question on {task.date_time.substring(0,10)}</label><br></br>
                <label class="profile_question_size"><a onClick ={()=>{localStorage.setItem('questionclicked',task.question_id)}} href="/viewanswers"  style={{color:"black"}}>{task.question}</a></label><br></br>
                {/* <a onClick={this.answerBlock.bind(this,idx)}><i class="fal fa-edit"></i>&nbsp;Answer</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   
                   <a onClick={this.followQuestion} style={{cursor:"pointer"}}><i class="fal fa-rss"></i>&nbsp;Follow</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <span><i class="fal fa-user"></i>&nbsp;Request</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i class="fal fa-comment"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <i class="fal fa-arrow-alt-down"></i>
                   {/* <div style={{width:value*2,height:value,overflow:"hidden"}}>  */}
                   {/* {answerDivBlock} */}
                   {/* </div> */}
       </div>
       </div>
      
            
          </div>
        )
     
        case "QuestionsAnswered":
        return (
          <div class="font_style">
                  <div class="font_white border" style={{marginTop:"10px"}}>
                  <label class="text_color">User Answered this answer on {task.date_time.substring(0,10)}</label>
                  <label class="question_size"><a onClick ={()=>{localStorage.setItem('questionclicked',task.answer_id)}} href="/viewanswers"  style={{color:"black"}}>{task.question}</a></label><br></br>
                  <div class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
             {task.user_name}</div>
                  
                  <label class="date_size text_color">Answered {task.date_time.substring(0,10)}</label><br></br>
                 <span  style={{fontWeight:"400",color:"#333D46"}}>{task.answer}</span><br></br>
 
         
         </div>
             
          </div>
         )
        case "TopicFollowed":
        return(
          <div>
            
              <div class="font_style">
             
                <div class="font_white border" style={{marginTop:"10px",width:"100%"}}>
                <label class="text_color"> User Followed this Topic on {task.date_time.substring(0,10)}</label><br></br>
                <label class="profile_question_size"><a  href="/viewanswers"  style={{color:"black"}}>{task.topic_name}</a></label><br></br>
              
       </div>
       </div>
      
            
          </div>
        )
      }
    }
    })
    return (
      <div>
        <div>
        <form>
          <div class="form-group container" style={{width:"800px"}}>
            <div class = "row">
            <div class="col col-sm-3">
            <label>Search by Activity</label>
            </div>
            <div class="col col-sm-2">
            <select name="activityfilter"  onChange = {this.activityfilter} >
                  <option value="None">None</option>
                  <option value="QuestionsAsked">QuestionsAsked</option>
                  <option value="QuestionsAnswered">QuestionsAnswered</option>
                  <option value="TopicFollowed">TopicFollowed</option>
                  
                </select>
            </div>
            <div class="col col-sm-1"></div>
            <div class="col col-sm-2">
            <select name="datefilter"  onChange = {this.datefilter} >
                  {/* <option value="None">None</option> */}
                  <option value="oldestFirst">oldestFirst</option> 
                  <option value="NewestFirst">NewestFirst</option> 

                </select>
            </div>
            <div class="col col-sm-1"></div>
            <div class="col col-sm-3">
            <button onClick={this.searchActivity} class="btn btn-primary">Search</button>
            </div>
            </div>
          </div>
        
</form>
        </div>

       {activityBlock}
       <button onClick={this.previous}   class="btn btn-primary" type="button" style={{marginLeft:"0px",marginBottom:"20px"}}>Previous</button>

      <button onClick={this.next}  class="btn btn-primary" type="button" style={{marginLeft:"350px",marginBottom:"20px"}}>Next</button>
                         
      </div>
    )
  }
}

export default Activity
