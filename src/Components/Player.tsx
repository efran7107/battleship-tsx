import { Player } from "../typs";

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
      <div className="playerWaters">
        {player.gameTiles.map((tile) => (
          <button>{tile.loc}</button>
        ))}
      </div>
    </div>
  );
};
