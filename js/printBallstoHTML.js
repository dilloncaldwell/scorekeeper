//----------------------------------
// Create & print the balls to HTML
// if 8-ball wil print 15
// if 9-ball will print 9
//----------------------------------
const printBallsToHTML = (num) => {
	let arr = [];
	for (let i = 1; i < num + 1; i++) {
		let newButton = document.createElement("button");
		newButton.className = `ball ball-${i}`;
		newButton.innerHTML = `<span>${i}</span>`;
		newButton.dataset.id = i;
		newButton.dataset.clicked = false;
		if (i === 9) {
			newButton.dataset.points = 2;
		} else {
			newButton.dataset.points = 1;
		}
		arr.push(newButton);
	}
	arr.map((index) => {
		let balls = document.getElementById("balls");
		balls.appendChild(index);
	});
};

export default printBallsToHTML;
