import { PokemonProvider } from "./context/PokemonContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </div>
  );
}

export default App;
