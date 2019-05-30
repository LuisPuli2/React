import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Ciudad de México",
  "Madrid",
  "China",
  "Cancún,mx"
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
