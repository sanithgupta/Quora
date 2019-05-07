import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import axios from 'axios';
import { Redirect } from 'react-router';

export class EditUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: {
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        zipcode: "",
        education: "",
        career: "",
        description: "",
        user_id: localStorage.getItem('user_id'),
        redirectVar:''
      },
      val: "",

    }
  }
  handleChange = async (e) => {
    // alert("hi")
    e.preventDefault();
    console.log("In handle change")
    await this.setState({

      [e.target.name]: e.target.value,


    });
    console.log("Modified User Details", this.state.output, this.state.first_name)

  }
  saveDetails = async (e) => {
    e.preventDefault();
    const data = {
      "user_id": localStorage.getItem('user_id'),
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "city": this.state.city,
      "state": this.state.state,
      "zipcode": this.state.zipcode,
      "education": this.state.education,
      "career": this.state.career,
      "description": this.state.description
    }
    var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (re.test(this.state.zipcode)) {
      await axios.post("http://localhost:3001/modifyingDetails", data)
        .then(response => {
          if (response.status == 200) {
            console.log(response.data)

          }
        })
      // window.location.reload();
      this.setState({
        redirectVar: <Redirect to='/settings' />
    })
    }
    else {
      alert('Invalid Zip Code')
    }
  }


  componentDidMount = async () => {
    let data = {
      friend: localStorage.getItem('user_id')
    }
    await axios.post("http://localhost:3001/getUserDetails", data)
      .then((response) => {
        if (response.status == 200) {
          // alert("Got user details")
          if (response.data.length !== 0) {

            console.log("Got user details for settings page", response.data)
            this.setState({
              first_name: response.data[0].first_name,
              last_name: response.data[0].last_name,
              city: response.data[0].city,
              state: response.data[0].state,
              zipcode: response.data[0].zip_code,
              education: response.data[0].education,
              career: response.data[0].career_info,
              description: response.data[0].about,
            })
            // this.setState({
            //     output: response.data[0]
            // })
            // console.log("State---------->", this.state.output)
            // console.log(this.state.output)
          }
        }
      })
      console.log(this.state.zipcode)
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.redirectVar}
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
              <p class="accountComponents">First Name : <input onChange={this.handleChange} name="first_name" type="text" value = {this.state.first_name}></input> </p>
              <p class="accountComponents">Last Name : <input onChange={this.handleChange} name="last_name" type="text" value = {this.state.last_name}></input> </p>
              <p class="accountComponents">City : <input onChange={this.handleChange} name="city" type="text" value = {this.state.city}></input></p>
              <p class="accountComponents">State : <input onChange={this.handleChange} name="state" type="text" value = {this.state.state}></input></p>
              <p class="accountComponents">Zipcode : <input onChange={this.handleChange} name="zipcode" type="text" value = {this.state.zipcode}></input></p>
              <p class="accountComponents">Education : <input onChange={this.handleChange} name="education" type="text" value = {this.state.education}></input></p>
              <p class="accountComponents">Career Information : <input onChange={this.handleChange} name="career" type="text" value = {this.state.career}></input></p>
              <p class="accountComponents">Description about yourself : <input onChange={this.handleChange} name="description" type="text" value = {this.state.description}></input></p>
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
