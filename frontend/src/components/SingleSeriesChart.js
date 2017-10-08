import React, { Component } from 'react';
import Highcharts from 'highcharts';

export default class Graph extends Component {
  // props: column, containerId, title, yLabel, seriesName
    constructor() {
      super();
      this.state = {
        data: []
      };
    }

    componentWillMount() {
      fetch("/data?q=" + this.props.column, {
        accept: "application/json"
      })
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .then(() => {
        this.chart = new Highcharts["Chart"](this.props.containerId, {
          // Options
          title: {
            text: this.props.title
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            title: {
              text: this.props.yLabel
            }
          },
          tooltip: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            area: {
              dataLabels: {
                enabled: true,
                format: "{y} kWh"
              },
              tooltip: {
                dateTimeLabelFormats: {
                  day:"%b %Y"
                },
                valueSuffix: ' kWh'
              },
              enableMouseTracking: true
            }
          },

          series: [{
            type: 'area',
            name: this.props.seriesName,
            data: this.state.data
          }],

          credits: {
            enabled: false
          }
        });
      })
    }

    componentWillUnmount() {
      this.chart.destroy();
    }

    render() {
      return (
        <div id={this.props.containerId}></div>
      );
    }
}
