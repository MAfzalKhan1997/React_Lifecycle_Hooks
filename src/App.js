import React, { Component } from 'react';
import './App.css';

import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';

class App extends Component {

  constructor() {
    super()
    
    this.state = {

      volume:0,
    }
    this.furtherSteps = this.furtherSteps.bind(this);
  }

  furtherSteps(furtherSteps){
    this.setState({
      furtherSteps,
    })
  }

  componentWillMount() {
    this.setState({ volume: 5 })
  }

  render() {
    const { furtherSteps } = this.state;
    return (
      <div className="App">

        <Kid dressColor = 'blue' furtherSteps={furtherSteps} />
        <Teacher nextSteps={this.furtherSteps} />

      </div>
    );
  }
}

export default App;
