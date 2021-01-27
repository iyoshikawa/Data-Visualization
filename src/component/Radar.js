import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';

/* Static 
    If we want to connect this to a database we would have to make this a renderable component that will query and mutate accordingly.

    As of now this will hold static data that is hard coded into the app, the data is not visible to viewers from the browser.
*/

class Velocity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            radarData:{
                labels:['Sprint 1', 'Sprint 2', 'Sprint 3','Sprint 4'],
                datasets: [
                    {
                        label: 'Current Sprint',
                        data: [ 30, 25, 26, 35 ],
                        fill: true,
                        backgroundColor: 'rgba(250, 99, 132, 0.2)',
                        borderColor: 'rgb(250, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: 'Last Sprint',
                        data: [ 24, 32, 35, 27 ],
                        fill: true,
                        backgroundColor: 'rgba(250, 99, 132, 0.2)',
                        borderColor: 'rgb(25, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132'
                    },
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
            <div className="radar">
                <Radar
                data = {this.state.radarData}
                options = {{
                    title:{
                        display:this.props.displayTitle,
                        text:'Sprint Analysis',
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

export default Velocity;