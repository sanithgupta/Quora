import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';

class line_graph extends Component{
    constructor(props){
        super(props);
    this.state={
     data : {
        labels: ['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5', 'Answer6', 'Answer7'],
        datasets: [
          {
            label: 'Answers vs upvotes',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }}}


      render(){
          return(
<div>
<Line data={this.state.data}       options ={{
            title:{display:"true",text:'Answers vs upvotes',fontSize:25},
            legend:{display:"true",position:"bottom"},
            scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Count of Upvotes'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Answers'
      }
    }]}}}
    />

</div>
          )
      }

}

export default line_graph;
