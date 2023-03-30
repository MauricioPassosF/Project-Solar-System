import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ title } />
      </div>
    );
  }
}

export default SolarSystem;
