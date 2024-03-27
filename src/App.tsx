import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { NameInput } from "./Components/NameInput";
import { PlayerProvider } from "./ComponentsProviders/PlayerProvider";
import { generateTiles } from "./Functions/functions";

function App() {
  generateTiles();
  return (
    <>
      <PlayerProvider>
        <h1>Battleship</h1>
        <NameInput />
        <GameBoard />
      </PlayerProvider>
    </>
  );
}

export default App;
