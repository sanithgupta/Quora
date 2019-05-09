import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import './css/login.css'

/* REDUX IMPORTS BEGIN */
import { connect } from 'react-redux';
import { submit_login } from '../actions/login_actions';
import { submit_signup } from '../actions/signup_actions';
import { stat } from 'fs';
/* REDUX IMPORTS END */

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: true,
            email_id: '',
            password: '',
            redirectVar: '',
            first_name: '',
            last_name: '',
        }
    }

    email_id_changehandler = (e) => {
        this.setState({
            email_id: e.target.value,
        })
    }

    password_changehandler = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    first_name_changehandler = (e) => {
        this.setState({
            first_name: e.target.value,
        })
    }

    last_name_changehandler = (e) => {
        this.setState({
            last_name: e.target.value,
        })
    }

    signin = (e) => {
        this.setState({
            temp: false
        });
    }

    cancel = (e) => {
        this.setState({
            temp: true
        });
    }

    renderRedirect = () => {
        if (this.props.redirectVar) {
            alert(this.props.redirectVar)
            alert(localStorage.getItem('topic_Count'))
            console.log('topic count: ',localStorage.getItem('topic_count'))
            localStorage.setItem('email_id', this.state.email_id)
            if (localStorage.getItem('topic_count') > 0) {
                this.setState({
                    redirectVar: <Redirect to='/' />
                })
            }
            else {
                this.setState({
                    redirectVar: <Redirect to='/Interests' />
                })
            }

        }
    }

    //submit Login handler to send a request to the node backend
    submitLogin = async (e) => {
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var { email_id, password } = this.state;
        if (re.test(email_id)) {

        //set the with credentials to true
        axios.defaults.withCredentials = true;
        await this.props.submit_login(email_id, password)

        setTimeout(() => {
            if (this.props.response === 400) {
                alert('Error in login -- User not found');
            }
            else if (this.props.response === 401) {
                alert('Invalid Credentials');
            }
        }, 500);

        setTimeout(() => {
            if (this.props.response == 200) {
                alert('200 status in login')
            }
            this.renderRedirect();
        }, 500);
        
        }
        else{
            alert("Wrong email format")
        }

    }

    new_submit = async (e) => {
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
        axios.defaults.withCredentials = true;
        if (this.state.first_name == "") {
            alert("Please enter your first name")
            
        } else if (this.state.last_name == "") {
            alert("Please enter your last name")
           
        } else if (this.state.email_id == "") {
            alert("Please enter your email")
            
        } else if (this.state.password == "") {
            alert("Please enter your password")
            
        } else if (this.state.password.length < 6) {
            alert("Password must be 6 characters or more")
            
        } else if (!re.test(this.state.email_id)) {
            alert("Email not in correct format")
            
        }

        else {
            let { email_id, password, first_name, last_name } = this.state;
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            await this.props.submit_signup(email_id, password, first_name, last_name)
            setTimeout(() => {
                if (this.props.response === 200) {
                    alert('Signed Up Successfully');
                }
            }, 500)

            setTimeout(() => {
                if (this.props.response === 400) {
                    alert('Error creating user');
                }
                else if (this.props.response === 210) {
                    alert('Email Id already exists')
                }
            }, 500)

        }
    }

    render() {
        if (this.state.temp) {
            var toggle_block =
                <div>
                    <div>
                        <button class="btn google-btn social-btn " type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                    </div>
                    <div>
                        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                    </div>
                    <div style={{ textAlign: 'left', color: '#999999' }}>
                        <p>
                            <a style={{ cursor: 'pointer', color: '#007BFF' }} onClick={this.signin}>Sign up with Email.</a>
                            &nbsp;By signing up you <br></br>indicate that you have read and agree to <br></br> Quora's&nbsp;
                        <a href='#'>Terms of Service</a>
                            &nbsp;and&nbsp;
                        <a href='#'>Privacy Policy</a>
                        </p>
                    </div>
                </div>
        }
        else {
            var toggle_block =
                <div class='container'>
                    <form>
                        <label style={{ color: '#999999' }}><strong>Sign Up</strong></label><br></br>
                        <div class='row'>
                            <label style={{ color: '#999999' }} class='col' for='first_name'> <strong>First Name</strong></label>
                            <label style={{ color: '#999999' }} class='col' for='last_name'><strong>Last Name</strong></label>
                        </div>
                        <div class='row'>
                            <input onChange={this.first_name_changehandler} class='col col-md-5 form-control' type='text' id='first_name'></input>
                            <input onChange={this.last_name_changehandler} class='col col-md-5 offset-1 form-control' type='text' id='last_name'></input>
                        </div>
                        <div class='row'>
                            <label style={{ color: '#999999' }} for='email'><strong>Email</strong></label>
                            <input onChange={this.email_id_changehandler} class='form-control' type='text' id='email'></input>
                        </div>
                        <div class='row'>
                            <label style={{ color: '#999999' }} for='password'><strong>Password</strong></label>
                            <input onChange={this.password_changehandler} class='form-control' type='password' id='password'></input>
                        </div>
                        <div>
                            <p style={{ color: '#999999' }}>
                                By clicking "Sign Up" you indicate that you &nbsp;
                            have read and agree to Quora's<a href='#'>Terms of Service</a> and&nbsp;
                            <a href='#'>Privacy Policy</a>
                            </p>
                        </div>
                        <div style={{ textAlign: 'right', marginBottom: '5%' }}>
                            <a style={{ cursor: 'pointer', color: '#999999' }} onClick={this.cancel}>Cancel</a>&nbsp;&nbsp;
                            <button onClick={this.new_submit} class='btn btn-primary'>Sign Up</button>
                        </div>
                    </form>
                </div>
        }


        return (
            <div class="Login-component">
                {this.state.redirectVar}
                <div>
                    <div class='login-form container'>
                        <div class='heading-block col col-md-12'>
                            <div style={{ textAlign: 'center', marginBottom: '1%', marginTop: '3%' }}>
                                <img src='http://qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg'></img>
                            </div>
                            <p class='paragraph' >A place to share knowledge and better understand the world</p>
                        </div>
                        <div className="row">
                            <div className='col'>
                                {toggle_block}
                            </div>
                            <div className='col'>
                                <div style={{ textAlign: 'left', marginBottom: '10%' }}>
                                    <form>
                                        <label style={{ color: '#999999' }}><strong>Login</strong></label><br></br>
                                        <input class="form-control" onChange={this.email_id_changehandler} style={{ width: '100%', marginBottom: '5%' }} type='text' placeholder='Email'></input>
                                        <input class="form-control" onChange={this.password_changehandler} style={{ width: '100%', marginBottom: '3%' }} type='password' placeholder='Password'></input>
                                        <a style={{ marginRight: '35%', color: '#999999' }} href='#'>Forgot Password?</a>
                                        <button onClick={this.submitLogin} class='btn btn-primary' type='submit'>Login</button>
                                    </form>
                                </div>
                                <p style={{ color: '#999999' }}>
                                    You are now logged out of this browser, but are still logged in with other browsers.
                                <a style={{ color: '#999999', textDecorationLine: 'underline' }} href='#'>Logout of all browsers</a>
                                </p>
                            </div>
                        </div>
                        <div class='col col-md-12'>
                            <p style={{ textAlign: 'center' }}>
                                New:
                                <a href='#'>Dutch</a>,&nbsp;
                                <a href='#'>Danish</a>,&nbsp;
                                <a href='#'>Finnish</a>,&nbsp;
                                <a href='#'>Norwegian</a>,&nbsp;
                                <a href='#'>Swedish</a>,&nbsp;
                                <a href='#'>Marathi</a>,&nbsp;
                                <a href='#'>Bengali</a>, and &nbsp;
                                <a href='#'>Tamil</a>
                            </p>
                        </div>
                        <div class='col col-md-12'>
                            <p style={{ textAlign: 'center' }}>
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>About</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Languages</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Careers</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Businesses</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Privacy</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Terms</a>&nbsp;
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Contact</a>
                                <a style={{ marginRight: '1%', color: '#999999' }} href='#'>Quora Inc. 2019</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//subscribe to Redux store updates.
const mapStateToProps = (state) => ({
    // variables below are subscribed to changes in loginState variables (redirectVar,Response) and can be used with props.
    redirectVar: state.loginState.redirectVar,
    response: state.loginState.response
})

export default connect(mapStateToProps, { submit_login, submit_signup })(login);
//export default Login;