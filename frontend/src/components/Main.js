import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
		
import navbar from './dashboard/navbar';
import Home from './dashboard/home';
import login from './login'
import viewanswers from './questions/viewanswers';
import settings from './Popover_Navbar/settings'
import Interests from './Intrests/interests';
import Answer_views from './graphs/Answer_views';
import Answer_upvotes from './graphs/Answer_upvotes'
import Doughnut_graph from './graphs/downvotes_donut'
import bookmarkedanswers from './graphs/bookmarkedanswers'
import ConsolidatedGraphs from './graphs/graphconsolidated'

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
				<Route path="/Interests" component={Interests}/>
                <Route path="/Answer_views"  component={Answer_views} />
                <Route path="/Answer_upvotes" component={Answer_upvotes}/>
                <Route path="/Doughnut_graph" component ={Doughnut_graph}/>
                <Route path="/bookmarkedanswers" component={bookmarkedanswers}/>
                {/* <Route path="/profile" component={Profile}></Route> */}
				<Route path ="/ConsolidatedGraphs" component ={ConsolidatedGraphs}/>
                {/*Render Different Component based on Route*/}     
	
            </div>
        )
    }
}
//Export The Main Component
export default Main;