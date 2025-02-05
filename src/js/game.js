const readline = require("readline-sync");
const main = require("./main");
const Cell = main.Cell;
const Player = main.Player;
const Ship = main.Ship;

class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}

	setUpBoards() {
		const ship = new Ship(1);
		const ship2 = new Ship(1);

		this.player1.gameboard.deployShip(ship, Cell(0, 0), "H");
		this.player2.gameboard.deployShip(ship2, Cell(0, 0), "V");
	}

	startGame() {
		let currentPlayer = this.player1;
		let gameEnded = false;

		while (!gameEnded) {
			let opponent =
				currentPlayer.name == this.player1.name ? this.player2 : this.player1;

			console.log(`${currentPlayer.name}'s turn to attack: `);
			let playerInput = readline
				.question("choose the target of your attack: ", "0, 0")
				.split(", ");

			const targetedCell = Cell(Number(playerInput[0]), Number(playerInput[1]));

			opponent.gameboard.receiveAttack(targetedCell);
			if (opponent.gameboard.allShipsSunk()) {
				gameEnded = true;
			} else {
				currentPlayer =
					currentPlayer.name == this.player1.name ? this.player2 : this.player1;
			}
		}

		console.log("Game Over!");
		console.log(`${currentPlayer.name} has won!`);
	}
}

const newGame = new Game(
	new Player("Hamza", "Player"),
	new Player("PC", "Computer")
);
newGame.setUpBoards();
newGame.startGame();
