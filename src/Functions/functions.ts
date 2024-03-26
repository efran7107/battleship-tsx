import { gameTile } from "../typs";

export const generateTiles = (): gameTile[] => {
  const tiles: gameTile[] = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const number = j + 1;
      const ten = i * 10;
      const id = ten + number;
      const loc = String.fromCharCode(65 + i) + number;

      const tile: gameTile = {
        id: id,
        loc: loc,
        isShip: false,
        isPicked: false,
      };
      console.log(tile);
    }
  }
  return tiles;
};
