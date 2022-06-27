import { player1obj, player2obj } from "./Player.js";
import Game from "./Game.js";
//---------------------------------------
// Determine Player points races by skill level
// 9-ball
//---------------------------------------
// 9-ball points chart
// SL  |  Points to Win
//  1  |   14
//  2  |   19
//  3  |   25
//  4  |   31
//  5  |   38
//  6  |   46
//  7  |   55
//  8  |   65
//  9  |   75

function getPointsRaceFromSkillLevel(p1SL, p2SL) {
	switch (p1SL) {
		case 1:
			player1obj.race = 14;
			break;
		case 2:
			player1obj.race = 19;
			break;
		case 3:
			player1obj.race = 25;
			break;
		case 4:
			player1obj.race = 31;
			break;
		case 5:
			player1obj.race = 38;
			break;
		case 6:
			player1obj.race = 46;
			break;
		case 7:
			player1obj.race = 55;
			break;
		case 8:
			player1obj.race = 65;
			break;
		case 9:
			player1obj.race = 75;
	}
	switch (p2SL) {
		case 1:
			player2obj.race = 14;
			break;
		case 2:
			player2obj.race = 19;
			break;
		case 3:
			player2obj.race = 25;
			break;
		case 4:
			player2obj.race = 31;
			break;
		case 5:
			player2obj.race = 38;
			break;
		case 6:
			player2obj.race = 46;
			break;
		case 7:
			player2obj.race = 55;
			break;
		case 8:
			player2obj.race = 65;
			break;
		case 9:
			player2obj.race = 75;
	}
	slp1p.textContent = player1obj.race;
	slp2p.textContent = player2obj.race;
	// console.log({ player1obj, player2obj });
	// let Match = [];
	// let maxgames = Number(player1obj.race) + Number(player2obj.race) - 1;

	// for (let i = 1; i <= maxgames; i++) {
	// 	let game = new Game();
	// 	Match.push({ game });
	// }
	// console.log(Match);
}

export default getPointsRaceFromSkillLevel;
