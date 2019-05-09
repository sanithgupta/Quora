import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import { Button, Form, FormGroup, Label, Col, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip, Popover, PopoverHeader, PopoverBody, UncontrolledPopover, Input } from 'reactstrap';
import { Alert } from 'reactstrap';
// import axios from 'axios';
import FormData from 'form-data'



import { Profile_det } from '../Popover_Navbar/Child_Components/Profile_det'
import { Answers } from '../Popover_Navbar/Child_Components/Answers'
import { Questions } from '../Popover_Navbar/Child_Components/Questions'
import { Shares } from '../Popover_Navbar/Child_Components/Shares'
import { Spaces } from '../Popover_Navbar/Child_Components/Spaces'
import { Post } from '../Popover_Navbar/Child_Components/Post'
import { Blogs } from '../Popover_Navbar/Child_Components/Blogs'
import { Followers } from '../Popover_Navbar/Child_Components/Followers'
import { Edits } from '../Popover_Navbar/Child_Components/Edits'
import { Activity } from '../Popover_Navbar/Child_Components/Activity'
import { Following } from '../Popover_Navbar/Child_Components/Following'

import './profile.css'
import axios from 'axios';
export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Write a description about yourself",
            profileCrediential: "Add a Profile Crediential",
            modal: false,
            visible: false,
            tooltipOpen: false,
            addCredentialModal: false,
            employementCredentialModal: false,
            profilePic: null,
            popoverOpen: false,
            educationCredentialModal: false,
            locationCredentialModal: false,
            topicCredentialModal: false,
            languageCredentialModal: false,
            val: <Profile_det />,
            fullname: localStorage.getItem('Full_Name'),
            hidebtn: "",
            btnhide: "",
            someone_id: localStorage.getItem('friend_id')
        };
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.tool = this.tool.bind(this);
        this.addcredential = this.addcredential.bind(this);
        this.addCredentialPopover = this.addCredentialPopover.bind(this);
        this.employementCredential = this.employementCredential.bind(this);
        this.educationCredential = this.educationCredential.bind(this);
        this.locationCredential = this.locationCredential.bind(this);
        this.topicCredential = this.topicCredential.bind(this);
        this.languageCredential = this.languageCredential.bind(this);
        this.handleProfilePicChange = this.handleProfilePicChange.bind(this);
        this.submitProfilePic = this.submitProfilePic.bind(this);
    }
    componentDidMount = async () => {
      
         this.getProfilePic()
        let friend = localStorage.getItem('friend')
        let user = localStorage.getItem('user_id')
        let data
        console.log("friend : ", friend)
        if (friend) {
            data = {
                friend: localStorage.getItem('friend')
            }

        }
        else {
            data = {
                friend: localStorage.getItem('user_id')
            }

        }
        await axios.post("http://localhost:3001/getUserDetails", data)
            .then((response) => {
                if (response.status == 200) {
                    console.log("friends details", response.data)
                    let first_name = response.data[0].first_name
                    localStorage.setItem('first_name', first_name)
                    let full_name = response.data[0].first_name + " " + response.data[0].last_name;
                    console.log("Friend full name", full_name)
                    localStorage.setItem('Full_Name', full_name)
                    // localStorage.setItem('duplicate_name',full_name)
                }
            })

        if (friend !== user) {

            this.setState({
                hidebtn: "hidden",
                btnhide: "",
            })
            console.log("in if part ", this.state.hidebtn)
        }
        else {
            this.setState({
                hidebtn: "",
                btnhide: "hidden",
            })
            console.log("In else", this.state.hidebtn)
        }
        // alert(localStorage.getItem('Full_Name'))

    }

    tool() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    toggle() {
        console.log("Inside Toogling state", this.state.modal)
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    addCredentialPopover() {
        console.log("In add credential popover", this.state.popoverOpen)
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    onDismiss() {
        this.setState({ visible: false });
    }


    employementCredential() {
        console.log("In Employement Credrntial", this.state.employementCredentialModal)

        this.setState(employePrevious => ({
            employementCredentialModal: !employePrevious.employementCredentialModal,
        }))
        this.addcredential();
    }

    educationCredential() {
        console.log("In Education Crediential", this.state.educationCredentialModal)
        this.setState(eduPrevious => ({
            educationCredentialModal: !eduPrevious.educationCredentialModal,
        }))
        this.addcredential();

    }

    locationCredential() {
        console.log("In Location Credential", this.state.locationCredentialModal)
        this.setState(locPrevious => ({
            locationCredentialModal: !locPrevious.locationCredentialModal,
        }))
        this.addcredential();
    }

    topicCredential() {
        console.log("In topic CRedential", this.state.topicCredentialModal)
        this.setState(topicPrevious => ({
            topicCredentialModal: !topicPrevious.topicCredentialModal,
        }))
        this.addcredential();
    }

    handleProfilePicChange = (e) => {
        if (e.target.name === 'profilePic') {
            this.setState({
                profilePic: e.target.files[0]
            })
        }
    }

    submitProfilePic = async (e) => {
        e.preventDefault();
        const h = {};

        const desc = localStorage.getItem('friend');

        // const  data  = Object.assign({},this.state);

        //const { files } = this.state;
        let formData = new FormData();
        console.log(desc);
        // console.log(data.selectedFile);

        await formData.append('email', desc);
        await formData.append('profilePic', this.state.profilePic);
        // h.Accept = 'application/json'; 
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        console.log(this.state.profilePic)
        await axios.post('http://localhost:3001/profilePicUpload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                this.setState({ profilePic: '' });
                //   this.componentDidMount();
            });
            window.location.reload();


    }
   

    getProfilePic = async () => {
        // alert("hi")
        console.log("fetching user profile pic...");
        var email = localStorage.getItem('friend')
        await axios.get("http://localhost:3001/getProfilePic/?email=" + email)
            .then(async (res) => {
                console.log("base64 Image received");
                //console.log("response from AWS S3 bucket... ", res.data);
                await this.setState({
                    profilePic: res.data
                })
            })
        console.log("profile pic", this.state.profilePic)
       
    }
    // submitProfilePic = async() => {
    //     let extension = this.state.profilePic.name.slice(- 4);
    //     console.log("in Submit ProfilePic", extension);
    //     if (extension == ".jpg"||extension == ".JPG") {
    //         await this.setState({ profilePic: "" });
    //         let formData = new FormData();
    //         var email= localStorage.getItem('email_id')
    //         console.log(email)
    //         await formData.append('email',email);
    //         // console.log(this.state. );

    //         await formData.append('profilePic', this.state.profilePic);
    //         console.log("before setting profile pic")

    //         console.log(formData)
    //          await axios.post("http://localhost:3001/profilePicUpload",formData)
    //             .then((response) => {
    //                 console.log(response.data);
    //             });
    //         //this.getProfilePic();
    //         console.log("after setting profile pic")
    //         // setTimeout(() => this.getProfilePic(), 1500);
    //     } else {
    //         alert("only .jpg allowed for profile pic");
    //     }
    // }
    // handleProfilePicChange = async(e) => {
    //     if (e.target.name == 'profilePic') {
    //     // alert("inside handleprofile pic")
    //         console.log("files",e.target.files)
    //         await this.setState({
    //             profilePic: e.target.files[0]
    //         })
    //     }
    //     console.log(this.state.profilePic)
    // }

    languageCredential() {
        console.log("In language Credential", this.state.languageCredentialModal)
        this.setState(languagePrevious => ({
            languageCredentialModal: !languagePrevious.languageCredentialModal,
        }))
        this.addcredential();
    }
    addcredential() {
        console.log("In Add Credential", this.state.addCredentialModal)
        this.setState(prev => ({
            addCredentialModal: !prev.addCredentialModal
        }));
    }
    changeProfileCrediential = (e) => {
        console.log("In Changing Profile Credential", this.state.addCredentialModal)
        this.setState({
            profileCrediential: e.target.value,
        });
        this.setState({
            visible: true,
        })
    }
    child = (e) => {
        this.setState({
            val: e
        })
    }

    addToFollowing = (e) => {
        e.preventDefault()
        console.log("In adding to following")
        let data = {
            friend: localStorage.getItem('friend'),
            user_id: localStorage.getItem('user_id'),
            friend_first_name: localStorage.getItem('Full_Name'),
            first_name: localStorage.getItem('first_name')
        }
        console.log("adding to our following ", data)
        axios.post("http://localhost:3001/following", data)
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data)

                }
            })

        axios.post("http://localhost:3001/followers", data)
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data)

                }
            })
    }

    render() {
        var profilePicDiv;
        if (this.state.profilePic) {
            console.log("data is present in this.state.profilePic");
            profilePicDiv = (<div className="profilePic">
                <img className="img-fluid" style={{borderRadius:"50%"}} onClick="{this.onProfileClick}" data-toggle="modal" src={'data:image/jpeg;base64,' + this.state.profilePic} data-target="#profilePicUpload" ></img>
            </div>)
        } else {
            profilePicDiv = (<div><i class="fa fa-user fa fa-9x circle1"></i></div>)
        }
        return (
            <div>
                <Navbar />
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    <center>Added a Credential</center>
                </Alert>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                            {/* <i class="fa fa-user fa fa-9x circle1"></i> */}
                            {profilePicDiv}
                        </div>

                        <div class="col-md-5">
                            <span class="font1"><h2  >{localStorage.getItem('Full_Name')}</h2></span>
                            {/* <Button> */}
                            <a style={{ color: "gray" }} href="#" onClick={this.toggle}>{this.state.profileCrediential}</a><br></br>
                            <a style={{ color: "gray" }} href="#" onClick={this.toggle}>{this.state.description}</a>
                            <div>
                                <input type="file" name="profilePic" onChange={this.handleProfilePicChange}></input>
                                <button class="btn btn-default" onClick={this.submitProfilePic}>Upload</button>
                                {/* <button class="btn btn-default" onClick={this.getProfilePic}>Download</button> */}


                            </div>
                            <a style={{ color: "gray", visibility: this.state.hidebtn }} href="#" onClick={this.toggle}>{this.state.profileCrediential}</a><br></br>
                            <a style={{ color: "gray", visibility: this.state.hidebtn }} href="#" onClick={this.toggle}>{this.state.description}</a><br></br>
                            <button style={{ visibility: this.state.btnhide }} onClick={this.addToFollowing}><i class="fas fa-portrait"></i>Follow</button>
                            {/* </Button> */}
                        </div>
                        <div class="">
                            <p>Credential and Highlights<i class="fa fa-pen ml-5" onClick={this.addcredential} id="TooltipExample"></i></p><hr></hr>
                        </div>

                        {/* -------------------------------------------------------------Tooltip for Credential and Highlights--------------------------------- */}
                        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.tool}>
                            Edit Credentials
                        </Tooltip>


                        {/* -----------------------------------------------Model Add a Credential  --------------------------------------------------------- */}
                        <Modal isOpen={this.state.modal} toggle={this.toggle}   >
                            <ModalHeader toggle={this.toggle}><p class="font-weight-bold">Edit credentials<p class="font-weight-light">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="container">
                                    <div class="row">
                                        <i class="fa fa-user"></i>&nbsp;
                                         <p class="font-weight-light ml-1" style={{}}>Add a Profile Crediential</p>
                                    </div>
                                    <div class="row">
                                        <Input onChange={this.changeProfileCrediential} placeholder="artist and published novalist living in California"></Input>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.toggle}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.toggle}>Save</Button>
                            </ModalFooter>
                        </Modal>



                        {/* --------------------------------------------------Model Crediential and Highlights --------------------------------------------------- */}
                        {/* id="PopoverClick" type="button"onClick={this.addCredentialPopover} */}
                        <Modal isOpen={this.state.addCredentialModal} toggle={this.addcredential}   >
                            <ModalHeader toggle={this.addcredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="container">
                                    <div class="row">
                                        <p class="font-weight-light addcred1 ml-1" id="UncontrolledPopover" style={{ color: "blue" }}> <i class="fal fa-plus-circle"></i>Add a Profile Crediential</p>
                                    </div>

                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover" >
                                        <PopoverHeader></PopoverHeader>
                                        <PopoverBody>
                                            <i class="fal fa-briefcase addcred1" onClick={this.employementCredential} >Employement</i>
                                            <hr></hr>
                                            <i class="fal fa-graduation-cap  addcred1" onClick={this.educationCredential}>Education</i>
                                            <hr></hr>
                                            <i class="fal fa-map-marker-alt addcred1" onClick={this.locationCredential}>Location</i>
                                            <hr></hr>
                                            <i class="fal fa-mountains addcred1" onClick={this.topicCredential}>Topics</i>
                                            <hr></hr>
                                            <i class="fal fa-globe addcred1" onClick={this.languageCredential} >Language</i>
                                        </PopoverBody>
                                    </UncontrolledPopover>



                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.addcredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.addcredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        {/* ------------------------------------------------------------------------------Modal employement Credential----------------------------------------------------------------------------------------- */}
                        <Modal isOpen={this.state.employementCredentialModal} toggle={this.employementCredential} >
                            <ModalHeader toggle={this.employementCredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred ">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="">
                                    <div class=" container row inputcred">
                                        <i class="fal fa-briefcase"></i>&nbsp;
                                <p>Add employment credential</p>
                                    </div>
                                    <Form>
                                        <div class=" row inputc">
                                            <div class="col-md-4">
                                                <Label for="position">Position</Label>
                                            </div>
                                            <div class="col-md-8 inputinModal">
                                                <Input class="inputc form-control" id="position" placeholder="Accountant"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="company">Company Organization</Label>
                                            </div>
                                            <div class="col-md-8 inputc">
                                                <Input class="" id="company" placeholder="Toyota"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="syear">Start Year</Label>
                                            </div>
                                            <div class="col-md-4">
                                                <Input class="inputc" type="month" id="syear" placeholder="Year"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="eyear">End Year</Label>
                                            </div>
                                            <div class="col-md-4">
                                                <Input class="inputc" type="month" id="eyear" placeholder="Year"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <p>I currently work here</p>
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <div class="col-md-1">
                                                <Input type="checkbox"></Input>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.employementCredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.employementCredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        {/* --------------------------------------------------------------------Modal Education Credential-------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <Modal isOpen={this.state.educationCredentialModal} toggle={this.educationCredential} >
                            <ModalHeader toggle={this.educationCredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="">
                                    <div class=" container row inputcred">
                                        <i class="fal fa-graduation-cap"></i>&nbsp;
                                <p>Add Education credential</p>
                                    </div>
                                    <Form>
                                        <div class=" row inputc">
                                            <div class="col-md-4">
                                                <Label for="school">School</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="school" placeholder="Stanford University"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="concentration"> Concentration</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="concentration" placeholder="Computer Science"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="sconcentration">Secondary Concentration</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="sconcentration" placeholder="Mathematics"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="degree">Degree</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="degree" placeholder="M. S."></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <p>I currently Study here</p>
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <div class="col-md-2">
                                                <Input type="checkbox"></Input>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.educationCredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.educationCredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        {/* ----------------------------------------------------------Modal Loaction Credential ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                        <Modal isOpen={this.state.locationCredentialModal} toggle={this.locationCredential} >
                            <ModalHeader toggle={this.locationCredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="">
                                    <div class=" container row inputcred">
                                        <i class="fal fa-map-marker-alt"></i> &nbsp;
                                <p>Add Location Credential</p>
                                    </div>
                                    <Form>
                                        <div class=" row inputc">
                                            <div class="col-md-5">
                                                <Label for="school">Location (required)</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" id="school" placeholder="Buenos Aries"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="eyear">Start Year</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" type="month" id="eyear" placeholder="Year"></Input>
                                            </div>
                                        </div> <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="eyear">End Year</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" type="month" id="eyear" placeholder="Year"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <p>I currently Live here</p>
                                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <div class="col-md-1">
                                                <Input type="checkbox"></Input>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.locationCredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.locationCredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        {/* --------------------------------------------------------------------Modal Topic Credential---------------------------------------------- */}
                        <Modal isOpen={this.state.topicCredentialModal} toggle={this.topicCredential} >
                            <ModalHeader toggle={this.topicCredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="">
                                    <div class=" container row inputcred">
                                        <i class="fa fa-mountains"></i> &nbsp;
                                <p>Add Topic  Credential</p>
                                    </div>
                                    <div class="container contcred ">
                                        <p>Good credentials are:</p>
                                        <div style={{ paddingLeft: "10px" }}>
                                            <div class="row">
                                                <i class="fal fa-check-circle icred"></i> &nbsp;
                                            <p>Short and specific</p>
                                            </div>
                                            <div class="row">
                                                <i class="fal fa-check-circle icred"></i> &nbsp;
                                            <p>Helpful, and aren't jokes</p>
                                            </div>
                                            <div class="row">
                                                <i class="fal fa-check-circle icred"></i> &nbsp;
                                            <p>Have correct grammar and spelling</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Form>
                                        <div class=" row inputc">
                                            <div class="col-md-4">
                                                <Label for="school">Select a topic</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="school" placeholder="Visiting and Travel"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-4">
                                                <Label for="eyear">Describe an experience</Label>
                                            </div>
                                            <div class="col-md-8">
                                                <Input class="inputc" id="eyear" placeholder="traveled through Europe"></Input>
                                            </div>
                                        </div> <div class="row inputc">
                                            <div class="col-md-4">

                                            </div>
                                            <div class="col-md-8 ">
                                                <p style={{ color: "#A8A8A8" }}>More examples: travel blogger</p>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.topicCredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.topicCredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        {/* -------------------------------------------------------------------Modal Language Credential------------------------------------------- */}
                        <Modal isOpen={this.state.languageCredentialModal} toggle={this.languageCredential} >
                            <ModalHeader toggle={this.languageCredential}><p class="font-weight-bold inputModalHead">Edit credentials<p class="font-weight-light inputcred">Credentials also appear on answers you write.</p></p></ModalHeader>
                            <ModalBody>
                                <div class="">
                                    <div class=" container row inputcred">
                                        <i class="fas fa-globe"></i> &nbsp;
                                <p>Add Language  Credential</p>
                                    </div>
                                    <div>
                                        <Input placeholder="Search for a language"></Input>
                                        {/* <div class="pcred"> */}
                                        <p style={{ color: "#A8A8A8" }} class="font-weight-light" >Adding a language credential will add you to Quora in that language, when supported.</p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.languageCredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.languageCredential}>Save</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div class="col-md-8">
                        <hr></hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2">
                                <p>Feeds</p>
                                <hr></hr>
                                {/* <Nav vertical>
                                    <NavItem>
                                        <NavLink href="#">Link</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Link</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Another Link</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink disabled href="#">Disabled Link</NavLink>
                                    </NavItem>
                                </Nav> */}
                                <ul class="" style={{ float: "left", marginLeft: "-27%" }}>
                                    <li class="pointer1" onClick={this.child.bind(this, <Profile_det />)}>Profile</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Answers />)}>Answers</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Questions />)}>Questions</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Shares />)}>Shares</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Spaces />)}>Spaces</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Post />)}>Posts</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Blogs />)}>Blogs</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Followers />)}>Followers</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Following />)}>Following</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Edits />)}>Edits</li>
                                    <li class="pointer1" onClick={this.child.bind(this, <Activity />)}>Activity</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                {/* <p>Profile</p>
                                <p style={{ float: "right" }}>Most Viewed</p>
                                
                                <hr></hr> */}
                                {this.state.val}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile
