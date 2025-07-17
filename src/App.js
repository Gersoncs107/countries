import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";

function App() {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

 useEffect(() => {
    axios.get('http://localhost:3001/countries')
      .then(response => {
        const dataCountry = response.data
        console.log(dataCountry)
        setCountries(dataCountry)
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
      });
  }, []);
  
  const filteredCountries = countries.filter((country) => {
    const name =
      country.name?.common ||
      country.name?.official ||
      ""; // fallback to empty string if both missing
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
  <div className="App">
    <form>
      <label>
        Find Countries <input onChange={handleSearch} />
      </label>
    </form>

    <div>
        {searchTerm === "" ? null : filteredCountries.length > 10 ? (
        <p>Too many matches, please be more specific.</p>
      ) : filteredCountries.length === 0 ? (
        <p>No countries found.</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.cca3 || country.ccn3 || country.cca2}>
              {country.name?.common || country.name?.official || "No name"} <button onClick={null}>Show</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

}

export default App;
