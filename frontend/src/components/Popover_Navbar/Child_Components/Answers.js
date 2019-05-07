import React, { Component } from 'react'
import axios from 'axios';

export class Answers extends Component {
  constructor() {
    super();

    this.state = {
      answers: [
        // { question_id: "10", question: "What's the funniest reason you've been called into school to collect your child?", answer_id: "101", answer: "Well to put things in the right perspective, consider this: before a fight, a fighter goes through the meticulous After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc.  and extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.", user_id: "10", user_name: "Madhusudhan", owner_status: "active", is_anonymous: false, upvotes: [{ user_id: "11", user_id: "12" }], downvotes: [{ user_id: "11", user_id: "12" }], comments: [{ user_id: "10", comment: "this is great", date_time: "04202019", user_name: "Jali" }], date_time: "04202019" }, { question_id: "10", question: "What's the funniest reason you've been called into school to collect your child?", answer_id: "102", answer: "Well to put things in the right perspective, consider this: before a fight, a fighter goes through the meticulous and After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc. extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.", user_id: "11", user_name: "Koushik", owner_status: "active", is_anonymous: false, upvotes: [{ user_id: "12", user_id: "13" }], downvotes: [{ user_id: "12", user_id: "13" }], comments: [{ user_id: "11", comment: "this is super", date_time: "04202019", user_name: "Jali" }], date_time: "04202019" }, { question_id: "10", question: "What's the funniest reason you've been called into school to collect your child?", answer_id: "101", answer: "Well to put things in the right perspective, After a fight, a fighter has his gloves quickly removed due to many reasons. One of them is the sheer discomfort of having the gloves put on for already several hours, and just taking them off is a relief, both physically and psychologically. Another reason is the fact that normally after a fight, there is much interaction, with trainers, the opponent, reporters and commentators, sign autographs etc.  consider this: before a fight, a fighter goes through the meticulous and extensive process of having his hands properly wrapped and then the gloves are fitted and secured with tape and signed by an inspector before the fight can take place, which usually occurs about 1 or 2 hours before a bout.", user_id: "11", user_name: "Naveen", owner_status: "active", is_anonymous: false, upvotes: [{ user_id: "10", user_id: "12" }], downvotes: [{ user_id: "10", user_id: "12" }], comments: [{ user_id: "10", comment: "this is nothing", date_time: "04202019", user_name: "Jali" }, { user_id: "11", comment: "this is super", date_time: "04202019", user_name: "Krishna" }], date_time: "04202019" }
      ]
    }
  }
  componentDidMount = async() => {
    let data = {
      user_id: localStorage.getItem("user_id")
    }
    console.log("for ", data, " we are getting answers")
    await axios.post("http://localhost:3001/get_user_answers", data)
      .then((response) => {
        console.log("Status Code : ", response.status);

        if (response.data.length > 0) {
          console.log(response.data)
          // var len = response.data.length;
          // var i = 0;
          // for (i = 0; i < len; i++) {
          //   alert(i)
          this.setState({
            answers:response.data
          })
           
          console.log("questions", this.state.answers)
          // }
        }
      })
  }
  render() {




let feedlist = null;
if(this.state.answers.length>0){
       feedlist = this.state.answers.map(answer => {
   
        return (
         <div class="font_style">
                 <div class="font_white border" style={{marginTop:"10px"}}>
                 <label class="question_size"><a onClick ={()=>{localStorage.setItem('questionclicked',answer.question_details[0]._id)}} href="/viewanswers"  style={{color:"black"}}>{answer.question_details[0].question}</a></label><br></br>
                 <div class="font_bold" style={{color:"#333D46"}} ><a href="#" ><img src={require('../../../images/profile.JPG')} style={{ height: "5%", width: "5%",marginLeft:"1%" }} alt="Quora LOGO"></img></a>
            {answer.answer_details.user_name}</div>
                 
                 <label class="date_size text_color">Answered {answer.answer_details.date_time.substring(0,10)}</label><br></br>
                <span  style={{fontWeight:"400",color:"#333D46"}}>{answer.answer_details.answer}</span><br></br>

        
        </div>
            
         </div>
        )
      });
    }



    // let answerdiv = null;
    // answerdiv = this.state.answers.map(answer => {
    //   let commentdiv = null
    //   commentdiv = answer.comments.map(comment => {
    //     return (
    //       <div>
    //         <div class="row" >
    //           <div class="col col-sm-1" style={{ marginLeft: "0px" }}>
    //             <span class="font_bold" style={{ color: "#333D46" }} ><a href="#" ><img src={require('../../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
    //           <div class="col col-sm-6" style={{ marginLeft: "-15px" }}>{comment.user_name}
    //             <br></br>
    //             <div style={{ marginTop: "-10px" }}><label class="date_size text_color" >Answered {comment.date_time}</label><br></br></div>
    //           </div>

    //         </div>
    //         <label>{comment.comment}</label>
    //       </div>
    //     )
    //   })
    //   return (

    //     <div style={{ padding: "3px" }}>
    //       <div >
    //         <div class="row" >
    //           <div class="col col-sm-1" style={{ marginLeft: "-20px" }}>
    //             <span class="font_bold" style={{ color: "#333D46" }} ><a href="#" ><img src={require('../../../images/profile.JPG')} style={{ height: "80%", width: "150%" }} alt="Quora LOGO"></img></a></span></div>
    //           <div class="col col-sm-6" style={{ marginLeft: "-15px" }}>{answer.user_name}
    //             <br></br>
    //             <div style={{ marginTop: "-10px" }}><label class="date_size text_color" >Answered {answer.date_time}</label><br></br></div>
    //           </div>
    //           <span style={{ fontWeight: "400", color: "#333D46" }}>{answer.answer}</span><br></br>
    //         </div>

    //         <div style={{ marginLeft: "-16px" }}>
    //           <i class="fal fa-arrow-alt-up">&nbsp;&nbsp;</i><label>Upvote</label>&nbsp;&nbsp;&nbsp;&nbsp;
    //       <i class="fal fa-share-alt"></i>&nbsp;&nbsp;<label>Share</label>&nbsp;&nbsp;&nbsp;&nbsp;
    //           <i class="fal fa-arrow-alt-down"></i>&nbsp;&nbsp;Downvote&nbsp;&nbsp;&nbsp;&nbsp;
    //            <input type="checkbox" value="bookmark"></input>Bookmark&nbsp;&nbsp;&nbsp;&nbsp;

    //       </div >

    //       </div>
    //       <div class="border bg" style={{ marginLeft: "-16px" }}>
    //         <form class="form-inline" style={{ opacity: "0.7" }}>

    //           <input class="form-control" style={{ width: "60%", height: "35px", borderRadius: "25px" }} type="text" placeholder="Add Comment"></input>&nbsp;&nbsp;
    //           <button class="btn btn-primary" style={{ borderRadius: "10px", height: "35px", padding: "6px" }}>Add Comment</button>
    //         </form>
    //         <br></br>
    //         {commentdiv}

    //       </div>

    //       <hr></hr>
    //     </div>
    //   )
    // });
    return (
      <div style={{width:"600px"}}>
      Answers
      {feedlist}

      </div>
    )
  }
}

export default Answers
