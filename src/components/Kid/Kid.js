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

static getDerivedStateFromProps(props,state){

  const { furtherSteps } = this.props;

  console.log('props',props)
  // console.log('dancesteps',this.state.danceSteps)
  return { danceSteps : furtherSteps }
  
 
}

  componentDidMount() {

    this.setState({
      emotion: 'nervous over',
      danceSteps: ['step1', 'step2'],
      startedPerforming: true,

    })

  }


  qualified() {
    this.setState({ startedPerforming: false })
  }

  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;

    return (
      <div>
        <div>dressColor: {dressColor} </div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion} </div>
        {
          startedPerforming && <div>
            Current Step: {danceSteps[currentStepIndex]}
            <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}

      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

