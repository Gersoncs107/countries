import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

 useEffect(() => {
    axios.get('http://localhost:3001/countries')
      .then(response => {
        const dataCountry = response.data
        console.log(country)
        setCountries(dataCountry)
      })
      .catch(error => {
        console.error("There was an error fetching the countries!", error);
      });
  }, []);
  

  const filterCountries = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Find Countries <input/>
        </label>
      </form>
    </div>
  );
}

export default App;
