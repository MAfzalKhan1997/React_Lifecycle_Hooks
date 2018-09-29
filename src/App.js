import React, { Component } from 'react';
import './App.css';

import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';
import Judge from './components/Judge/Judge';

class App extends Component {

  constructor() {
    super()
    
    this.state = {

      // volume:0,
    }
    this.furtherSteps = this.furtherSteps.bind(this);
    this.applaud = this.applaud.bind(this);
  }

  static getDerivedStateFromProps(){

    return { 
      volume : 5 
    }

  }

  furtherSteps(furtherSteps){
    this.setState({
      furtherSteps,
    })
  }

applaud(){
  this.setState({
    applaud:'Happy',
  })
}
 
  render() {
    const { furtherSteps, applaud } = this.state;
    return (
      <div className="App">

        <Kid dressColor={'blue'} furtherSteps={furtherSteps} applaud={applaud} />
        <br />
        <Teacher nextSteps={this.furtherSteps} />
        <br />
        <br />
        <Judge giveApplaud={this.applaud} />

      </div>
    );
  }
}

export default App;
