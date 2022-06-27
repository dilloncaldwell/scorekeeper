import Player, { player1obj, player2obj } from "./Player.js";
//-------------------------------------------------------------------------------
//reset the balls to an unclicked state and remove balls made from each player
//-------------------------------------------------------------------------------
function resetBalls(player1obj, player2obj) {
	const balls = document.getElementsByClassName("ball");
	for (let i = 0; i < balls.length; i++) {
		if (balls[i].classList.contains("clicked")) {
			balls[i].classList.toggle("clicked");
		}
	}
	let p1 = player1obj.ballsMade;
	let p2 = player2obj.ballsMade;
	p1.splice(0, p1.length);
	p2.splice(0, p2.length);
	player1obj.ballsMade = p1;
	player2obj.ballsMade = p2;
	p1MadeBalls.textContent = "";
	p2MadeBalls.textContent = "";
}

export default resetBalls;
