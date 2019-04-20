import React, { Component } from 'react'
import './home.css'

export default class userfeed extends Component {
    constructor() {
        super();
    
        this.state = {
          answerslist:[{question_id:"101",question:"What's the funniest reason you've been called into school to collect your child?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"Will the 'Eric Stoltz version' of Back To The Future ever be released?",date:"04-19-2019"},{question_id:"101",question:"What is this?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"French Vogue photoshoot: A woman has appeared on the cover of vogue in a safari car with no knickers and it's making us nervous",date:"04-19-2019"},{question_id:"101",question:"What is this?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"French Vogue photoshoot: A woman has appeared on the cover of vogue in a safari car with no knickers and it's making us nervous",date:"04-19-2019"},{question_id:"101",question:"What is this?",answer_id:"201",user_id:"11",user_name:"Koushik",answer:"French Vogue photoshoot: A woman has appeared on the cover of vogue in a safari car with no knickers and it's making us nervous",date:"04-19-2019"}]  
    
    
        }
    }
  render() {
      let feedlist = null;
       feedlist = this.state.answerslist.map(answer => {
   
        return (
          
         <div class="font_more_bold ">
                 <div class="font_white border" style={{marginTop:"10px"}}>
                 <a href="#"><label class="question_size" style={{color:"black"}}>{answer.question}</label></a><br></br>
                 <div class="font_bold" style={{color:"#4D3333"}} ><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
            {answer.user_name}</div>
                 
                 <label class="date_size text_color">Answered {answer.date}</label><br></br>
                <span style={{fontWeight:"450"}}>{answer.answer}</span><br></br>

        
        </div>
            
         </div>
        )
      });
    return (
        <div >
      <div class="font_white pad border">
        <div class="font_bold text_color"><a href="#" ><img src={require('../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
            Madhusudhan Shagam</div>
        <div class="font_more_bold text_color font_size" style={{opacity:"0.8"}}>What is your question or link?</div>
      </div>
      <div>
      {feedlist}
  
      </div>
      </div>
    )
  } 5
}
