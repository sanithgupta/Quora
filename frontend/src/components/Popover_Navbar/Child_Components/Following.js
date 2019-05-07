import React, { Component } from 'react'
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: true
        }
    }
    componentDidMount = () => {
        let data = {
            user_id: localStorage.getItem('friend')
        }
        axios.post("http://localhost:3001/get_following", data)
            .then((response) => {
                if (response.status == 200) {
                    if (response.data.length!=0) {

                    console.log(response.data[0].following)
                    this.setState({
                        following: response.data[0].following
                    })
                    // alert(this.state.following)
                }}
                else {
                    alert("Not Followed any one")
                }
            })
        // let data1 = {
        //     user: this.state.following
        // }
        // console.log("users:", data1)
        // axios.post("http://localhost:3001/get_following", data1)


    }
    // setFollow = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.follow)
    //     this.setState(prev => ({
    //         follow: !prev.follow
    //     }))
    // }
    render() {
        let view = (<div>...............</div>)
        if (this.state.following) {
            view = this.state.following.map(following => {
                return (
                    <div class="col-sm-6">
                        <Card>
                            <CardBody>
                                <CardTitle><a  onClick={()=>{localStorage.setItem('friend_id',following.following_id)}} href="/profile">{following.name}</a></CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText><br></br><br></br></CardText>
                                {/* <Button onClick={this.setFollow} >{this.state.follow ? "Following" : "Follow"}</Button> */}
                            </CardBody>
                        </Card>
                        {/* {following.name} */}
                    </div>
                )
            })
        }
        else {
            view = "Not Following"
        }
        return (
            <div>
                <p>Following</p>
                <hr></hr>
                <div>
                    {view}
                </div>
            </div>
        )
    }
}

export default Following