import React, { Component } from 'react'
import './home.css';
import axios from 'axios';


export default class userfeed extends Component {
    constructor() {
        super();
    
        this.state = {
          // answerslist:[{question_id:"5cce060282c10639e8bbde53",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"I wasn't called into the school, but called to answer a question about my son (autistic, but wasn't diagnosed at the time). The whole fanily was into Lord of the Rings at the time and I had ordered my son a Lord of the Rings ring off the internet. He wore it all the time and loved it, enough to wear it to his elementary school every day. His teacher called (very upset) while I was at work to let me know there was a problem with my son",date:"04-19-2019"},{question_id:"101",question:"Will the 'Eric Stoltz version' of Back To The Future ever be released?",answer:"I wasn't called into the school, but called to answer a question about my son (autistic, but wasn't diagnosed at the time). The whole fanily was into Lord of the Rings at the time and I had ordered my son a Lord of the Rings ring off the internet. He wore it all the time and loved it, enough to wear it to his elementary school every day. His teacher called (very upset) while I was at work to let me know there was a problem with my son",answer_id:"201",user_id:"11",user_name:"Madhu",date:"04-19-2019"},{question_id:"101",question:"Why don't we have more people from countries like Norway immigrating to America?",answer_id:"201",user_id:"11",user_name:"Naveen",answer:"My family and I were just over in the US on a holiday. We met so many wonderful people and saw some amazing places. This is however not enough for us to choose to move from Norway, and I will try to explain why we’d rather stay here. We were in America for three weeks. That is three of five paid weeks a year that we have a right to by law no matter what occupation we have.",date:"04-19-2019"},{question_id:"101",question:"What is this?",answer_id:"201",user_id:"11",user_name:"Sai",answer:"French Vogue photoshoot: A woman has appeared on the cover of vogue in a safari car with no knickers and it's making us nervous",date:"04-19-2019"}]  
          answerslist:[],
          limit:0,
          temp:0
        }
    }
    get_answers=(e)=>{
  alert(this.props.topics[0].topic_name)

    }
async  componentDidUpdate(){

  // alert("work")
  this.state.answerslist=[]
  axios.defaults.withCredentials = true;
  
  if(this.props.data.topics[0].topic_id==0){
    // alert("data")

      const data = {
          user_id:localStorage.getItem('user_id'),
          limit:this.state.limit
      }
      // console.log("data",data)
    
      await axios.post('http://localhost:3001/get_feed_list',data)
      .then(response => {
          // alert("after response")
          console.log("response",response.data)
          if(this.state.temp==0){
            this.setState({
              answerslist:response.data,
              temp:1
            })
            console.log("answers",this.state.answerslist)
          }
      })

  }
  else{
    // alert("data1")
    const data = {
          user_id:localStorage.getItem('user_id'),
          topic_name:this.props.data.topics[0].topic_name,
          limit:this.state.limit
      }
      // console.log("data",data)
    
      // alert(this.props.topics[0].topic_name)
      await axios.post('http://localhost:3001/get_feed_topic',data)
      .then(response => {
          // alert("after response")
          if(this.state.temp==0){
          console.log("response",response.data)
            this.setState({
              answerslist:response.data,
              temp:1
            })
            console.log("answers",this.state.answerslist)
          }
          else{
            this.state.temp=0
          }
      })

  }
  // }
}
  async componentDidMount(){
    axios.defaults.withCredentials = true;
    // alert(this.props.data.topics[0].topic_id)
    // if(localStorage.getItem('topicclicked')=="userfeed"){


        const data = {
            user_id:localStorage.getItem('user_id'),
            limit:this.state.limit
        }
        // console.log("data",data)
        // alert(data)
        await axios.post('http://localhost:3001/get_feed_list',data)
        .then(response => {
            // alert("after response")
            console.log("response",response.data)
              this.setState({
                answerslist:response.data,
                
              })
              console.log("answers",this.state.answerslist)
        })
    // }
    // else{
    //   const data = {
    //     user_id:localStorage.getItem('user_id'),
    //     topic_name:this.props.topics[0].topic_name,
    //     limit:this.state.limit
    // }
    // // console.log("data",data)
    // // alert(data)
    // // alert(this.props.topics[0].topic_name)
    // await axios.post('http://localhost:3001/get_feed_topic',data)
    // .then(response => {
    //     // alert("after response")
    //     console.log("response",response.data)
    //       this.setState({
    //         answerslist:response.data,
            
    //       })
    //       console.log("answers",this.state.answerslist)
    // })
    // }

  }
  render() {    

    if(this.state.answerslist.length==0){
      feedlist = (<div>....Loading</div>)
    }
      let topdiv = null
      // alert(this.props.data.topics[0].topic_id)
      topdiv = this.props.data.topics.map(val => {
   if(val.topic_id==0){
    return (
        <div class="font_white pad border">
                <div class="font_bold text_color"><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
                   {localStorage.getItem('Full_Name')}</div> 
                <div class="font_more_bold text_color font_size" style={{opacity:"0.8"}}>What is your question or link?</div>
              </div>
                )    
   }
   else{    
     
            return (
                <div class="container border font_white">
                <div class="row">
                <div class="col col-sm-2">
                <i class = {val.topic_icon+" fa-6x"} style={{color:"#4259B0"}}></i>
                </div>
                <div class="col col-sm-10">
                <span class=" font_more_bold" style={{fontSize:"22px"}}>{val.topic_name}</span>
                <br></br>
                <br></br>
                <a href="#" style={{fontWeight:"700"}}><i class="fal fa-check-square">&nbsp;&nbsp;Follow</i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" style={{fontWeight:"700"}}><i class="fal fa-bookmark">&nbsp;&nbsp;Bookmark</i></a>

               
                </div>
                </div>
       
              </div>
            )
   }
      
      })

      let feedlist = null;
       feedlist = this.state.answerslist.map(answer => {
   
        return (
          
         <div class="font_style">
                 <div class="font_white border" style={{marginTop:"10px"}}>
                 <label class="question_size"><a onClick ={()=>{localStorage.setItem('questionclicked',answer.question_id)}} href="/viewanswers"  style={{color:"black"}}>{answer.question}</a></label><br></br>
                 <div class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
            {answer.user_name}</div>
                 
                 <label class="date_size text_color">Answered {answer.date}</label><br></br>
                <span  style={{fontWeight:"400",color:"#333D46"}}>{answer.answer}</span><br></br>

        
        </div>
            
         </div>
        )
      });
    return (
        <div >
           {topdiv}
      
      <div>
      {feedlist}
  
      </div>
      </div>
    )
  } 
}
