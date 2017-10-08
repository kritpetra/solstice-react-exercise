import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Graph from './Graph';
import NavigationArrow from './NavigationArrow';

import '../styles/App.css';

class App extends Component {
  render() {
    let innerComponent;
    if (this.props.location === 'about') { // TODO: more concise logic, time permitting
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

const AppContainer = props =>
  <div className="AppContainer">
    <Header {...props} />
    <App {...props} />
    <Footer />
  </div>;

export const AboutContainer = () => <AppContainer location='about' />;
export const EnergyGraph = () => <AppContainer location='energy' />;
export const CostsGraph = () => <AppContainer location='costs' />;
