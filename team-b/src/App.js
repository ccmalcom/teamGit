import React from 'react';
import Geolocation from './components/geolocation/Geolocation';
import './App.css';
import WeatherApp from './components/apps/weather/WeatherApp';

import EventDisplay from './components/apps/events/eventAutoSearch/EventDisplay'


function App() {
  
  const location = Geolocation();
  
  return (
    <div className="App">


      <WeatherApp/> 

      <EventDisplay location={location} />

    </div>
  
  );
}

export default App;