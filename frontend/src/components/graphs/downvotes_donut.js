import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Doughnut_graph extends Component{
    constructor(props){
        super(props);
    this.state={
 data : {
	labels: [
		'Answer1',
		'Answer2',
        'Answer3',
        'Answer4',
        'Answer5'

	        ],
	datasets: [{
		data: [50, 60, 70,80,100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        'Blue',
        'Purple'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        'Blue',
        'Purple'
		]
    }]
    
}
}
}//end of constructor

render(){
    return(
        <div>
            <Doughnut data={this.state.data}    options ={{
            title:{display:"true",text:'Answers vs Downvotes',fontSize:25},
            legend:{display:"true",position:"bottom"},
        }}/>
        </div>


    )
}


}

export default Doughnut_graph;