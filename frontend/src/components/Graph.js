import React, { Component } from 'react';
import Highcharts from 'highcharts';

export default class Graph extends Component {
    constructor() {
      super();
      this.chart = null;
    }

    componentDidMount() { // Placeholder data and options
      this.chart = new Highcharts["Chart"](this.props.containerId, {
        // Options
        title: {
          text: "Title of the Chart"
        },
        xAxis: {
          categories: ['a', 'b', 'c', 'd']
        },
        yAxis: {
          title: {
            text: "Y-Axis Label"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: true
          }
        },

        series: [{
          type: 'area',
          name: 'Series1',
          data: [100, 150, 300, 230]
        }]
      });
    }

    componentWillUnmount() {
      this.chart.destroy();
    }

    render() {
      return (<div id={this.props.containerId}>
      </div>);
    }
}
