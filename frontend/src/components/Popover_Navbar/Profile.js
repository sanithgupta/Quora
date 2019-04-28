import React, { Component } from 'react'
import Navbar from '../dashboard/navbar'
import './profile.css'
import { Button, Form, FormGroup, Label, Col, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip, Popover, PopoverHeader, PopoverBody, UncontrolledPopover, Input } from 'reactstrap';
import { Alert } from 'reactstrap';


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

import './profile.css'
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
            popoverOpen: false,
            educationCredentialModal: false,
            val: <Profile_det />
        };
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.tool = this.tool.bind(this);
        this.addcredential = this.addcredential.bind(this);
        this.addCredentialPopover = this.addCredentialPopover.bind(this);
        this.employementCredential = this.employementCredential.bind(this);
        this.educationCredential = this.educationCredential.bind(this);
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
    render() {
        return (
            <div>
                <Navbar />
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    <center>Added a Credential</center>
                </Alert>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                            <i class="fa fa-user fa fa-9x circle1"></i>
                        </div>
                        <div class="col-md-5">
                            <span class="font1"><h2 >Sai Krishna Reddy Jali</h2></span>
                            {/* <Button> */}
                            <a style={{ color: "gray" }} href="#" onClick={this.toggle}>{this.state.profileCrediential}</a><br></br>
                            <a style={{ color: "gray" }} href="#" onClick={this.toggle}>{this.state.description}</a>
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
                                            <i class="fal fa-graduation-cap addcred1" onClick={this.educationCredential}>Education</i>
                                            <hr></hr>
                                            <i class="fal fa-map-marker-alt addcred1">Location</i>
                                            <hr></hr>
                                            <i class="fal fa-mountains addcred1">Topics</i>
                                            <hr></hr>
                                            <i class="fal fa-globe addcred1">Language</i>
                                        </PopoverBody>
                                    </UncontrolledPopover>



                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <a href="#" style={{ color: "#AAAAAA" }} onClick={this.addcredential}>Cancel</a>{' '}
                                <Button color="primary" onClick={this.addcredential}>Save</Button>
                            </ModalFooter>
                        </Modal>

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
                                            <div class="col-md-5">
                                                <Label for="position">Position</Label>
                                            </div>
                                            <div class="col-md-7 inputinModal">
                                                <Input class="inputc" id="position" placeholder="Accountant"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="company">Company Organization</Label>
                                            </div>
                                            <div class="col-md-7 inputc">
                                                <Input class="" id="company" placeholder="Toyota"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="syear">Start Year</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" type="date" id="syear" placeholder="Year"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="eyear">End Year</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" type="date" id="eyear" placeholder="Year"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <p>I currently work here</p>
                                            </div>
                                            <div class="col-md-1">

                                            </div>
                                            <div class="col-md-5">
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
                                            <div class="col-md-5">
                                                <Label  for="school">School</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" id="school" placeholder="Stanford University"></Input>
                                            </div>

                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="concentration"> Concentration</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc" id="concentration" placeholder="Computer Science"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="sconcentration">Secondary Concentration</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc"  id="sconcentration" placeholder="Mathematics"></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <Label for="degree">Degree</Label>
                                            </div>
                                            <div class="col-md-7">
                                                <Input class="inputc"  id="degree" placeholder="M. S."></Input>
                                            </div>
                                        </div>
                                        <div class="row inputc">
                                            <div class="col-md-5">
                                                <p>I currently work here</p>
                                            </div>
                                            <div class="col-md-1">

                                            </div>
                                            <div class="col-md-5">
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
                                    <li class="pointer1" onClick={this.child.bind(this, <Followers />)}>Following</li>
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
