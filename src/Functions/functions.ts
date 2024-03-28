import { Battleship, Player, gameTile } from "../typs";

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
      tiles.push(tile);
    }
  }
  return tiles;
};

export const getShips = (): Battleship[] => {
  return [
    {
      name: "Carrier",
      hits: 5,
      loc: [],
    },
    {
      name: "Battleship",
      hits: 4,
      loc: [],
    },
    {
      name: "Submarine",
      hits: 3,
      loc: [],
    },
    {
      name: "Destroyer",
      hits: 3,
      loc: [],
    },
    {
      name: "Patrol Boat",
      hits: 2,
      loc: [],
    },
  ];
};

const getRandomNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const setCpuShips = (
  tiles: gameTile[],
  ships: Battleship[]
): Omit<Player, "name"> => {
  for (const ship of ships) {
    // do {
    console.log(ship.name);

    const randomId = getRandomNum();
    console.log(randomId);

    tiles.map((tile) => (tile.id === randomId ? (tile.isPicked = true) : tile));

    // const randomTile = gameTiles.find((tile) => tile.id === randomId);
    // console.log(randomTile);
    // } while (ship.loc.length < ship.hits);
  }
  return { gameTiles: tiles, playerBattleships: ships };
};
