import { usePlayer } from '../ComponentsProviders/PlayerProvider';

export const GameBoard = () => {
	const { player, enemy, isNameSet } = usePlayer();

	return (
		<>
			{isNameSet && (
				<>
					<h1>{player.name}</h1>
					<div className='battleships'>
						<ul>
							{player.playerBattleships.map((ship) => (
								<li>{ship.name}</li>
							))}
						</ul>
					</div>
					<div className='playerWaters'>
						{player.gameTiles.map((tile) => (
							<button>{tile.loc}</button>
						))}
					</div>
					<h1>{enemy.name}</h1>
					<div className='battleships'>
						<ul>
							{enemy.playerBattleships.map((ship) => (
								<li>{ship.name}</li>
							))}
						</ul>
					</div>
					<div className='playerWaters'>
						{enemy.gameTiles.map((tile) => (
							<button>{tile.loc}</button>
						))}
					</div>
				</>
			)}
		</>
	);
};
