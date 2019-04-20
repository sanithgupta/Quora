import React, { Component } from 'react'
import Navbar from './navbar';
import './home.css'
import UserFeed from './userfeed'
export default class home extends Component {
  
    constructor() {
        super();
    
        this.state = {
          topics:[{topic_name:"Techonology",topic_icon:"fal fa-book"},{topic_name:"Movies",topic_icon:"fal fa-film"},{topic_name:"Cooking",topic_icon:"fal fa-utensils"},{topic_name:"Photography",topic_icon:"fal fa-camera"},{topic_name:"Health",topic_icon:"fal fa-medkit"},{topic_name:"Techonology",topic_icon:"fal fa-book"},{topic_name:"Movies",topic_icon:"fal fa-film"},{topic_name:"Cooking",topic_icon:"fal fa-utensils"},{topic_name:"Photography",topic_icon:"fal fa-camera"},{topic_name:"Health",topic_icon:"fal fa-medkit"}],
    
        }
    }
  render() {
    
    let topic_list = this.state.topics.map(topic => {
   
        return (
          
         <div>
             
             <li class="pad">
             <i class={topic.topic_icon}></i>&nbsp;&nbsp;&nbsp;
             
             <label class="font_bold text_color">{topic.topic_name}</label>
             
             </li>
         </div>
        )
      });

    return (
      <div class="bg" >
        <Navbar/>

        <div class="container">
        <div class="col col-sm-2">
        <ul  >
        {topic_list}
        </ul>
        </div>
        <div class="col col-sm-7">
        <UserFeed/>
        </div>
        
        <div class="col col-sm-3">
    
      <img src={require('../../images/related_topics.JPG')} style={{ height: "90%", width: "90%" }} alt="Topics"></img>
       
        </div>
        </div>
      </div>
    )
  }
}
