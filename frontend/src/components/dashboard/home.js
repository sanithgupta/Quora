import React, { Component } from 'react'
import Navbar from './navbar';
import './home.css'
import UserFeed from './userfeed'
import axios from 'axios';

export default class home extends Component {
  
    constructor() {
        super();
    
        this.state = {
            topic_id:"0",
            topic_name:"Madhusudhan Shagam",
            topic_icon:"fa fa-user",
            topics:[]
          // topics:[{topic_id:"10",topic_name:"Technology",topic_icon:"fal fa-book"},{topic_id:"11",topic_name:"Movies",topic_icon:"fal fa-film"},{topic_id:"12",topic_name:"Cooking",topic_icon:"fal fa-utensils"},{topic_id:"13",topic_name:"Photography",topic_icon:"fal fa-camera"},{topic_id:"14",topic_name:"Health",topic_icon:"fal fa-medkit"},{topic_id:"15",topic_name:"Techonology",topic_icon:"fal fa-book"},{topic_id:"16",topic_name:"Movies",topic_icon:"fal fa-film"},{topic_id:"17",topic_name:"Cooking",topic_icon:"fal fa-utensils"},{topic_id:"18",topic_name:"Photography",topic_icon:"fal fa-camera"},{topic_id:"19",topic_name:"Health",topic_icon:"fal fa-medkit"}],
    
        }
        
    }
    topic_click=(val,e)=>{
        // alert("hi")
       
        this.setState({
            topic_id:val.topic_id,
            topic_name:val.topic_name,
            topic_icon:val.topic_icon
        })
        localStorage.setItem('topicclicked',val.topic_name)
    }
   async componentDidMount(){

      axios.defaults.withCredentials = true;
      const data = {
          user_id:localStorage.getItem('user_id'),

         
      }
    
      await axios.post('http://localhost:3001/get_topics',data)
      .then(response => {
          // alert("after response")
          console.log("response",response.data)
            this.setState({
              topics:response.data,
              
            })
  
            console.log("topics",this.state.topics)
      })
    }
  render() {
    let topic_list = null
    if(this.state.topics.length>0){
    topic_list = this.state.topics.map(topic => {
   
        return (
          
         <div>
            <a onClick={this.topic_click.bind(this,topic)}> <li class="pad"  >
             <i style={{cursor:"pointer"}} class={topic.topic_icon}></i>&nbsp;&nbsp;&nbsp;
             
             <label style={{cursor:"pointer"}} class="font_bold text_color">{topic.topic_name}</label>
             
             </li>
             </a>
         </div>
        )
      });
    }

    return (
      <div class="bg" >
        <Navbar/>
<br></br>
        <div class="container">
        <div class="row">
        <div class="col col-sm-3">
        <ul  >
        <li class="pad"  >
             <a onClick={this.topic_click.bind(this,{topic_id:"0"})}><i style={{cursor:"pointer",color:"#BE3C38"}} class="fal fa-rss-square"></i>&nbsp;&nbsp;&nbsp;
             
             <label style={{cursor:"pointer"}} class="font_bold text_color">Feed</label></a> 
             
             </li>
        {topic_list}
        <li class="pad"  >
             <a onClick={this.topic_click.bind(this,{topic_id:"a"})}><i style={{cursor:"pointer",color:"#BE3C38"}} class="fal fa-rss-square"></i>&nbsp;&nbsp;&nbsp;
             
             <label style={{cursor:"pointer"}} class="font_bold text_color">Bookmark Answers</label></a> 
             
             </li>
        </ul>
        </div>
        
        <div class="col col-sm-7" style={{marginLeft:"-6%"}}>
        <UserFeed data ={{topics:[{topic_id:this.state.topic_id,topic_name:this.state.topic_name,topic_icon:this.state.topic_icon}]}}/>
        </div>
        
        <div class="col col-sm-2">
    
      <img src={require('../../images/related_topics.JPG')} style={{ height: "650px", width: "220px" }} alt="Topics"></img>
       
        </div>
        </div>
        </div>
      </div>
    )
  }
}
