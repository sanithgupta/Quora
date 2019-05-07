import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class line_graph extends Component{
    constructor(props){
        super(props);
    this.state={
     data : {
        labels: [],
        datasets: [
          {
            label: 'Upvotes',
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
            data: []
          }
        ]
      }}}

      componentDidMount() {
        console.log("entered component didmount answersupvotes")
        // axios.defaults.withCredentials = true;
        let user  = localStorage.getItem('user_id');
        console.log("user id ",user);
        var user_id={user_id:user}
        axios.post("http://localhost:3001/topupvotes",user_id)
          .then((response) => {
            console.log("after then console log linegraph", response.data);
            let ids = response.data.map(e => e._id.substring(1,5));
            let count = response.data.map(e => e.user_id_upvoted.length);
            console.log("ids",ids);
            console.log("couhnt",count);
            this.setState((prev)=>{
              let _s = prev.data; 
              _s.labels = ids;
              _s.datasets[0].data = count;
              return {
                data : _s
              }
            })
            // this.setState({data : { ...this.state.data,labels: ids}});
            // this.setState({data:{...this.state.data.datasets,data:count}});
        
          });
      }

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
        labelString: ''
      }
    }]}}}
    />

</div>
          )
      }

}

export default line_graph;
