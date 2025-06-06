// IMPORT //
import jazzMusicians from "./data/jazzMusicians";

function App() {
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
    </>
  );
}

export default App;