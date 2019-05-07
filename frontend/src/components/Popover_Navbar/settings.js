import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import axios from 'axios';
export class settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: "",
            val: "",

        }
    }
    componentDidMount = () => {
        let data = {
            friend: localStorage.getItem('user_id')
        }
        axios.post("http://localhost:3001/getUserDetails", data)
            .then((response) => {
                if (response.status == 200) {
                    // alert("Got user details")
                    if (response.data.length!==0) {

                        console.log("Got user details for settings page", response.data)
                        this.setState({
                            first_name:response.data[0].first_name,
                            city : response.data[0].city,
                            state:response.data[0].state,
                            zipcode: response.data[0].zip_code,
                            education: response.data[0].education,
                            Career: response.data[0].career_info,
                            Description:response.data[0].about,
                        })
                        // this.setState({
                        //     output: response.data[0]
                        // })
                        // console.log("State---------->", this.state.output)
                        // console.log(this.state.output)
                    }
                }
            })
    }
    // child = (e) => {
    //     this.setState({
    //         val: e
    //     })
    // }

    render() {
        return (
            <div>
                <Navbar />
                <div class="container ">
                    <div class="row">
                        <div class=" col-md-3 ">
                            <p class="accountSettings">Settings</p>
                            <hr></hr>
                            <p class="accountComponents">Account</p>
                            <a href="/edit" style={{ color: "black" }}><p class="accountComponents">Edit User Details</p></a>
                        </div >
                        <div class="col-md-6 ">
                            <p class="accountSettings">Account Settings</p>
                            <hr></hr>
                            {/* {details} */}
                            <p class="accountComponents">First Name : {this.state.first_name}</p>
                            {/* <p class="accountComponents">Last Name : {this.state.output.last_name}</p> */}
                            <p class="accountComponents">Email  : {localStorage.getItem('email_id')}</p>
                            <p class="accountComponents">City : {this.state.city}</p>
                            <p class="accountComponents">State : {this.state.state}</p>
                            <p class="accountComponents">Zipcode : {this.state.zipcode}</p>
                            <p class="accountComponents">Education : {this.state.education}</p>
                            <p class="accountComponents">Career Information : {this.state.Career}</p>
                            <p class="accountComponents">Description about yourself : {this.state.Description}</p>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default settings
