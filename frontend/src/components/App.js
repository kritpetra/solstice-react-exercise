import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <div className="App">
        <p>{ JSON.stringify(this.state.data) }</p>
      </div>
    );
  }

  componentDidMount() { // TODO: Test fetching data -- delete
    fetch("/data", {
      accept: "application/json"
    })
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }
}

export default App;
