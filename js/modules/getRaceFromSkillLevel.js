import { player1obj, player2obj } from "./Player.js";
import Game from "./Game.js";
import { Match } from "../main.js";
//---------------------------------------
// Determine Player races by skill level
// 8-ball
//---------------------------------------
function getRaceFromSkillLevel(p1SL, p2SL) {
	//  8-ball chart
	//  SL     2     3     4     5     6     7
	//  2   | 2/2 | 2/3 | 2/4 | 2/5 | 2/6 | 2/7
	//  3   | 3/2 | 2/2 | 2/3 | 2/4 | 2/5 | 2/6
	//  4   | 4/2 | 3/2 | 3/3 | 3/4 | 3/5 | 2/5
	//  5   | 5/2 | 4/2 | 4/3 | 4/4 | 4/5 | 3/5
	//  6   | 6/2 | 5/2 | 5/3 | 5/4 | 5/5 | 4/5
	//  7   | 7/2 | 6/2 | 5/2 | 5/3 | 5/4 | 5/5
	//arr index:SL== 0:2, 1:3, 2:4, 3:5, 4:6, 5:7
	let player1 = 0;
	let player2 = 0;
	let lowSkillLevelArray = [];
	let highSkillLevelArray = [];
	const lowRank = Math.min(p1SL, p2SL);
	const highRank = Math.max(p1SL, p2SL);
	const SLRaceSelecterFor8Ball = {
		2: [2, 2, 2, 2, 2, 2],
		3: [3, 2, 2, 2, 2, 2],
		4: [4, 3, 3, 3, 3, 2],
		5: [5, 4, 4, 4, 4, 3],
		6: [6, 5, 5, 5, 5, 4],
		7: [7, 6, 5, 5, 5, 5],
	};
	if (p1SL == p2SL) {
		//console.log("Skill levels are equal...");
		for (const SL in SLRaceSelecterFor8Ball) {
			if (p1SL == SL) {
				player1obj.race = SLRaceSelecterFor8Ball[SL][SL - 2];
				player2obj.race = SLRaceSelecterFor8Ball[SL][SL - 2];
			}
		}
	} else {
		//console.log("Skill levels are not equal...");
		lowRank == p1SL
			? ((player1 = lowRank), (player2 = highRank))
			: ((player1 = highRank), (player2 = lowRank));
		for (const SL in SLRaceSelecterFor8Ball) {
			lowRank == SL
				? lowSkillLevelArray.push(SLRaceSelecterFor8Ball[SL])
				: "";
			highRank == SL
				? highSkillLevelArray.push(SLRaceSelecterFor8Ball[SL])
				: "";
		}
		if (lowRank === player1) {
			switch (lowRank) {
				case 2:
					player2obj.race = highSkillLevelArray[0][0];
					break;
				case 3:
					player2obj.race = highSkillLevelArray[0][1];
					break;
				case 4:
					player2obj.race = highSkillLevelArray[0][2];
					break;
				case 5:
					player2obj.race = highSkillLevelArray[0][3];
					break;
				case 6:
					player2obj.race = highSkillLevelArray[0][4];
					break;
				case 7:
					player2obj.race = highSkillLevelArray[0][5];
			}
		} else {
			switch (lowRank) {
				case 2:
					player1obj.race = highSkillLevelArray[0][0];
					break;
				case 3:
					player1obj.race = highSkillLevelArray[0][1];
					break;
				case 4:
					player1obj.race = highSkillLevelArray[0][2];
					break;
				case 5:
					player1obj.race = highSkillLevelArray[0][3];
					break;
				case 6:
					player1obj.race = highSkillLevelArray[0][4];
					break;
				case 7:
					player1obj.race = highSkillLevelArray[0][5];
			}
		}
		if (highRank === player1) {
			switch (highRank) {
				case 2:
					player2obj.race = lowSkillLevelArray[0][0];
					break;
				case 3:
					player2obj.race = lowSkillLevelArray[0][1];
					break;
				case 4:
					player2obj.race = lowSkillLevelArray[0][2];
					break;
				case 5:
					player2obj.race = lowSkillLevelArray[0][3];
					break;
				case 6:
					player2obj.race = lowSkillLevelArray[0][4];
					break;
				case 7:
					player2obj.race = lowSkillLevelArray[0][5];
			}
		} else {
			switch (highRank) {
				case 2:
					player1obj.race = lowSkillLevelArray[0][0];
					break;
				case 3:
					player1obj.race = lowSkillLevelArray[0][1];
					break;
				case 4:
					player1obj.race = lowSkillLevelArray[0][2];
					break;
				case 5:
					player1obj.race = lowSkillLevelArray[0][3];
					break;
				case 6:
					player1obj.race = lowSkillLevelArray[0][4];
					break;
				case 7:
					player1obj.race = lowSkillLevelArray[0][5];
			}
		}
	}
	slp1r.textContent = player1obj.race;
	slp2r.textContent = player2obj.race;
}

export default getRaceFromSkillLevel;
