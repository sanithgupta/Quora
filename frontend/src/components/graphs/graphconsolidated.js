import React,{Component} from 'react';
import {Route} from "react-router-dom"; 
import Downvotes from "./downvotes_donut";
import Answerupvotes from "./Answer_upvotes";
import Bookmarkedanswers from "./bookmarkedanswers";
import Answer_views from "./Answer_views";


class ConsolidatedGraphs extends Component {
    constructor(props){
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div><blockquote class="blockquote text-center">
  <p class="mb-0">User Graphs</p>
  {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
</blockquote>   
                <div  className="row">
                    
                    <div className="col-lg-4" id="bookmarkedleftmost" style ={{marginTop:"200px"}}>
                    {/* <h1 style={{marginTop:'-100px'}}>user</h1> */}
                     <Bookmarkedanswers  />    
                    </div>
                    <div className="col-lg-8" >
                    
                        <div className="row" >
                            <div className="col-lg-6"  style ={{marginTop:"50px"}} > <Answerupvotes /></div>
                            <div className="col-lg-6"  style ={{marginTop:"50px"}} ><Answer_views/></div>                
                        </div>
                        <div className="row" >
                            <div className="col-lg-6"  style ={{marginTop:"50px"}}><Downvotes /></div>
                            <div className="col-lg-6"  style ={{marginTop:"50px"}}>inside right 2</div>
                        </div>                                            
                    </div>

                </div>
            </div>
         );
    }
}
 
export default ConsolidatedGraphs;