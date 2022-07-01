import { resetPlayersScore } from "../main.js";
import { resetDefenseCount } from "../main.js";
import { resetMatchLength } from "../main.js";
import { player1obj, player2obj } from "./Player.js";
import resetBalls from "./resetBalls.js";
import removeBallsFromHTML from "../main.js";
import { TEST } from "./tests.js";
import { Match } from "../main.js";
import { getCurrentMatchStats } from "./getCurrentMatchStats.js";

//--------------------------------
// reset for Next Match Button
//--------------------------------

function reset(inningCount, inningCtr) {
	document.querySelector("#p1name").textContent = " Player #1";
	document.querySelector("#p2name").textContent = " Player #2";
	document.querySelector("#p1sl").textContent = "";
	document.querySelector("#p2sl").textContent = "";
	document.querySelector("#slp1r").textContent = "0";
	document.querySelector("#slp2r").textContent = "0";
	document.querySelector("#p1s").textContent = "0";
	document.querySelector("#p2s").textContent = "0";
	document.querySelector("#p1-score").textContent = "0";
	document.querySelector("#p2-score").textContent = "0";
	document.querySelector("#player1-details").classList.remove("activeTurn");
	document.querySelector("#player2-details").classList.remove("activeTurn");
	inningCount = 0;
	inningCtr.textContent = inningCount;
	document.getElementById("add-players").style.display = "block";
	document.querySelector(".lagQ").style.display = "block";
	p1DefenseCtr.textContent = 0;
	p2DefenseCtr.textContent = 0;
	p1TimeoutsAllowed.textContent = 0;
	p2TimeoutsAllowed.textContent = 0;
	p1TimeOutCtr.textContent = 0;
	p2TimeOutCtr.textContent = 0;
	p1MadeBalls.textContent = "";
	p2MadeBalls.textContent = "";
	document.querySelector(".match-details-container").style.display = "flex";
	resetBalls(player1obj, player2obj);
	document.getElementById("player1-name").value = "";
	document.getElementById("player1-skill-level").value = "";
	document.getElementById("player2-name").value = "";
	document.getElementById("player2-skill-level").value = "";
	document.querySelector("#single-player1-name").value = "";
	document.querySelector("#single-player2-name").value = "";
	document.querySelector("#raceto").value = "";
	document.querySelector("#game-select-8").checked = false;
	document.querySelector("#game-select-9").checked = false;
	document.querySelector("#single-race").checked = true;
	document.querySelector("#sl-race").checked = false;
	removeBallsFromHTML();
	document.querySelector("#p1").checked = false;
	document.querySelector("#p2").checked = false;
	document.querySelector("#add-players").style.display = "none";
	document.querySelector("#add-players-single").style.display = "block";
	document.querySelector(".race-to").style.display = "block";
	player1obj.lagwinner = false;
	player2obj.lagwinner = false;
	player1obj.turn = false;
	player2obj.turn = false;
	document.querySelector("#p1lag").classList.remove("lag");
	document.querySelector("#p2lag").classList.remove("lag");
	let arr8ball = document.querySelectorAll(".hideIf8Ball");
	arr8ball.forEach((item) => {
		item.classList.remove("hide");
	});
	let arr9ball = document.querySelectorAll(".hideIf9Ball");
	arr9ball.forEach((item) => {
		item.classList.remove("hide");
	});
	let arr9ballslrace = document.querySelectorAll(".hide9andslrace");
	arr9ballslrace.forEach((item) => {
		item.classList.remove("hide");
	});
	const hideSingle = document.querySelectorAll(".hideSingle");
	hideSingle.forEach((item) => {
		item.classList.remove("hide");
	});
	const winnerMessage = document.querySelector("#winnerAlertMessage");
	winnerMessage.innerHTML = "";
	resetPlayersScore();
	player1obj.gamenum = 1;
	player2obj.gamenum = 1;
	gamectr.textContent = "Game " + player1obj.gamenum;
	player1obj.lastclicked = "";
	player2obj.lastclicked = "";
	player1obj.points = 0;
	player2obj.points = 0;
	p1p.textContent = 0;
	p2p.textContent = 0;
	player1obj.score = 0;
	player2obj.score = 0;
	let balls = document.querySelectorAll(".ball");
	balls.forEach((ball) => {
		ball.disabled = false;
		ball.style.opacity = 1;
	});
	timeOutBtn.classList.remove("clicked");
	let p1TimeOutCount = 0;
	let p2TimeOutCount = 0;

	TEST.testResetValues();

	// Match.length = 0;
	resetMatchLength();
	document.querySelector(".match-stats").innerHTML = "";

	resetDefenseCount();
	getCurrentMatchStats();
}

export default reset;
