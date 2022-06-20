import Player, { player1obj, player2obj } from "./functions/Player.js";
import getRaceFromSkillLevel from "./functions/getRaceFromSkillLevel.js";
import getPointsRaceFromSkillLevel from "./functions/getPointsRaceFromSkillLevel.js";
import printBallsToHTML from "./functions/printBallstoHTML.js";
import resetBalls from "./functions/resetBalls.js";
import reset from "./functions/reset.js";
import get9BallMP from "./functions/get9BallMP.js";

//------------------------------------------------------------
//------------------------------------------------------------
// Add Players to score board
//-------------------------------------------------------------
//-------------------------------------------------------------

//-------------------
// Define Variables
//-------------------
const player1Name = document.getElementById("player1-name");
const player1SL = document.getElementById("player1-skill-level");
const player1Race = document.getElementById("player1-race");
const player2Name = document.getElementById("player2-name");
const player2SL = document.getElementById("player2-skill-level");
const player2Race = document.getElementById("player2-race");
const addPlayersBtn = document.getElementById("players-add-player-btn");
const p1name = document.querySelector("#p1name");
const p1sl = document.querySelector("#p1sl");
const p2name = document.querySelector("#p2name");
const p2sl = document.querySelector("#p2sl");
const player1Details = document.querySelector("#player1-details");
const player2Details = document.querySelector("#player2-details");
const p1score = document.querySelector("#p1-score");
const p2score = document.querySelector("#p2-score");
const p1LagWinner = document.getElementById("p1LagWinner");
const p2LagWinner = document.getElementById("p2LagWinner");
const switchPlayer = document.getElementById("switch-player");
let p1DefenseCount = 0;
let p2DefenseCount = 0;
const p1DefenseCtr = document.querySelector("#p1DefenseCtr");
const p2DefenseCtr = document.querySelector("#p2DefenseCtr");
const defenseBtn = document.querySelector("#defenseBtn");
let p1TimeOutCount = 0;
let p2TimeOutCount = 0;
const p1TimeOutCtr = document.querySelector("#p1TimeOutCtr");
const p2TimeOutCtr = document.querySelector("#p2TimeOutCtr");
const timeOutBtn = document.querySelector("#timeOutBtn");
let inningCount = 0;
const inningCtrBtn = document.querySelector("#inningCtrBtn");
const inningCtr = document.querySelector("#inningCtr");
const p1WinnerBtn = document.getElementById("p1winner");
const p2WinnerBtn = document.getElementById("p2winner");
const p1s = document.querySelector("#p1s");
const p2s = document.querySelector("#p2s");
let SCORE1 = player1obj.score;
let SCORE2 = player2obj.score;
const p1MadeBalls = document.querySelector("#p1MadeBalls");
const p2MadeBalls = document.querySelector("#p2MadeBalls");
const balls = document.getElementsByClassName("ball");
const resetScoreBoard = document.querySelector("#reset");
let GAMENUM = 1;
let lagWinner = "";
let ballsDiv = document.querySelector("#balls");
let game = "";

//--------------------
// player details game
//--------------------

const singlerace = document.querySelector("#single-race");
const slrace = document.querySelector("#sl-race");
const racetodiv = document.querySelector(".race-to");
const addslplayers = document.querySelector("#add-players");
const addplayerssingle = document.querySelector("#add-players-single");

if (singlerace.checked) {
	addslplayers.style.display = "none";
	racetodiv.style.display = "block";
	addplayerssingle.style.display = "block";
}

singlerace.addEventListener("click", (event) => {
	if (event.target && event.target.matches("input[type='radio']")) {
		addslplayers.style.display = "none";
		racetodiv.style.display = "block";
		addplayerssingle.style.display = "block";
	}
});
slrace.addEventListener("click", (event) => {
	if (event.target && event.target.matches("input[type='radio']")) {
		racetodiv.style.display = "none";
		addplayerssingle.style.display = "none";
		addslplayers.style.display = "block";
	}
});

const startmatch = document.querySelector("#startmatch");
const matchDetailsContainer = document.querySelector(
	".match-details-container"
);
const singlePlayer1Name = document.querySelector("#single-player1-name");
const singlePlayer2Name = document.querySelector("#single-player2-name");
const singleRaceTo = document.querySelector("#raceto");
const p1BreaksFirst = document.querySelector("#p1");
const p2BreaksFirst = document.querySelector("#p2");
const hideSingle = document.querySelectorAll(".hideSingle");
const p1lag = document.querySelector("#p1lag");
const p2lag = document.querySelector("#p2lag");
const selectedGame8 = document.querySelector("#game-select-8");
const selectedGame9 = document.querySelector("#game-select-9");
const gameType = document.querySelector("#gameType");

startmatch.addEventListener("click", (e) => {
	e.preventDefault();

	if (selectedGame8.checked) {
		setGame("8ball");
		ballsDiv.style.width = "355px";
	}
	if (selectedGame9.checked) {
		setGame("9ball");
		ballsDiv.style.width = "285px";
	}
	if (slrace.checked && selectedGame9.checked) {
		let arr9ballslrace = document.querySelectorAll(".hide9andslrace");
		arr9ballslrace.forEach((item) => {
			item.classList.add("hide");
		});
		// console.log("adding hide class to hide9andslrace");
	}
	if (singlerace.checked) {
		matchDetailsContainer.style.display = "none";
		player1obj.racetype = "single";
		player2obj.racetype = "single";
		IsSingleRace(true);
		hideSingle.forEach((item) => {
			item.classList.add("hide");
		});
		player1obj.name = capitalizeFirstLetter(singlePlayer1Name.value);
		p1name.textContent = player1obj.name;
		player2obj.name = capitalizeFirstLetter(singlePlayer2Name.value);
		p2name.textContent = player2obj.name;
		player1obj.race = singleRaceTo.value;
		player2obj.race = singleRaceTo.value;
		slp1r.textContent = player1obj.race;
		slp2r.textContent = player2obj.race;
	}
	if (slrace.checked) {
		matchDetailsContainer.style.display = "none";
		player1obj.racetype = "sl";
		player2obj.racetype = "sl";
		IsSingleRace(false);
		//set player 1 obj
		player1obj.name = capitalizeFirstLetter(player1Name.value);
		player1obj.sl = player1SL.value;
		player1obj.timeouts = player1obj.sl <= 3 ? 2 : 1;
		player1obj.gamenum = 1;
		//set player2 obj
		player2obj.name = capitalizeFirstLetter(player2Name.value);
		player2obj.sl = player2SL.value;
		player2obj.timeouts = player2obj.sl <= 3 ? 2 : 1;
		player2obj.gamenum = 1;
		//Add player 1 details to scoreboard
		p1name.textContent = player1obj.name;
		p1sl.textContent = player1obj.sl;
		document.getElementById("p1TimeoutsAllowed").textContent =
			player1obj.timeouts;
		//Add player 2 details to scoreboard
		p2name.textContent = player2obj.name;
		p2sl.textContent = player2obj.sl;
		document.getElementById("p2TimeoutsAllowed").textContent =
			player2obj.timeouts;
		if (selectedGame8.checked) {
			getRaceFromSkillLevel(
				Number(p1sl.textContent),
				Number(p2sl.textContent)
			);
		}
		if (selectedGame9.checked) {
			getPointsRaceFromSkillLevel(
				Number(p1sl.textContent),
				Number(p2sl.textContent)
			);
		}
	}
	if (p1BreaksFirst.checked) {
		player1obj.turn = true;
		player1obj.lagwinner = true;
		player1Details.classList.add("activeTurn");
		p1lag.classList.add("lag");
		lagWinner = player1obj;
	}
	if (p2BreaksFirst.checked) {
		player2obj.turn = true;
		player2obj.lagwinner = true;
		player2Details.classList.add("activeTurn");
		p2lag.classList.add("lag");
		lagWinner = player2obj;
	}
	gameType.textContent = whatGame();

	//balls clicked event listener
	for (let i = 0; i < balls.length; i++) {
		balls[i].addEventListener("click", () => {
			let ballId = balls[i].dataset.id;
			let ballPoints = balls[i].dataset.points;
			if (getCurrentPlayer() == "Player 1") {
				player1obj.lastclicked = ballId;
			}
			if (getCurrentPlayer() == "Player 2") {
				player2obj.lastclicked = ballId;
			}
			addBallToPlayer(ballId, Number(ballPoints));
			if (balls[i].classList.contains("clicked")) {
				undoAddBallToPlayer(ballId, Number(ballPoints));
			}
			balls[i].classList.toggle("clicked");
			if (whatGame() == "8-Ball") {
				if (ballId == 8) {
					if8BallIsPocketed();
				}
			}
			if (whatGame() == "9-Ball") {
				if (ballId == 9) {
					if9BallIsPocketed();
				}
			}
		});
	}
});

function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

//----------------------------------
// Create the balls & Print in HTML
//----------------------------------
function setGame(gametype) {
	if (gametype == "8ball") {
		player1obj.gameselect = "8ball";
		player2obj.gameselect = "8ball";
		printBallsToHTML(15);
		game = "8-Ball";
		let arr8ball = document.querySelectorAll(".hideIf8Ball");
		arr8ball.forEach((item) => {
			item.classList.add("hide");
		});
	}
	if (gametype == "9ball") {
		player1obj.gameselect = "9ball";
		player2obj.gameselect = "9ball";
		printBallsToHTML(9);
		game = "9-Ball";
		let arr9ball = document.querySelectorAll(".hideIf9Ball");
		arr9ball.forEach((item) => {
			item.classList.add("hide");
		});
	}
}

function whatGame() {
	if (game == "8-Ball") {
		return "8-Ball";
	}
	if (game == "9-Ball") {
		return "9-Ball";
	}
}

export default function removeBallsFromHTML() {
	ballsDiv.innerHTML = "";
}

function disableBalls() {
	let balls = document.querySelectorAll(".ball");
	balls.forEach((ball) => {
		ball.disabled = true;
		ball.style.opacity = 0.5;
	});
}

//---------------------------------------------
// dead balls - 9-ball
//---------------------------------------------
const deadballs = document.querySelector("#dead");
const deadballsspan = document.querySelector("#deadballs");
let deadBallsArray = [];
deadballs.addEventListener("click", () => {
	if (getCurrentPlayer() == "Player 1") {
		let lastBall = player1obj.lastclicked;
		deadBallsArray.push(lastBall);
		undoAddBallToPlayer(lastBall, 1);
		deadballsspan.textContent = deadBallsArray.join(", ");
	}
	if (getCurrentPlayer() == "Player 2") {
		let lastBall = player2obj.lastclicked;
		deadBallsArray.push(lastBall);
		undoAddBallToPlayer(lastBall, 1);
		deadballsspan.textContent = deadBallsArray.join(", ");
	}
});

//-----------------------------------------
// determine if is single race or sl race
//-----------------------------------------
let isSingle = false;

function IsSingleRace(bool) {
	//return true or false if single race was checked
	bool == true ? (isSingle = true) : (isSingle = false);
}

// -----------------------------------
// handling the scores in scoreboard
// -----------------------------------

// sl race

//--------------------------
// get current player
//--------------------------
function getCurrentPlayer() {
	if (player1obj.turn == true) {
		return "Player 1";
	}
	if (player2obj.turn == true) {
		return "Player 2";
	}
}
//--------------------------
// get opponent player
//--------------------------
function getOpponent() {
	return getCurrentPlayer() === "Player 1" ? "Player 2" : "Player 1";
}

//--------------------------------------
//--------------------------------------
// Create Buttons & Listen for Events
//--------------------------------------
//--------------------------------------

//------------------
// Inning Counter
//------------------
function incrementInnings(playerobj) {
	if (playerobj !== lagWinner) {
		if (inningCount === 0) {
			inningCtr.textContent = inningCount;
		}
		inningCount++;
		inningCtr.textContent = inningCount;
	}
}

//--------------------------
// Switch player button
//--------------------------
function changeTurns(playerobj) {
	//this function sets the players turn boolean to opposite
	playerobj == player1obj
		? ((player1obj.turn = false), (player2obj.turn = true))
		: ((player1obj.turn = true), (player2obj.turn = false));
	// console.log({ player1obj, player2obj });
}
function toggleActiveClass() {
	player1Details.classList.toggle("activeTurn");
	player2Details.classList.toggle("activeTurn");
}
switchPlayer.addEventListener("click", () => {
	console.log({ player1obj, player2obj });
	if (getCurrentPlayer() == "Player 1") {
		changeTurns(player1obj);
		toggleActiveClass();
		incrementInnings(player1obj);
	} else if (getCurrentPlayer() == "Player 2") {
		changeTurns(player2obj);
		toggleActiveClass();
		incrementInnings(player2obj);
	}
});

//--------------------------
// Defense Button
//--------------------------
defenseBtn.addEventListener("click", () => {
	if (player1obj.turn == true) {
		p1DefenseCtr.textContent = ++p1DefenseCount;
	}
	if (player2obj.turn == true) {
		p2DefenseCtr.textContent = ++p2DefenseCount;
	}
});

//--------------------------
// TimeOut Button
//--------------------------
timeOutBtn.addEventListener("click", () => {
	let p1TimeoutLimit = player1obj.timeouts;
	let p2TimeoutLimit = player2obj.timeouts;
	if (player1obj.turn == true) {
		++p1TimeOutCount;
		if (p1TimeOutCount <= p1TimeoutLimit) {
			p1TimeOutCtr.textContent = p1TimeOutCount;
		}
	}
	if (player2obj.turn == true) {
		++p2TimeOutCount;
		if (p2TimeOutCount <= p2TimeoutLimit) {
			p2TimeOutCtr.textContent = p2TimeOutCount;
		}
	}
	// console.log(p1TimeoutLimit, p2TimeoutLimit);
});

//-----------------------------
// Winner functions
//-----------------------------
const winnerMessage = document.querySelector("#winnerAlertMessage");
const p1scoreSLR = document.querySelector("#p1-score-slr");
const p2scoreSLR = document.querySelector("#p2-score-slr");

function didPlayerMakeToHill(playerobj, score) {
	if (score == playerobj.race - 1) {
		return true;
	}
	return false;
}

function player1Wins() {
	if (
		player1obj.gameselect == "8ball" ||
		(player1obj.gameselect == "9ball" && player1obj.racetype == "single")
	) {
		console.log("game is not slrace of 9-ball...");
		//did player make to hill
		if (didPlayerMakeToHill(player1obj, SCORE1)) {
			console.log("player made it to hill...");
			player1obj.score = ++SCORE1;
			p1score.textContent = SCORE1;
			p1s.textContent = SCORE1;
			player1obj.turn = false;
			player2obj.turn = false;
			resetBalls(player1obj, player2obj);
			isWinner(player1obj);
			resetInnings();
			resetPlayersScore();
			player1Details.classList.remove("activeTurn");
			player2Details.classList.remove("activeTurn");
			winnerMessage.innerHTML = `
            <h1>Congrats! ${player1obj.name} Wins!</h1>
            <h1>Final Score: ${p1MP} - ${p2MP}</h1>
            `;
			disableBalls();
		} else {
			player1obj.turn = true;
			player2obj.turn = false;
			resetBalls(player1obj, player2obj);
			resetInnings();
			player2Details.classList.remove("activeTurn");
			player1Details.classList.add("activeTurn");
			player1obj.score = ++SCORE1;
			p1score.textContent = SCORE1;
			p1s.textContent = SCORE1;
		}
	} else if (
		(player1obj.gameselect = "9ball" && player1obj.racetype == "sl")
	) {
		console.log("game is sl race of 9-ball");
		if (player1obj.points >= player1obj.race) {
			console.log("points are equal or greater than race...");
			let mp = get9BallMP(Number(player2obj.sl), player2obj.points);
			winnerMessage.innerHTML = `
            <h1>Congrats! ${player1obj.name} Wins!</h1>
            <h1>Final Score: ${mp[0]} - ${mp[1]}</h1>
            `;
			disableBalls();
		} else {
			console.log("points have not met race... next game");
			player1obj.turn = true;
			player2obj.turn = false;
			resetBalls(player1obj, player2obj);
			resetInnings();
			player2Details.classList.remove("activeTurn");
			player1Details.classList.add("activeTurn");
		}
	}
}

function player2Wins() {
	if (
		player2obj.gameselect == "8ball" ||
		(player2obj.gameselect == "9ball" && player2obj.racetype == "single")
	) {
		console.log("game is not slrace of 9-ball...");
		//did player make to hill
		if (didPlayerMakeToHill(player2obj, SCORE2)) {
			console.log("player made it to hill...");
			player2obj.score = ++SCORE2;
			p2score.textContent = SCORE2;
			p2s.textContent = SCORE2;
			player1obj.turn = false;
			player2obj.turn = false;
			resetBalls(player1obj, player2obj);
			isWinner(player2obj);
			resetInnings();
			resetPlayersScore();
			player1Details.classList.remove("activeTurn");
			player2Details.classList.remove("activeTurn");
			winnerMessage.innerHTML = `
            <h1>Congrats! ${player2obj.name} Wins!</h1>
            <h1>Final Score: ${p2MP} - ${p1MP}</h1>
            `;
			disableBalls();
		} else {
			player2obj.turn = true;
			player1obj.turn = false;
			resetBalls(player1obj, player2obj);
			resetInnings();
			player1Details.classList.remove("activeTurn");
			player2Details.classList.add("activeTurn");
			player2obj.score = ++SCORE2;
			p2score.textContent = SCORE2;
			p2s.textContent = SCORE2;
		}
	} else if (
		(player2obj.gameselect = "9ball" && player2obj.racetype == "sl")
	) {
		console.log("game is sl race of 9-ball");
		if (player2obj.points >= player2obj.race) {
			console.log("points are equal or greater than race...");
			let mp = get9BallMP(Number(player1obj.sl), player1obj.points);
			winnerMessage.innerHTML = `
            <h1>Congrats! ${player2obj.name} Wins!</h1>
            <h1>Final Score: ${mp[0]} - ${mp[1]}</h1>
            `;
			disableBalls();
		} else {
			console.log("points have not met race... next game");
			player2obj.turn = true;
			player1obj.turn = false;
			resetBalls(player1obj, player2obj);
			resetInnings();
			player1Details.classList.remove("activeTurn");
			player2Details.classList.add("activeTurn");
		}
	}
}

//---------------
//isWinner
//---------------
function isWinner(playerobj) {
	if (playerobj == player1obj) {
		//winner is player 1
		getMP(player1obj.score, player2obj.score, player1obj);
	} else {
		//winner is player 2
		getMP(player1obj.score, player2obj.score, player2obj);
	}
}

// -------------------------
// get 9-ball points
// -------------------------

// ------------------
// get match points
// ------------------
let p1MP = 0;
let p2MP = 0;
function getMP(p1score, p2score, winner) {
	let player1race = player1obj.race;
	let player2race = player2obj.race;
	if (winner == player1obj) {
		if (isSingle == true) {
			p1MP = p1score;
			p2MP = p2score;
		} else {
			if (p2score === 0) {
				p1MP = 3;
				p2MP = 0;
			} else if (p2score === player2race - 1) {
				p1MP = 2;
				p2MP = 1;
			} else {
				p1MP = 2;
				p2MP = 0;
			}
		}
	} else {
		if (isSingle == true) {
			p1MP = p1score;
			p2MP = p2score;
		} else {
			if (p1score === 0) {
				p2MP = 3;
				p1MP = 0;
			} else if (p1score === player1race - 1) {
				p2MP = 2;
				p1MP = 1;
			} else {
				p2MP = 2;
				p1MP = 0;
			}
		}
	}
}

//-------------------
// reset innings
//-------------------
function resetInnings() {
	//console.log("resetting Innings...");
	inningCount = 0;
	inningCtr.textContent = 0;
}

// ------------------------------
// Gameover Button
// ------------------------------
const gameoverBtn = document.querySelector("#gameoverBtn");
const gameoverPopup = document.querySelector(".gameoverPopup");
const closeGameoverPopup = document.querySelector(".closeGameoverPopup");
const confirmBtn = document.querySelector(".confirm");
function openPopup() {
	gameoverPopup.classList.add("open");
}
function closePopup() {
	gameoverPopup.classList.remove("open");
}

gameoverBtn.addEventListener("click", () => {
	openPopup();
	document.querySelectorAll(".currPlayerName").forEach((item) => {
		item.textContent = getCurrentPlayer();
	});
});
gameoverPopup.addEventListener("click", (event) => {
	const isOutside = !event.target.closest(".gameoverPopupInner");
	if (isOutside) {
		closePopup();
	}
});
window.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closePopup();
	}
});
closeGameoverPopup.addEventListener("click", () => {
	closePopup();
});

confirmBtn.addEventListener("click", () => {
	const early8 = document.querySelector("#early8");
	const eightwrongpocket = document.querySelector("#eightwrongpocket");
	const scratchon8Ball = document.querySelector("#scratchon8Ball");
	const nineonSnap = document.querySelector("#nineonSnap");
	const eightOnB = document.querySelector("#eightOnB");
	const breaknRun = document.querySelector("#breaknRun");
	const currPlayerWins = document.querySelector("#currplayerwins");
	// console.log("currPlayer", getCurrentPlayer());
	if (getCurrentPlayer() == "Player 1") {
		if (
			currPlayerWins.checked == true ||
			breaknRun.checked == true ||
			eightOnB.checked == true ||
			nineonSnap.checked == true
		) {
			// if the current player wins
			closePopup();
			player1Wins();
			// console.log("pl wins..");
		} else if (
			early8.checked == true ||
			eightwrongpocket.checked == true ||
			scratchon8Ball.checked == true
		) {
			// if the current player loses
			closePopup();
			player2Wins();
			// console.log("p1 losses so p2 wins..");
		}
	} else if (getCurrentPlayer() == "Player 2") {
		if (
			currPlayerWins.checked == true ||
			breaknRun.checked == true ||
			eightOnB.checked == true ||
			nineonSnap.checked == true
		) {
			// if the current player wins
			closePopup();
			player2Wins();
		} else if (
			early8.checked == true ||
			eightwrongpocket.checked == true ||
			scratchon8Ball.checked == true
		) {
			// if the current player loses
			closePopup();
			player1Wins();
		}
	}
});

export function resetPlayersScore() {
	SCORE1 = 0;
	SCORE2 = 0;
	// console.log("reseting scores");
	// player1obj.score = 0;
	// player2obj.score = 0;
}

function updateGameNum() {
	player1obj.gamenum += 1;
	player2obj.gamenum += 1;
	gamectr.textContent = "Game " + player1obj.gamenum;
}

function if9BallIsPocketed() {
	deadBallsArray.length = 0;
	deadballsspan.textContent = "";
	//calculates num dead
	// deadctr.textContent = deadBallsArray.length + calcBallsRemaining();
	updateGameNum();
	openPopup();
	document.querySelectorAll(".currPlayerName").forEach((item) => {
		item.textContent = getCurrentPlayer();
	});
}
function if8BallIsPocketed() {
	updateGameNum();
	openPopup();
	document.querySelectorAll(".currPlayerName").forEach((item) => {
		item.textContent = getCurrentPlayer();
	});
}

const deadctr = document.querySelector("#deadctr");

function calcBallsRemaining() {
	let p1count = player1obj.ballsMade.length;
	let p2count = player2obj.ballsMade.length;
	let deadcount = deadBallsArray.length;
	let total = p1count + p2count + deadcount;
	let remaining = 9 - total;
	return remaining;
}

const gamectr = document.querySelector("#gamectr");
gamectr.textContent = "Game " + player1obj.gamenum;

//----------------------------------------------
// balls made array update when ball is clicked
//----------------------------------------------
let p1p = document.querySelector("#p1p");
let p2p = document.querySelector("#p2p");

function addBallToPlayer(ballId, ballPoints) {
	if (player1obj.turn == true) {
		if (!player1obj.ballsMade.includes(ballId)) {
			player1obj.ballsMade.push(ballId);
			p1MadeBalls.textContent = player1obj.ballsMade.join(", ");
			player1obj.points += ballPoints;
			p1p.textContent = player1obj.points;
			p1scoreSLR.textContent = player1obj.points;
			if (
				player1obj.gameselect == "9ball" &&
				player1obj.racetype == "sl"
			) {
				if (player1obj.points >= player1obj.race) {
					player1Wins();
				}
			}
		}
	}
	if (player2obj.turn == true) {
		if (!player2obj.ballsMade.includes(ballId)) {
			player2obj.ballsMade.push(ballId);
			p2MadeBalls.textContent = player2obj.ballsMade.join(", ");
			player2obj.points += ballPoints;
			p2p.textContent = player2obj.points;
			p2scoreSLR.textContent = player2obj.points;
			if (
				player2obj.gameselect == "9ball" &&
				player1obj.racetype == "sl"
			) {
				if (player2obj.points >= player2obj.race) {
					player2Wins();
				}
			}
		}
	}
}
function undoAddBallToPlayer(ballId, ballPoints) {
	if (player1obj.turn == true) {
		let arr = player1obj.ballsMade;
		// find index of ball id
		let indextoremove = arr.findIndex((id) => id === ballId);
		player1obj.points -= ballPoints;
		p1scoreSLR.textContent = player1obj.points;
		p1p.textContent = player1obj.points;
		arr.splice(indextoremove, 1);
		player1obj.ballsMade = arr;
		p1MadeBalls.textContent = player1obj.ballsMade.join(", ");
	}
	if (player2obj.turn == true) {
		let arr = player2obj.ballsMade;
		let indextoremove = arr.findIndex((id) => id === ballId);
		player2obj.points -= ballPoints;
		p2scoreSLR.textContent = player2obj.points;
		p2p.textContent = player2obj.points;
		arr.splice(indextoremove, 1);
		player2obj.ballsMade = arr;
		p2MadeBalls.textContent = player2obj.ballsMade.join(", ");
	}
}

//------------------
// reset ScoreBoard
//------------------
resetScoreBoard.addEventListener("click", () => {
	reset(inningCount, inningCtr);
});

// do the skillLevelChart modal to javascript make a different page and import it so it doesn't bloat index
