import React from 'react';
import '../../App.css'; 

export default class Teacher extends React.Component {
 
  constructor(){ 
    super(); 
 
    this.sendDataToKid = this.sendDataToKid.bind(this);
  }
 
  sendDataToKid() {
    const {nextSteps}  = this.props;
    
    const furtherSteps = [ 'step3' , 'step4' , 'step5' ]    
    nextSteps(furtherSteps);
 }
 
 render() {
   
   return (
     <button onClick={this.sendDataToKid}>Get Help From Teacher</button>
   );
 }
}
