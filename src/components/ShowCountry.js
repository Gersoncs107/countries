const ShowCountry = ({}) => {
    
    return(
        <ul>
              {filteredCountries.map((country) => (
                <li key={country.cca3 || country.ccn3 || country.cca2}>
                  {country.name?.common || country.name?.official || "No name"}
                  <button onClick={() => setSelectedCountry(country)}>Show</button>
                </li>
              ))}
            </ul>
    )
}