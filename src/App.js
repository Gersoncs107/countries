import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [country, setCountry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

//  useEffect(() => {
//     axios.get('http://localhost:3001/countries')
//       .then(response => {
//         setCountry(response.data);
//         console.log(response.data)
//       })
//       .catch(error => {
//         console.error("There was an error fetching the countries!", error);
//       });
//   }, []);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://localhost:3001/countries?name=${searchTerm}`)
        .then(response => {
          setCountry(response.data);
          // console.log(response.data);
        })
        .catch(error => {
          console.error("There was an error searching for countries!", error);
        });
    } 
  }, []);

  const filterCountries = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div>
         Find Countries <input type='text' onChange={filterCountries}/>
      </div>
      <div>
        {country.length > 0 ? (
          <ul>
            {country.map((item, idx) => (
              <li key={item.cca3 || item.ccn3 || item.cca2 || idx}>
                <h2>{item.name?.common || item.name?.official || "No name"}</h2>
                <p>Capital: {Array.isArray(item.capital) ? item.capital.join(", ") : item.capital || "N/A"}</p>
                <p>Population: {item.population || "N/A"}</p>
                <p>Area: {item.area ? `${item.area} km²` : "N/A"}</p>
                <p>Region: {item.region || "N/A"}</p>
                <p>Subregion: {item.subregion || "N/A"}</p>
                <p>
                    Languages:{" "}
                    {item.languages
                      ? Object.values(item.languages).join(", ")
                      : "No languages listed"}
                  </p>
                {item.flags?.svg || item.flags?.png ? (
                  <img
                    src={item.flags.svg || item.flags.png}
                    alt={`Flag of ${item.name?.common || item.name?.official || "country"}`}
                    style={{ width: "100px", height: "auto" }}
                  />
                ) : (
                  <span>No flag</span>
                )}
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
