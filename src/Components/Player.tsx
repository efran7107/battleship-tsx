import { Player } from "../typs";
import "../styles/PlayerBoard.css";

export const PlayerBoard = ({ player }: { player: Player }) => {
  return (
    <div className="player-board">
      <h1>{player.name}</h1>
      <div className="battleships">
        <ul>
          {player.playerBattleships.map((ship) => (
            <li>{ship.name}</li>
          ))}
        </ul>
      </div>
      <div className="player-waters">
        {player.gameTiles.map((tile) => (
          <button disabled={tile.isPicked}>{tile.loc}</button>
        ))}
      </div>
    </div>
  );
};
