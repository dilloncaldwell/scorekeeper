import Player, { player1obj, player2obj } from "./Player.js";
import { Match, p1DefenseCount, p2DefenseCount, inningCount } from "../main.js";
import Game from "./Game.js";
import { getCurrentMatchStats } from "./getCurrentMatchStats.js";

function addGameDetailsToMatchobj(winner) {
	let numOfGames = Match.length;
	let gameNumber = winner.gamenum;
	// console.log({ Match });
	// console.log({ numOfGames });
	// console.log({ gameNumber });
	// console.log({ winner });
	let winnerName = "";
	if (winner == player1obj) {
		winnerName = player1obj.name;
	} else {
		winnerName = player2obj.name;
	}

	switch (gameNumber) {
		case 1:
			let game1 = new Game();
			Match.push(game1);
			game1.winner = winnerName;
			game1.p1defense = p1DefenseCount;
			game1.p2defense = p2DefenseCount;
			game1.p1timeouts = player1obj.timeoutcount;
			game1.p2timeouts = player2obj.timeoutcount;
			game1.p1points = player1obj.points;
			game1.p2points = player2obj.points;
			game1.p1score = player1obj.score;
			game1.p2score = player2obj.score;
			game1.gameinnings = inningCount;
			break;
		case 2:
			let game2 = new Game();
			Match.push(game2);
			game2.winner = winnerName;
			game2.p1defense = p1DefenseCount;
			game2.p2defense = p2DefenseCount;
			game2.p1timeouts = player1obj.timeoutcount;
			game2.p2timeouts = player2obj.timeoutcount;
			game2.p1points = player1obj.points;
			game2.p2points = player2obj.points;
			game2.p1score = player1obj.score;
			game2.p2score = player2obj.score;
			game2.gameinnings = inningCount;
			break;
		case 3:
			let game3 = new Game();
			Match.push(game3);
			game3.winner = winnerName;
			game3.p1defense = p1DefenseCount;
			game3.p2defense = p2DefenseCount;
			game3.p1timeouts = player1obj.timeoutcount;
			game3.p2timeouts = player2obj.timeoutcount;
			game3.p1points = player1obj.points;
			game3.p2points = player2obj.points;
			game3.p1score = player1obj.score;
			game3.p2score = player2obj.score;
			game3.gameinnings = inningCount;
			break;
		case 4:
			let game4 = new Game();
			Match.push(game4);
			game4.winner = winnerName;
			game4.p1defense = p1DefenseCount;
			game4.p2defense = p2DefenseCount;
			game4.p1timeouts = player1obj.timeoutcount;
			game4.p2timeouts = player2obj.timeoutcount;
			game4.p1points = player1obj.points;
			game4.p2points = player2obj.points;
			game4.p1score = player1obj.score;
			game4.p2score = player2obj.score;
			game4.gameinnings = inningCount;
			break;
		case 5:
			let game5 = new Game();
			Match.push(game5);
			game5.winner = winnerName;
			game5.p1defense = p1DefenseCount;
			game5.p2defense = p2DefenseCount;
			game5.p1timeouts = player1obj.timeoutcount;
			game5.p2timeouts = player2obj.timeoutcount;
			game5.p1points = player1obj.points;
			game5.p2points = player2obj.points;
			game5.p1score = player1obj.score;
			game5.p2score = player2obj.score;
			game5.gameinnings = inningCount;
			break;
		case 6:
			let game6 = new Game();
			Match.push(game6);
			game6.winner = winnerName;
			game6.p1defense = p1DefenseCount;
			game6.p2defense = p2DefenseCount;
			game6.p1timeouts = player1obj.timeoutcount;
			game6.p2timeouts = player2obj.timeoutcount;
			game6.p1points = player1obj.points;
			game6.p2points = player2obj.points;
			game6.p1score = player1obj.score;
			game6.p2score = player2obj.score;
			game6.gameinnings = inningCount;
			break;
		case 7:
			let game7 = new Game();
			Match.push(game7);
			game7.winner = winnerName;
			game7.p1defense = p1DefenseCount;
			game7.p2defense = p2DefenseCount;
			game7.p1timeouts = player1obj.timeoutcount;
			game7.p2timeouts = player2obj.timeoutcount;
			game7.p1points = player1obj.points;
			game7.p2points = player2obj.points;
			game7.p1score = player1obj.score;
			game7.p2score = player2obj.score;
			game7.gameinnings = inningCount;
			break;
		case 8:
			let game8 = new Game();
			Match.push(game8);
			game8.winner = winnerName;
			game8.p1defense = p1DefenseCount;
			game8.p2defense = p2DefenseCount;
			game8.p1timeouts = player1obj.timeoutcount;
			game8.p2timeouts = player2obj.timeoutcount;
			game8.p1points = player1obj.points;
			game8.p2points = player2obj.points;
			game8.p1score = player1obj.score;
			game8.p2score = player2obj.score;
			game8.gameinnings = inningCount;
			break;
		case 9:
			let game9 = new Game();
			Match.push(game9);
			game9.winner = winnerName;
			game9.p1defense = p1DefenseCount;
			game9.p2defense = p2DefenseCount;
			game9.p1timeouts = player1obj.timeoutcount;
			game9.p2timeouts = player2obj.timeoutcount;
			game9.p1points = player1obj.points;
			game9.p2points = player2obj.points;
			game9.p1score = player1obj.score;
			game9.p2score = player2obj.score;
			game9.gameinnings = inningCount;
			break;
		case 10:
			let game10 = new Game();
			Match.push(game10);
			game10.winner = winnerName;
			game10.p1defense = p1DefenseCount;
			game10.p2defense = p2DefenseCount;
			game10.p1timeouts = player1obj.timeoutcount;
			game10.p2timeouts = player2obj.timeoutcount;
			game10.p1points = player1obj.points;
			game10.p2points = player2obj.points;
			game10.p1score = player1obj.score;
			game10.p2score = player2obj.score;
			game10.gameinnings = inningCount;
			break;
	}
	console.log(Match);
}

export default addGameDetailsToMatchobj;
