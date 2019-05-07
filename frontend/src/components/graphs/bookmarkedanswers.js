import React,{Component}from 'react';
import {Polar} from 'react-chartjs-2';
class bookmarkedanswers extends Component{
    constructor(props){
        super(props);
    this.state={

         data : {
            datasets: [{
              label: 'Upvotes',
              data: [
                11,
                16,
                7,
                3,
                12
                
              ],
              backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB'
              ],
              // label: 'My dataset' // for legend

            }],
            labels: [
              'cced',
              'cd02',
              'cd0b',
              'cd0f',
              'cd0h'
              
            ]
          }
    }
}



render(){
    return(
        <div>
           
        <Polar data={this.state.data}
        options ={{
            title:{display:"true",text:'Bookmarked Answers',fontSize:25},
            legend:{display:"true",position:"bottom"}}} /> 
        </div>

    )
}
}
export default bookmarkedanswers;