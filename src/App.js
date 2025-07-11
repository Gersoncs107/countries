import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [country, setCountry] = useState([])

 useEffect(() => {
    axios.get('http://localhost:3001/countries')
      .then(response => {
        setCountry(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <label>Find Countries</label>
        <input type='text'/>
      </div>
      <div>
        {country.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>Capital: {item.capital}</p>
            <p>Population: {item.population}</p>
            <p>Area: {item.area} km²</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
