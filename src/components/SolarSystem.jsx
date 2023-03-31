import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const title = 'Planetas';
    return (
      <div data-testid="solar-system" className="solar-system container-column">
        <Title headline={ title } />
        <section className="planets container-row">
          {Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetImage={ image } planetName={ name } />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
