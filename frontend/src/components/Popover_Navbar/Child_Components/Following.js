import React, { Component } from 'react'
import axios from 'axios';

export class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount = () => {
        let data = {
            user_id: localStorage.getItem('user_id')
        }
        axios.post("http://localhost:3001/get_following", data)
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data[0].following)
                    this.setState({
                        following : response.data[0].following
                    })
                    // alert(this.state.following)
                }
                else {
                    alert("Not Followed any one")
                }
            })
            let data1={
                user : this.state.following
            }
            console.log("users:", data1)
            axios.post("http://localhost:3001/get_following", data1)

    }
    render() {
        // if (this.state.following) {
        //     view = this.state.following.map(following => {
        //         return (
        //             <div>
        //             </div>
        //         )
        //     })
        // }
        return (
            <div>
                <p>Following</p>
                <hr></hr>

            </div>
        )
    }
}

export default Following