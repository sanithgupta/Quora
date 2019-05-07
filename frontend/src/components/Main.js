import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
import login from './login'
import viewanswers from './questions/viewanswers';
import settings from './Popover_Navbar/settings'
import Profile from './Popover_Navbar/Profile';
import EditUserDetails from './Popover_Navbar/EditUserDetails'

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={login}/>
                <Route path="/viewanswers" component={viewanswers}/>
                <Route path='/settings' component={settings}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path='/edit' component={EditUserDetails}></Route>
                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;