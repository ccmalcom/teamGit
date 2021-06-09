import React from 'react';
import Geolocation from './components/geolocation/Geolocation';
import './App.css';
import Nasa from './components/apps/satellite/Satellite';
import Header from './site/Header';
import WeatherApp from './components/apps/weather/WeatherApp';
import EventDisplay from './components/apps/events/eventAutoSearch/EventDisplay'

function App() {

  const location = Geolocation();
  
  return (
    <div className="App">
      <Header />

      {/* <WeatherApp location={location}/>  */}

      <EventDisplay location={location} />
      <Nasa />

    </div>
  
  );
}

export default App;