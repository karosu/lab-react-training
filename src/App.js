import React, { Component } from 'react';

import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Roberts"
          firstName="Craig"
          gender="male"
          height={184}
          birth={new Date('1984-05-22')}
          picture="https://randomuser.me/api/portraits/men/34.jpg"
        />

        <IdCard
          lastName="Jones"
          firstName="Nicole"
          gender="female"
          height={169}
          birth={new Date('1993-03-16')}
          picture="https://randomuser.me/api/portraits/women/34.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="fr">Amelie</Greetings>
        <Greetings lang="es">Eduardo</Greetings>

        <h1>Random</h1>
        <Random min={3} max={6} />
        <Random min={1} max={100} />
      </div>
    );
  }
}

export default App;
