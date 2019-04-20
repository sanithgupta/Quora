import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import './css/login.css'

/* REDUX IMPORTS BEGIN */
import { connect } from 'react-redux';
import { submit_login } from '../actions/login_actions';
import { stat } from 'fs';
/* REDUX IMPORTS END */

class login extends Component {
    render() {
        return (
            <div class="Login-component">
                <div>
                    <div class='login-form container'>
                        <div class='heading-block col col-sm-12'>
                            <div style = {{textAlign:'center',marginBottom:'3%',marginTop:'5%'}}>
                                <img src = 'http://qsf.fs.quoracdn.net/-3-images.logo.wordmark_default.svg-26-bfa6b94bc0d6af2e.svg'></img>
                            </div>
                            <p class='paragraph' >A place to share knowledge and better understand the world</p>
                        </div>
                        <div class="col col-sm-12" style={{ marginBottom: '2%' }}>
                            <div className='col col-sm-6'>
                                <div>
                                    <button class="btn google-btn social-btn " type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                                </div>
                                <div>
                                    <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                                </div>
                                <div style={{ textAlign: 'left', color: '#999999' }}>
                                    <p>
                                        <a href='#'>Sign up with Email.</a>
                                        &nbsp;By signing up you <br></br>indicate that you have read and agree to <br></br> Quora's&nbsp;
                                        <a href='#'>Terms of Service</a>
                                        &nbsp;and&nbsp;
                                        <a href='#'>Privacy Policy</a>
                                    </p>
                                </div>
                            </div>
                            <div className='col col-sm-6'>
                                <div style={{ textAlign: 'left', marginBottom: '10%' }}>
                                <form>
                                    <label>Login</label><br></br>
                                    <input class = "form-control" style={{ width: '100%', marginBottom: '5%' }} type='text' placeholder='Email'></input>
                                    <input  class = "form-control" style={{ width: '100%', marginBottom: '3%' }} type='password' placeholder='Password'></input>
                                    <a style={{ marginRight: '35%', color: '#999999' }} href='#'>Forgot Password?</a>
                                    <button class='btn btn-primary' type='submit'>Login</button>
                                    </form>
                                </div>
                                <p style={{ color: '#999999' }}>
                                    You are now logged out of this browser, but are still logged in with other browsers.
                                <a style={{ color: '#999999', textDecorationLine: 'underline' }} href='#'>Logout of all browsers</a>
                                </p>
                            </div>
                        </div>
                        <div class='col col-sm-12'>
                            <p style = {{textAlign:'center'}}>
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
                        <div class='col col-sm-12' style = {{marginTop:'1%',marginBottom:'1%'}}>
                            <p style = {{textAlign:'center'}}>
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>About</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Languages</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Careers</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Businesses</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Privacy</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Terms</a>&nbsp;
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Contact</a>
                                <a style = {{marginRight:'2%',color: '#999999'}} href='#'>Quora Inc. 2019</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;