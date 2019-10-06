function dart(){
	
	// 1 решение за взимане на елементите
	// document.querySelector('#firstLayer')
	// 	.addEventListener('click', handleScore(3));
	// document.querySelector('#secondLayer')
	// 	.addEventListener('click', handleScore(5));
	// 	document.querySelector('#thirdLayer')
	// 	.addEventListener('click', handleScore(7));
	// document.querySelector('#fourthLayer')
	// 	.addEventListener('click', handleScore(11));
	// document.querySelector('#fifthLayer')
	// 	.addEventListener('click', handleScore(13));
	// document.querySelector('#sixthLayer')
	// 	.addEventListener('click', handleScore(15));
	const PLAYERS = {
		HOME: 'Home',
		AWAY: 'Away',
	};
	let playerInTurn = PLAYERS.HOME;

	const updatePlayer = () => {
		playerInTurn = playerInTurn == PLAYERS.HOME
			? PLAYERS.AWAY
			: PLAYERS.HOME;
		const playerNotInTurn = playerInTurn = playerInTurn == PLAYERS.HOME
			? PLAYERS.AWAY
			: PLAYERS.HOME;
		const turnsElement = document.getElementById('turns');
		const homePlayer = turnsElement.firstElementChild;
		const awayPlayer = turnsElement.lastElementChild;

		if (playerInTurn ===  PLAYERS.HOME) {
			homePlayer.style.textDecoration = '';
			homePlayer.style.fontWeight = '';
			
			awayPlayer.style.textDecoration = '';
			awayPlayer.style.fontWeight = '';
		} else {
			homePlayer.style.textDecoration = 'none';
			homePlayer.style.fontWeight = 'normal';

			awayPlayer.style.textDecoration = 'underline';
			awayPlayer.style.fontWeight = 'bold';
		}
	};
	const updatePlayersScores = () => {
		Object.values(PLAYERS)
		.forEach(player => {
			document.getElementById(player)
			.firstElementChild	
			.innerHTML = scores[player];
		})
	};
	const handleScore = function (score) {
		return (ev) => {
			scores[playerInTurn] += score;
			updatePlayer();
			updatePlayersScores();
			ev.stopPropagation();
			console.log(scores)
		}
	};
	
	const points = [3, 5, 7, 11, 13, 15];
	const scores = {
		[PLAYERS.HOME]: 0,
		[PLAYERS.AWAY]: 0,
	};

	// [PLAYERS.AWAY] взимаме стойността на обекта и го правим пропърти, т.е. "home: 0"
	// 2 решение
	[...document.querySelectorAll('#playBoard div')]
		.forEach((layer, index) => 
		layer.addEventListener('click', handleScore(points[index]))
		);

}