// ------------------------------------
// console tests for debuging
// ------------------------------------
// console.log({});
// console.log();

import { player1obj, player2obj } from "./Player.js";

export const TEST = {
	getPlayerInfo: function (message) {
		console.log(message);
		console.log({ player1obj, player2obj });
	},
	getPlayerTimeouts: function (playerobj, limit, count) {
		if (playerobj == player1obj) {
			//is player 1
			console.log("p1TimeoutLimit", limit);
			console.log("p1TimeOutCount", count);
		} else {
			// is player 2
			console.log("p2TimeoutLimit", limit);
			console.log("p2TimeOutCount", count);
		}
	},
	testResetValues: function () {
		this.getPlayerInfo("testing reset values...");
	},
};
