import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ title } />
        {Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetImage={ image } planetName={ name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
