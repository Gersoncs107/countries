const ShowCountry = ({name, onClick}) => {
    
    return(
        <li key={country.cca3 || country.ccn3 || country.cca2}>
                  {name}
                  <button onClick={onClick}>Show</button>
        </li>
    )
}

export default ShowCountry