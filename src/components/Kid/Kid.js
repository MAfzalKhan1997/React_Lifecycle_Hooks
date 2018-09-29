import React from 'react';
import '../../App.css'; 

export default class Kid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      emotion: 'nervous',
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false

    };
  }

  static getDerivedStateFromProps(props, state) {
    const { furtherSteps, applaud } = props;
    const { danceSteps, emotion } = state;

    if (danceSteps.length < 5) {
      danceSteps.push(...furtherSteps)
    }

    return {
      danceSteps,
      startedPerforming: danceSteps.length === 5 ? true : false,
      emotion: applaud ? applaud : emotion,
    }

  }

  componentDidMount() {

    this.setState({
      danceSteps: ['step1', 'step2'],
    })

  }

  componentDidUpdate(prevProps) {

    if (prevProps.stars === 3) {
      this.qualified();
    }
  }

  qualified() {

    this.setState({
      startedPerforming: false,
      qualified: true,
      danceSteps: []
    })
  }

  componentWillUnmount() {

    const { judge } = this.props;
    judge(false);
  }

  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex, qualified } = this.state;

    return (
      <div>
        <div>dressColor: {dressColor} </div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion} </div>
        {
          startedPerforming ?
            <div>
              Current Step: {danceSteps[currentStepIndex]}
              <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
            </div>
            :
            qualified ? <p>You are Qualified</p> : null
        }
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

