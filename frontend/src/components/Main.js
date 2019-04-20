import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
import Profile from './Popover_Navbar/Profile';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}></Route>
                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;