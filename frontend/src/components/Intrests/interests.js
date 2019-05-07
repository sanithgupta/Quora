import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./interests.css";
import axios from 'axios';
import { Redirect } from 'react-router';
var topicsSelected = require("../../actions/signup_actions").topicsSelected;

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      count: 0,
      redirectVar: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  /**** Handle the selected topics ****/

  handleSelect(name, url) {
    let topic = {
      topic_name: name,
      topic_image: url
    };
    var data = this.state.interests.slice();
    let position = data
      .map(e => {
        return e.topic_name;
      })
      .indexOf(topic.topic_name);

    if (position < 0) {
      data.push(topic);
      this.setState({ count: this.state.count + 1 });
    } else {
      data.splice(position, 1);
      this.setState({ count: this.state.count - 1 });
      console.log("inside the else ", this.state.count);
    }
    this.setState({ interests: data });
    console.log("this is just data", data);
    console.log("count value ", this.state.count);
  }

  /**** Push data to action ****/
  handleSubmit=async(e)=> {
    console.log("Enterd here");
    e.preventDefault();
    // console.log(this.state.interests)
    let user=localStorage.getItem("user_id")
    let int=this.state.interests;
    let intrest = int.map(e => e.topic_name);
    // let count = response.data.map(e => e.user_id_upvoted.length);
    console.log("intrests extracted ",intrest);
    let obj={
      user_id:user,
      intrests:intrest
    }
    console.log("obj",obj)
    await axios.post("http://localhost:3001/topics",obj)
    .then((response) => {
      console.log("inside post then")
      // console.log("after then console log linegraph", response.data);
      // let ids = response.data.map(e => e._id.substring(1,5));
      // let count = response.data.map(e => e.user_id_upvoted.length);
      // console.log("ids",ids);
      // console.log("couhnt",count);
      // this.setState((prev)=>{
      //   let _s = prev.data; 
      //   _s.labels = ids;
      //   _s.datasets[0].data = count;
      //   return {
      //     data : _s
      //   }
      // })
      // // this.setState({data : { ...this.state.data,labels: ids}});
      // // this.setState({data:{...this.state.data.datasets,data:count}});
      console.log(response)
      this.setState({
        redirectVar: <Redirect to='/' />
      })
      
    });

    // this.props.topicsSelected(
    //   { topics: this.state.interests },
    //   this.props.history
    // );
  }

  renderTopic(id, value, src) {
    return (
      <li className="interestli">
        <input
          type="checkbox"
          id={id}
          value={value}
          onChange={() => this.handleSelect(value, src)}
        />
        <label className="interestlabel" htmlFor={id}>
          <img
            className="icon"
            style={{ width: "105px", height: "105px", marginTop: "0px" }}
            src={src}
          />
          <span className="topic">{value}</span>
        </label>
      </li>
    );
  }

  render() {
    return (
      <div>
        {this.state.redirectVar}
        <hr className="line" />
        <img
          className="quoralogo"
          src="//qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg"
        />
        <hr />
        <form>
          <ul className="ulinterest">
            {this.renderTopic(
              "cb1",
              "Balayya",
              "https://chaibisket.com/wp-content/uploads/2017/12/FI-137.jpg?x30979"
            )}
            {this.renderTopic(
              "cb2",
              "Music",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtCpBZP_LmvcAji4mCmWYdT9NCW5UBBSPL0gaCC4YeB6AXzOe0A"
            )}
            {this.renderTopic(
              "cb3",
              "TV Series",
              "data:image/jpeg;base64,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"
            )}
            {this.renderTopic(
              "cb4",
              "Finance",
              "https://qph.fs.quoracdn.net/main-thumb-t-1577-200-2Y1xdlmMN0t6D6EGH3eBKZzLPLNtrw5q.jpeg"
            )}
            {this.renderTopic(
              "cb5",
              "Marketing",
              "https://qph.fs.quoracdn.net/main-thumb-t-1842-200-rugikvztqhqopsvnsttkotqbdeipavbx.jpeg"
            )}
            {this.renderTopic(
              "cb6",
              "Journalism",
              "https://qph.fs.quoracdn.net/main-thumb-t-2184-200-mx1kRZSC3QrxOfVLbN7QSX094Qyfi88P.jpeg"
            )}
            {this.renderTopic(
              "cb7",
              "Medicine",
              "https://qph.fs.quoracdn.net/main-thumb-t-815-200-jwB0e3RHQFNLKWUS80eZz8potbBuXckD.jpeg"
            )}
            {this.renderTopic(
              "cb8",
              "Food",
              "https://qph.fs.quoracdn.net/main-thumb-t-1553-200-OLl3pIH6SNAJ32hA8k1UKc8INnS3v8Xb.jpeg"
            )}
            {this.renderTopic(
              "cb9",
              "Technology",
              "https://qph.fs.quoracdn.net/main-thumb-t-20468-200-ydkwvplujqmhgkifcnrpaojmqcjnyyti.jpeg"
            )}
            {this.renderTopic(
              "cb10",
              "Sports",
              "https://qph.fs.quoracdn.net/main-thumb-t-3239-200-RSQUsoM8bAghJkyg37zbbYgC991ZTXbv.jpeg"
            )}
            {this.renderTopic(
              "cb11",
              "Science",
              "https://qph.fs.quoracdn.net/main-thumb-t-2177-200-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
            )}
            {this.renderTopic(
              "cb12",
              "Movies",
              "https://qph.fs.quoracdn.net/main-thumb-t-836-200-bwdbfptkjlccqtyxqlglhtkepgtqqpnm.jpeg"
            )}
          </ul>
          <button
            disabled={this.state.count < 6}
            className="btn btn-primary"
            id="interestbutton"
            onClick={this.handleSubmit}
          >
            {this.state.count <= 6 ? (
              <div>{6 - this.state.count} More Topics to Continue</div>
            ) : (
              <div> Continue </div>
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userData,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { topicsSelected }
)(withRouter(Interests));