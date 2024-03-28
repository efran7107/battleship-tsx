import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Battleship, gameTile, Player } from "../typs";
import { generateTiles, getShips, setCpuShips } from "../Functions/functions";

type TPlayerProvider = {
  player: Player;
  enemy: Player;
  isNameSet: boolean;
  setName: (name: string) => void;
};

const PlayerContext = createContext<TPlayerProvider>({} as TPlayerProvider);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<Player>({
    name: "",
    gameTiles: generateTiles(),
    playerBattleships: getShips(),
  });
  const [enemy, setEnemy] = useState<Player>({
    name: "cpu",
    ...setCpuShips(generateTiles(), getShips()),
  });

  console.log(enemy);

  const [isNameSet, setIsNameSet] = useState(false);

  const setName = (name: string) => {
    setPlayer({ ...player, name: name });
    setIsNameSet(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        player,
        enemy,
        isNameSet,
        setName,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
