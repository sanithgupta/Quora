import React , {Component} from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
import axios from 'axios';

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
    // componentDidMount() {
    //   console.log("entered component didmount answersupvotes")
    //   // axios.defaults.withCredentials = true;
    //   let user  = localStorage.getItem("user_id");
    //   console.log("user id ",user_id);
    //   var user_id={user_id:user}
    //   axios.post("http://localhost:3001/answerviews",user_id)
    //     .then((response) => {
    //       console.log("after then console log linegraph", response.data);
    //       let ids = response.data.map(e => e._id.substring(1,5));
    //       let count = response.data.map(e => e.views.length;
    //       console.log("ids",ids);
    //       console.log("couhnt",count);
    //       this.setState((prev)=>{
    //         let _s = prev.data; 
    //         _s.labels = ids;
    //         _s.datasets[0].data = count;
    //         return {
    //           data : _s
    //         }
    //       })
    //       // this.setState({data : { ...this.state.data,labels: ids}});
    //       // this.setState({data:{...this.state.data.datasets,data:count}});
      
    //     });
    // }

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
