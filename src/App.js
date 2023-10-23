import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    function success(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation([position.coords.latitude, position.coords.longitude]);
    }

    function error() {
      alert("Sorry, no position available.");
    }

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    function updateLocation() {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    updateLocation();

    const interval = setInterval(updateLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <p>{location[0]}</p>
        <p>{location[1]}</p>
      </header>
    </div>
  );
}

export default App;
