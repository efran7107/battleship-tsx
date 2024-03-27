import { ReactNode, createContext, useContext, useState } from "react";
import { battleship, gameTile, Player } from "../typs";
import { generateTiles } from "../Functions/functions";

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
    playerBattleships: [],
  });
  const [enemy, setEnemy] = useState<Player>({
    name: "cpu",
    gameTiles: generateTiles(),
    playerBattleships: [],
  });

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
