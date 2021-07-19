import React, { Component } from 'react';
import './App.css';
import Comitment from './components/comitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo ryšio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Comitment />
            <HaveServices />
          </div>
          <main className="plan-cards">
            <MobilePlan />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
