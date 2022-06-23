// --------------------
// Define Player Class
// --------------------
export default class Player {
	constructor(name, sl) {
		this.name = name;
		this.sl = Number(sl);
		this.turn = false;
		this.racetype = ""; //single or sl
		this.race = 0;
		this.score = 0;
		this.points = 0;
		this.timeoutcount = 0;
		this.timeouts = 1;
		this.gamenum = 1;
		this.ballsMade = [];
		this.gameselect = ""; //8ball or 9ball
		this.lagwinner = false; //who breaks first
		this.lastclicked = 0; //ball id
	}
}
let player1obj = new Player();
let player2obj = new Player();

export { player1obj, player2obj };
