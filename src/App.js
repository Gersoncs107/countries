import { useState, useEffect } from "react";




function App() {

  const [country, setCountry] = useState([])

  

  return (
    <div className="App">
      <div>
        <label>Find Countries</label>
        <input type='text'/>
      </div>
    </div>
  );
}

export default App;
