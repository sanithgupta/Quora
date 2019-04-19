import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import navbar from './dashboard.js/navbar'


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={navbar}/>
                {/*Render Different Component based on Route*/}       
            </div>
        )
    }
}
//Export The Main Component
export default Main;