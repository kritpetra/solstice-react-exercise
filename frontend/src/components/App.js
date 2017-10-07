import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Graph from './Graph';
import NotFound from './NotFound';
import NavigationArrow from './NavigationArrow';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() { // TODO: change so that data is only fetched once
    fetch("/data", {
      accept: "application/json"
    })
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  render() {
    let innerComponent;
    if (this.props.location === 'about') {
      innerComponent =
        <div className="App">
          <NavigationArrow direction='left' inactive />
          <About />
          <NavigationArrow direction='right' to='energy' />
        </div>;
    } else if (this.props.location === 'energy') {
      innerComponent =
        <div className="App">
          <NavigationArrow direction='left' to='about' />
          <Graph type={'energy'} containerId='energy-chart'/>
          <NavigationArrow direction='right' to='costs' />
        </div>;
    } else if (this.props.location === 'costs') {
      innerComponent =
        <div className="App">
          <NavigationArrow direction='left' to='energy' />
          <Graph type={'costs'} containerId='costs-chart'/>
          <NavigationArrow direction='right' inactive />
        </div>;
    } else {
      throw new Error('Invalid props.location in App');
    }

    return innerComponent;
  }
}

const AppWrapper = props =>
  <div className="AppContainer">
    <Header {...props} />
    <App {...props} />
    <Footer />
  </div>;

export const AboutContainer = () => <AppWrapper location='about' />;
export const EnergyGraph = () => <AppWrapper location='energy' />;
export const CostsGraph = () => <AppWrapper location='costs' />;
