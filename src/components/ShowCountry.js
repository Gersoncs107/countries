const ShowCountry = ({name, onClick}) => {
    
    return(
        <ul>
              {filteredCountries.map((country) => (
                <li key={country.cca3 || country.ccn3 || country.cca2}>
                  {name}
                  <button onClick={onClick}>Show</button>
                </li>
              ))}
            </ul>
    )
}

export default ShowCountry