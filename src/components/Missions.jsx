import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const title = 'Missões';
    return (
      <div data-testid="missions" className="missions container-column">
        <Title headline={ title } />
        <section className="missions-panel container-row">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
