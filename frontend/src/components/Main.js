import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
<<<<<<< HEAD
import login from './login'
import viewanswers from './questions/viewanswers';

=======
import Profile from './Popover_Navbar/Profile';
>>>>>>> 2ad42f2aecf35853d69ede0cf6f2a857009b242c

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Home}/>
<<<<<<< HEAD
                <Route path="/login" component={login}/>
                <Route path="/viewanswers" component={viewanswers}/>

=======
                <Route path="/profile" component={Profile}></Route>
>>>>>>> 2ad42f2aecf35853d69ede0cf6f2a857009b242c
                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;