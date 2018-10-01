import React, { Component } from 'react';
import './App.css';

import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';
import Judge from './components/Judge/Judge';

class App extends Component {

  constructor() {
    super()

    this.state = { 
      available: true,
      judge: true,
    }

    this.furtherSteps = this.furtherSteps.bind(this);
    this.applaud = this.applaud.bind(this);
    this.stars = this.stars.bind(this);
    this.judge = this.judge.bind(this);
  }

  static getDerivedStateFromProps() { 
    return { volume: 5 }
  }

  furtherSteps(furtherSteps) {
    this.setState({
      furtherSteps,
    })
  }

  applaud() {
    this.setState({
      applaud: 'Happy',
    })
  }

  stars(stars) {
    this.setState({
      stars,
    })
  }

  judge(judge) {
    this.setState({
      judge,
    })
  }

  render() {
    const { furtherSteps, applaud, stars, available, judge } = this.state;
    return (
      <div className="App">
        <center>
          {
            available ? <div>
              <Kid dressColor={'blue'} furtherSteps={furtherSteps} applaud={applaud} stars={stars} judge={this.judge} />
              <br />
              <button onClick={() => this.setState({ available: false })}>Leave Kid</button>
              <br /> <br />
              <Teacher nextSteps={this.furtherSteps} />
            </div> : <p>Kid and Teacher Leaved</p>
          }
          <br /> <br />
          {
            judge ? <Judge giveApplaud={this.applaud} getStars={this.stars} />
              : <p>Now Judge also Leaved</p>
          }
        </center>
      </div>
    );
  }
}

export default App;
