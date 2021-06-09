import React from 'react';
import Geolocation from './components/geolocation/Geolocation';
import './App.css';
import Nasa from './components/apps/satellite/Satellite';

import WeatherApp from './components/apps/weather/WeatherApp';

function App() {

  return (
    <div className="App">
      <WeatherApp/> 

import EventDisplay from './components/apps/events/eventAutoSearch/EventDisplay'


  const location = Geolocation();

  return (
    <div className="App">



      <EventDisplay location={location} />

    </div>
  
  );
}

export default App;