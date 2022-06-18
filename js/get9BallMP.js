//-------------------------------------------
// get final Match Points for 9-ball
//-------------------------------------------
// 9-ball points chart
//loser  |
//  SL   | 20-0 | 19-1  | 18-2  | 17-3  | 16-4  | 15-5  | 14-6  | 13-7  | 12-8
//------------------------------------------------------------------------------
//   1   |  <3  |   3   |   4   | 5-6   |   7   |   8   |  9-10 |   11  | 12-13
//   2   |  <4  |  4-5  |  6-7  |  8    |  9-10 | 11-12 | 13-14 | 15-16 | 17-18
//   3   |  <5  |  5-6  |  7-9  | 10-11 | 12-14 | 15-16 | 17-19 | 20-21 | 22-24
//   4   |  <6  |  6-8  |  9-11 | 12-14 | 15-18 | 19-21 | 22-24 | 25-27 | 28-30
//   5   |  <7  |  7-10 | 11-14 | 15-18 | 19-22 | 23-26 | 27-29 | 30-33 | 34-37
//   6   |  <9  |  9-12 | 13-17 | 18-22 | 23-27 | 28-31 | 32-36 | 37-40 | 41-45
//   7   | <11  | 11-15 | 16-21 | 22-26 | 27-32 | 33-37 | 38-43 | 44-49 | 50-54
//   8   | <14  | 14-19 | 20-26 | 27-32 | 33-39 | 40-45 | 46-52 | 53-58 | 59-64
//   9   | <18  | 18-24 | 25-31 | 32-38 | 39-46 | 47-53 | 54-60 | 61-67 | 68-74

let winner9BallMP = 0;
let loser9BallMP = 0;

function get9BallMP(loserRank, loserPoints) {
	let x = loserPoints;
	//determine if losers points fall in given range, true|false
	const between = (x, min, max) => {
		return x >= min && x <= max;
	};
	switch (loserRank) {
		case 1:
			if (x < 3) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (x === 3) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (x === 4) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 5, 6)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (x === 7) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (x === 8) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 9, 10)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (x === 11) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}

		case 2:
			if (x < 4) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 4, 5)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 6, 7)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (x === 8) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 9, 10)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 11, 12)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 13, 14)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 15, 16)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 3:
			if (x < 5) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 5, 6)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 7, 9)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 10, 11)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 12, 14)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 15, 16)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 17, 19)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 20, 21)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 4:
			if (x < 6) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 6, 8)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 9, 11)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 12, 14)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 15, 18)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 19, 21)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 22, 24)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 25, 27)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 5:
			if (x < 7) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 7, 10)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 11, 14)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 15, 18)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 19, 22)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 23, 26)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 27, 29)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 30, 33)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 6:
			if (x < 9) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 9, 12)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 13, 17)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 18, 22)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 23, 27)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 28, 31)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 32, 36)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 37, 40)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 7:
			if (x < 11) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 11, 15)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 16, 21)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 22, 26)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 27, 32)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 33, 37)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 38, 43)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 44, 49)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 8:
			if (x < 14) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 14, 19)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 20, 26)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 27, 32)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 33, 39)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 40, 45)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 46, 52)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 53, 58)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
		case 9:
			if (x < 18) {
				winner9BallMP = 20;
				loser9BallMP = 0;
				break;
			} else if (between(x, 18, 24)) {
				winner9BallMP = 19;
				loser9BallMP = 1;
				break;
			} else if (between(x, 25, 31)) {
				winner9BallMP = 18;
				loser9BallMP = 2;
				break;
			} else if (between(x, 32, 38)) {
				winner9BallMP = 17;
				loser9BallMP = 3;
				break;
			} else if (between(x, 39, 46)) {
				winner9BallMP = 16;
				loser9BallMP = 4;
				break;
			} else if (between(x, 47, 53)) {
				winner9BallMP = 15;
				loser9BallMP = 5;
				break;
			} else if (between(x, 54, 60)) {
				winner9BallMP = 14;
				loser9BallMP = 6;
				break;
			} else if (between(x, 61, 67)) {
				winner9BallMP = 13;
				loser9BallMP = 7;
				break;
			} else {
				winner9BallMP = 12;
				loser9BallMP = 8;
				break;
			}
	}
	//return winner score and loser score in array
	return [winner9BallMP, loser9BallMP];
}

export default get9BallMP;
