import jazzMusicians from "./data/jazzMusicians";
import { useState } from "react";

function App() {
  const [firstMusician, setFirstMusician] = useState("");
  const [musicians, setMusicians] = useState(jazzMusicians);

  const handleAddMusician = () => {
    if (firstMusician.trim() === "") {
      alert("scrivi correttamente il musicista che hai in mente!");
    } else {
      const newMusician = {
        id: musicians.length +1,
        musicista: firstMusician,
        strumenti: [],
        canzoni: []
      };
      setMusicians([newMusician, ...musicians]);
      setFirstMusician("");
      alert("Musicista aggiunto alla lista correttamente!")
    }
  };

  return (
    <>
      <div>
        <h1>Musicisti Jazz</h1>
        <ul>
          {musicians.map((musicista) => (
            <li key={musicista.id}>
              {musicista.musicista}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="container">
        <h2>JazzMusician Form</h2>
        <label className="form-label" htmlFor="musicista">
          Inserisci il nome del musicista che vuoi aggiungere
        </label>
        <input
          value={firstMusician}
          type="text"
          onChange={(event) => setFirstMusician(event.target.value)}
          autoComplete="off"
          className="form-control"
          id="musicista"
        />
        
        <button 
          onClick={handleAddMusician}
          className="btn btn-primary mt-2"
          type="button"
        >
          Aggiungi Musicista
        </button>
        
        <div className="mt-3">
          <h5>Musicisti disponibili:</h5>
          <ul className="list-group">
            {musicians.map((musicista) => (
              <li key={musicista.id} className="list-group-item">
                {musicista.musicista}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;