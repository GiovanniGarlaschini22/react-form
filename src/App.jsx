// IMPORT //
import jazzMusicians from "./data/jazzMusicians";
import {useState} from "react";

function App() {
  const [firstMusician, setFirstMusician] = useState("Pat Metheny");
  return (
    <>
      <div>
        <h1>Musicisti Jazz</h1>
        <ul>
          {jazzMusicians.map((musicista) => (
            <li key={musicista.id}>
              {musicista.musicista}
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2>JazzMusician Form</h2>
        <label className="form-label" htmlFor="musician">
          Inserisci il nome del musicista che vuoi aggiungere
        </label>
        <input
          value={firstMusician}
          type="text"
          autoComplete="off"
          className="form-control"
          id="musicista"
          />
      </div>
    </>
  );
}

export default App;