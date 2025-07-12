import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [country, setCountry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

 useEffect(() => {
    axios.get('http://localhost:3001/countries')
      .then(response => {
        setCountry(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://localhost:3001/countries?name=${searchTerm}`)
        .then(response => {
          setCountry(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error("There was an error searching for countries!", error);
        });
    } else {
      axios.get('http://localhost:3001/countries')
        .then(response => {
          setCountry(response.data);
          console.log(response.data);   
    })
        .catch(error => {
          console.error("There was an error fetching the countries!", error);
        });
    }
  }, [searchTerm]);

  const filterCountries = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <label>Find Countries</label>
        <input type='text' onChange={filterCountries}/>
      </div>
      <div>
        {country.length > 0 ? (
          <ul>
            {country.map((item) => (
              <li key={item.name}>
                <h2>{item.name}</h2>
                <p>Capital: {item.capital}</p>
                <p>Population: {item.population}</p>
                <p>Area: {item.area} km²</p>
                <p>Region: {item.region}</p>
                <p>Subregion: {item.subregion}</p>
                <p>Languages: {item.languages.map(lang => lang.name).join(', ')}</p>
                <img src={item.flags.png} alt={`Flag of ${item.name}`} style={{ width: '100px', height: 'auto' }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
}

export default App;
