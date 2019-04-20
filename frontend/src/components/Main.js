import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
import login from './login'


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={login}/>
                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;