import React, { Component } from 'react';
import './App.css';

import Kid from './components/Kid/Kid';

class App extends Component {

  constructor() {
    super()
    this.state = {

      volume:0,
    }
  }

  componentWillMount() {
    this.setState({ volume: 5 })
  }

  render() {
    return (
      <div className="App">

        <Kid dressColor = 'blue' />

      </div>
    );
  }
}

export default App;
