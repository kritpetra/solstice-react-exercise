import React, { Component } from 'react';

import SingleSeriesChart from './SingleSeriesChart';
import StackedChart from './StackedChart';

export default class Graph extends Component {
    render() {
      if (this.props.type === 'energy') {
        return (
          <SingleSeriesChart
            column={'kwh'}
            containerId={this.props.containerId}
            title={'Energy Use Over Time'}
            seriesName={'Energy Use'}
            yLabel={'Energy Use (kWh)'}
          />);
      } else if (this.props.type === 'costs') {
        return (
          <StackedChart
            column1={'bill'}
            column2={'savings'}
            containerId={this.props.containerId}
            title={'Power Costs and Savings'}
            series1={'Cost with Solar Power'}
            series2={'Normal Cost'}
            yLabel={'Amount'}
          />);
      }
    }
}
