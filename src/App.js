import { useState, useEffect } from "react";
import axios from "axios";

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
  
  const filteredCountries = countries.filter((country)=> {
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Find Countries <input onChange={handleSearch}/>
        </label>
      </form>
    </div>
  );
}

export default App;
