import { ReactNode, createContext, useState } from "react";
import { battleship, gameTile } from "../typs";
import { generateTiles } from "../Functions/functions";

type player = {
  name: string;
  gameTiles: gameTile[];
  playerBattleships: battleship[];
};

type TPlayerProvider = {
  player: player;
  enemy: player;
};

const PlayerContext = createContext<TPlayerProvider>({} as TPlayerProvider);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<player>({
    name: "",
    gameTiles: generateTiles(),
    playerBattleships: [],
  });
  const [enemy, setEnemy] = useState<player>({
    name: "",
    gameTiles: generateTiles(),
    playerBattleships: [],
  });

  return (
    <PlayerContext.Provider
      value={{
        player,
        enemy,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
