import React, { Component } from 'react'
import './home.css'

export default class userfeed extends Component {
    constructor() {
        super();
    
        this.state = {
          answerslist:[{question_id:"5cca41cca84b3597ecc9f464",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"I wasn't called into the school, but called to answer a question about my son (autistic, but wasn't diagnosed at the time). The whole fanily was into Lord of the Rings at the time and I had ordered my son a Lord of the Rings ring off the internet. He wore it all the time and loved it, enough to wear it to his elementary school every day. His teacher called (very upset) while I was at work to let me know there was a problem with my son",date:"04-19-2019"},{question_id:"101",question:"Will the 'Eric Stoltz version' of Back To The Future ever be released?",answer:"I wasn't called into the school, but called to answer a question about my son (autistic, but wasn't diagnosed at the time). The whole fanily was into Lord of the Rings at the time and I had ordered my son a Lord of the Rings ring off the internet. He wore it all the time and loved it, enough to wear it to his elementary school every day. His teacher called (very upset) while I was at work to let me know there was a problem with my son",answer_id:"201",user_id:"11",user_name:"Madhu",date:"04-19-2019"},{question_id:"101",question:"Why don't we have more people from countries like Norway immigrating to America?",answer_id:"201",user_id:"11",user_name:"Naveen",answer:"My family and I were just over in the US on a holiday. We met so many wonderful people and saw some amazing places. This is however not enough for us to choose to move from Norway, and I will try to explain why we’d rather stay here. We were in America for three weeks. That is three of five paid weeks a year that we have a right to by law no matter what occupation we have.",date:"04-19-2019"},{question_id:"101",question:"What is this?",answer_id:"201",user_id:"11",user_name:"Sai",answer:"French Vogue photoshoot: A woman has appeared on the cover of vogue in a safari car with no knickers and it's making us nervous",date:"04-19-2019"}]  
        }
    }
  render() {    
      let topdiv = null
      topdiv = this.props.data.topics.map(val => {
   if(val.topic_id==0){
    return (
        <div class="font_white pad border">
                <div class="font_bold text_color"><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
                   Madhusudhan Shagam</div> 
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
