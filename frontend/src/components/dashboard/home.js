import React, { Component } from 'react'
import Navbar from './navbar';

export default class home extends Component {
    constructor() {
        super();
    
        this.state = {
          topics:["Techonology","Movies","Entertainment","News","Press","Sports","Business","Design","Health","Photography","Cooking","Economics"]
        }
    }
  render() {


    return (
      <div>
        <Navbar/>

        <div class="container">
        <div class="col col-sm-3">
        {topics}
        </div>
        <div class="col col-sm-6">
        Home
        </div>
        <div class="col col-sm-3">
        Related Topics
        </div>
        </div>
      </div>
    )
  }
}
