import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import axios from 'axios';
export class settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output:"",
            val: "",

        }
    }
    componentDidMount = () => {
        let data = {
            user_id: localStorage.getItem('user_id')
        }
        axios.post("http://localhost:3001/modifyingDetails", data)
            .then((response) => {
                if (response.status == 200) {
                    // alert("Got user details")
                    console.log("Got user details for settings page", response.data)
                    this.setState({
                        output: response.data[0]
                    })
                    console.log("State---------->", this.state.output)
                    console.log(this.state.output.first_name)
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
                            <a href="/edit" style={{color:"black"}}><p class="accountComponents">Edit User Details</p></a>
                        </div >
                        <div class="col-md-6 ">
                            <p class="accountSettings">Account Settings</p>
                            <hr></hr>
                            {/* {details} */}
                            <p class="accountComponents">First Name : {localStorage.getItem('first_name')}</p>
                            {/* <p class="accountComponents">Last Name : {this.state.output.last_name}</p> */}
                            <p class="accountComponents">Email  : {localStorage.getItem('email_id')}</p>
                            <p class="accountComponents">City : {this.state.output.city}</p>
                            <p class="accountComponents">State :</p>
                            <p class="accountComponents">Zipcode :</p>
                            <p class="accountComponents">Education :</p>
                            <p class="accountComponents">Career Information :</p>
                            <p class="accountComponents">Description about yourself :</p>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default settings
