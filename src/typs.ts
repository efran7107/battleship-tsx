export type Player = {
  name: string;
  gameTiles: gameTile[];
  playerBattleships: Battleship[];
};

export type gameTile = {
  id: number;
  loc: string;
  isShip: boolean;
  isPicked: boolean;
};

export type Battleship = {
  name: string;
  hits: number;
  loc: gameTile[];
};
