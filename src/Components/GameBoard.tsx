import { usePlayer } from "../ComponentsProviders/PlayerProvider";
import { PlayerBoard } from "./Player";
import "../styles/GameBoard.css";

export const GameBoard = () => {
  const { player, enemy, isNameSet } = usePlayer();
  const players = [player, enemy];

  return (
    <div className="battle-waters">
      {isNameSet && (
        <>
          {players.map((player) => (
            <PlayerBoard player={player} />
          ))}
        </>
      )}
    </div>
  );
};
