import { Match } from "../main.js";
import { player1obj, player2obj } from "./Player.js";

let gameCount = 1;

function getCurrentMatchStats() {
	const matchStats = document.querySelector(".match-stats");
	console.log({ gameCount });
	if (Match.length === 0) {
		if (gameCount === 1) {
			matchStats.innerHTML =
				'<p class="no-games-played-stats-p">No games played yet. Check back later.</p>';
			return;
		}
		if (gameCount > 1) {
			gameCount = 1;
			console.log(
				"gamecount is greater than 1 resetting count to 1 and running function again..."
			);
			getCurrentMatchStats();
		} else {
			console.log("exit because match length is 0...");
			return;
		}
	}

	while (gameCount <= Match.length) {
		let matchGameNum = gameCount - 1;
		console.log("running through while loop...");
		if (Match[matchGameNum] == undefined) {
			return;
		}
		const noGamesPlayedMsg = document.querySelector(
			".no-games-played-stats-p"
		);
		if (noGamesPlayedMsg) {
			//if it exists the set display to none
			noGamesPlayedMsg.style.display = "none";
		}
		//create elements
		let row = document.createElement("div");
		row.className = "row";
		let col = document.createElement("div");
		col.className = "col";
		let tabs = document.createElement("div");
		tabs.className = "tabs";
		let tab = document.createElement("div");
		tab.className = "tab";
		let tabContent = document.createElement("div");
		tabContent.className = "tab-content";
		let gamedetails = document.createElement("div");
		gamedetails.className = "gamedetails";
		let gameStats = document.createElement("div");
		gameStats.className = "game-stats";
		let gamestats = document.createElement("div");
		gamestats.className = "gamestats";
		// append elements
		matchStats.appendChild(row);
		row.appendChild(col);
		col.appendChild(tabs);
		tabs.appendChild(tab);
		tab.innerHTML += `<input type="checkbox" id="chck${gameCount}">`;
		tab.innerHTML += `<label class="tab-label" for="chck${gameCount}">Game ${gameCount}</label>`;
		tab.appendChild(tabContent);
		tabContent.appendChild(gamedetails);
		gamedetails.appendChild(gameStats);

		gameStats.innerHTML += `<div class="gamestats">
                                <span>Players:</span>
                                <span class="hideIf8Ball hideIf9BallSingle">Points:</span><span class="hideIf9Ball">Score:</span>
                                <span class="timeout">Timeouts:</span>
                                <span>Defense:</span>
                                <span>Fouls:</span>
                            </div>`;

		gameStats.innerHTML += `<div class="p1gamestats">
                                ${player1obj.name}
                                <span><span class="hideIf8Ball hideIf9BallSingle">${Match[matchGameNum].p1points}</span><span class="hideIf9Ball">${Match[matchGameNum].p1score}</span>/${player1obj.race}</span>
                                <span class="timeout">${Match[matchGameNum].p1timeouts}/${player1obj.timeoutlimit}</span>
                                <span>${Match[matchGameNum].p1defense}</span>
                                <span>${Match[matchGameNum].p1fouls}</span>
                            </div>`;

		gameStats.innerHTML += `<div class="p2gamestats">
                                ${player2obj.name}
                                <span><span class="hideIf8Ball hideIf9BallSingle">${Match[matchGameNum].p2points}</span><span class="hideIf9Ball">${Match[matchGameNum].p2score}</span>/${player2obj.race}</span>
                                <span class="timeout">${Match[matchGameNum].p2timeouts}/${player2obj.timeoutlimit}</span>
                                <span>${Match[matchGameNum].p2defense}</span>
                                <span>${Match[matchGameNum].p2fouls}</span>
                            </div>`;

		gameStats.innerHTML += `<div class="gametotal">
                                <span>Winner is <span>${Match[matchGameNum].winner}</span>!</span>
                                <span>Innings: ${Match[matchGameNum].gameinnings}</span>
                            </div>`;
		if (player1obj.racetype == "sl") {
			if (player1obj.gameselect == "8ball") {
				const if8Ball = document.querySelectorAll(".hideIf8Ball");
				console.log({ if8Ball });
				if8Ball.forEach((element) => {
					element.style.display = "none";
				});
			}

			if (player1obj.gameselect == "9ball") {
				const if9Ball = document.querySelectorAll(".hideIf9Ball");
				if9Ball.forEach((element) => {
					element.style.display = "none";
				});
			}
		}

		if (player1obj.racetype == "single") {
			if (player1obj.gameselect == "8ball") {
				const if8Ball = document.querySelectorAll(".hideIf8Ball");
				console.log({ if8Ball });
				if8Ball.forEach((element) => {
					element.style.display = "none";
				});
			}

			if (player1obj.gameselect == "9ball") {
				const if9BallSingle =
					document.querySelectorAll(".hideIf9BallSingle");
				if9BallSingle.forEach((element) => {
					element.style.display = "none";
				});
			}
			let timeouts = document.querySelectorAll(".timeout");
			timeouts.forEach((div) => {
				div.style.display = "none";
			});
		}

		gameCount++;
	}
}

export { getCurrentMatchStats };
