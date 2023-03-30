import React, { Component } from 'react';
import Title from './Title';
// import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const title = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ title } />
      </div>
    );
  }
}

export default Missions;
