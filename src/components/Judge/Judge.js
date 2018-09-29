import React from 'react';
import '../../App.css';

export default class Judge extends React.Component {
  constructor() {
    super()

    this.state = {
      stars: 0,
      available: 'Yes'
    }
  }

  applaud() {

    this.props.giveApplaud();
  }

  provideStars() {
    const { stars } = this.state;
    const { getStars } = this.props;

    this.setState({
      stars: stars + 1
    })
    getStars(stars);
  }

  shouldComponentUpdate(nextProps, nextState) {

    return nextState.stars <= 5
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud.bind(this)}>
          Appreciate performance
        </button>
        <button type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
        </button>
        <br />
        Kid is available: {available}
        <br />
        Stars gained: {stars}
      </div>
    );
  }
} 