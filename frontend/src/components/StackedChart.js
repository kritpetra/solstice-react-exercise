import React, { Component } from 'react';
import Highcharts from 'highcharts';

export default class Graph extends Component {
  // props: column1, column2, containerId, title, yLabel, series1, series2
    constructor() {
      super();
      this.state = {
        data1: [],
        data2: []
      };
    }

    componentWillMount() {
      fetch("/data?q=" + this.props.column1, {
        accept: "application/json"
      })
      .then(response => response.json())
      .then(data1 => this.setState({ data1 }))
      .then(fetch("/data?q=" + this.props.column2, {
        accept: 'application/json'
        })
        .then(response => response.json())
        .then(data2 => this.setState({ data2 }))
        .then(() => {
          this.chart = new Highcharts["Chart"](this.props.containerId, {
            // Options
            chart: {
              type: 'area'
            },
            title: {
              text: this.props.title
            },
            xAxis: {
              type: 'datetime'
            },
            yAxis: {
              title: {
                text: this.props.yLabel
              },
              labels: {
                format: '${value}'
              },
              reversedStacks: false
            },
            tooltip: {
              shared: true,
              valuePrefix: '$',
              formatter: function () {
                const monthyear = new Date(this.x).toLocaleString('en-us', {
                  timeZone: 'UTC',
                  month: 'long',
                  year: 'numeric'
                });

                return (
                  '<b>' + monthyear + '</b><br/>' +
                  "Your cost: <b>$" + this.points[0].y + "</b>" +
                  "<br/>You saved <b>$" + this.points[1].y + "</b> this month!"
                );
              },
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false
                }
              }
            },
            series: [
              {
                name: this.props.series1,
                data: this.state.data1,
                color: "#FF7F50",
                fillOpacity: 0.5
              },
              {
                name: this.props.series2,
                data: this.state.data2,
                // linkedTo: ":previous",
                color: "#FFD700",
                fillOpacity: 0.2,
                dashStyle: 'dash'
              }
            ]
          });
        }) // End second fetch
      ) // End first fetch

    }

    componentDidMount() { // Placeholder data and options

    }

    componentWillUnmount() {
      this.chart.destroy();
    }

    render() {
      return (<div id={this.props.containerId}>
      </div>);
    }
}
