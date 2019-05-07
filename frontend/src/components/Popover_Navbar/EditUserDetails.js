import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import axios from 'axios';

export class EditUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output:{
        first_name:"",
        last_name:"",
        city:"",
        state1:"",
        zipcode:"",
        education:"",
        career:"",
        description:"",
        user_id:localStorage.getItem('user_id')
      },
      val: "",

    }
  }
  handleChange = async (e) => {
    // alert("hi")
    e.preventDefault();
    console.log("In handle change")
    await this.setState({
      output:{
        ...this.state.output,
        [e.target.name]: e.target.value,
      }
     
    });
  }
  saveDetails = (e) => {
    e.preventDefault();
    console.log("Modified User Details",this.state.output)
    axios.post("http://localhost:3001/modifyingDetails", this.state.output)
    .then(response=>{
      if(response.status==200){
        console.log(response.data)
      }
    })


  }
  render() {
    return (
      <div>
        <Navbar />
        <div class="container ">
          <div class="row">
            <div class=" col-md-3 ">
              <p class="accountSettings">Settings</p>
              <hr></hr>
              <a href="/settings" style={{ color: "black" }}><p class="accountComponents">Account</p></a>
              <a href="/edit" style={{ color: "black" }}><p class="accountComponents">Edit User Details</p></a>
            </div >
            <div class="col-md-6 ">
              <p class="accountSettings">Edit User Details</p>
              <hr></hr>
              {/* {details} */}
              <p class="accountComponents">First Name : <input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text"></input> </p>
              <p class="accountComponents">Last Name : <input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text"></input> </p>
              <p class="accountComponents">City : <input onChange={this.handleChange} name="city" value={this.state.city} type="text"></input></p>
              <p class="accountComponents">State : <input onChange={this.handleChange} name="state" value={this.state.state1} type="text"></input></p>
              <p class="accountComponents">Zipcode : <input onChange={this.handleChange} name="zipcode" value={this.state.zipcode} type="text"></input></p>
              <p class="accountComponents">Education : <input onChange={this.handleChange} name="education" value={this.state.education} type="text"></input></p>
              <p class="accountComponents">Career Information : <input onChange={this.handleChange} name="career" value={this.state.career} type="text"></input></p>
              <p class="accountComponents">Description about yourself : <input onChange={this.handleChange} name="description" value={this.state.description} type="text"></input></p>
              {/* <button type="reset" class="">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
              <button class="btn btn-primary " onClick={this.saveDetails}>Save</button>{' '}

            </div>
          </div>

        </div>
      </div >
    )
  }
}

export default EditUserDetails
