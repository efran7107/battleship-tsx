export type gameTile = {
  id: number;
  loc: string;
  isShip: boolean;
  isPicked: boolean;
};

export type battleship = {
  name: string;
  hits: number;
  loc: gameTile[];
};
