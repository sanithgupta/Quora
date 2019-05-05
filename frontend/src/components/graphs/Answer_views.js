import React , {Component} from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';

class Answer_views extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData : {
                labels:['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5', 'Answer6', 'Answer7', 'Answer8', 'Answer9', 'Answer10'],
                datasets: [
                      {
                        label: 'Answers',
                        data : [
                            55, 50, 49, 48, 39,38,37,36,33,31
                        ],
                        backgroundColor: ['rgb(255, 99, 132, 0.6)', 'yellow', 'blue', 'red', 'violet','black','red','violet','blue','yellow']
                    }
                ]  
            }
        }
    }

    render(){
        return(
   <div>
        {/* <h2>Pie Example</h2> */}
        <Bar data={this.state.chartData}  
        options ={{
            title:{display:"true",text:'Answer vs Views',fontSize:25},
            legend:{display:"true",position:"bottom"},
            scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Views'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Answers'
      }
    }],
  }
}}
        />
      </div>
        )
    }
}
export default Answer_views;
