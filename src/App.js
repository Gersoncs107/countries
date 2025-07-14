import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [country, setCountry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

 useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountry(response.data);
        console.log(response.data)
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
