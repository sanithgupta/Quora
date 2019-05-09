import React, { Component } from 'react'
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
export class Followers extends Component {
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
    axios.post("http://localhost:3001/get_followers", data)
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data)
          // console.log(response.data[0].followers.length)
          if (response.data.length!=0) {

            this.setState({
              followers: response.data[0].followers,
            })
            // alert(this.state.following)
          }
        }
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
  // setFollow = async (e) => {
  //   e.preventDefault();
  //   console.log(this.state.follow)
  //   this.setState(prev => ({
  //     follow: !prev.follow
  //   }))
  //   if (this.state.follow === "Following") {
  //     let data1 = {
  //       id:localStorage.getItem('')
  //     }
  //     await axios.post("http://localhost:3001/following", data1)
  //       .then((response) => {
  //         if (response.status == 200) {
  //           console.log(response.data)
  //         }
  //         else {
  //           alert("Backend problem")
  //         }
  //       })

  //   }
  //   else if (this.state.follow === "Follow") {
  //     let data1 = {
  //       id:localStorage.getItem('')
  //     }
  //     await axios.post("http://localhost:3001/del_following", data1)
  //       .then((response) => {
  //         if (response.status == 200) {
  //           console.log(response.data)
  //         }
  //         else {
  //           alert("Backend problem")
  //         }
  //       })
  //   }
  // }

profile_view =(val,e)=>{
  localStorage.setItem('friend', val)
}

  render() {
    let view = (<div>...............</div>)
    if (this.state.followers) {
      view = this.state.followers.map(followers => {
        return (
          <div class="col-sm-6">
            <Card>
              <CardBody>
                <CardTitle ><a onClick={this.profile_view.bind(this,followers.followers_id)} href="/profile">{followers.name}</a></CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText><br></br><br></br></CardText>
                {/* <Button onClick={this.setFollow}>{this.state.follow ? "Follow" : "Following"}</Button> */}
              </CardBody>
            </Card>
            {/* {following.name} */}
          </div>
        )
      })
    }
    else {
      view = "No Followers"
    }
    return (
      <div>
        <p>Followers</p>
        <hr></hr>
        <div>
          {view}
        </div>
      </div>
    )
  }
}

export default Followers
