import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

/* Static 
    If we want to connect this to a database we would have to make this a renderable component that will query and mutate accordingly.

    As of now this will hold static data that is hard coded into the app, the data is not visible to viewers from the browser.
*/

class Graph extends Component{
    constructor(props) {
        super(props);
        this.state = {
            graphData:{
                labels: ['March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                    {
                        label: '',
                        data:[32, 20, 30, 45, 20, 24],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 205, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(153, 102, 255, 0.5)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: true
    }

    render() {
        return (
            <div className="graph">
                <Bar
                data = {this.state.graphData}
                options = {{
                    title:{
                        display:this.props.displayTitle,
                        text:'Vulernabilities Found',
                        fontSize:20
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:'left'
                    }
                }}
                />
            </div>
        )
    }
}

export default Graph;