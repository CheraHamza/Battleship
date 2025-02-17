import { Cell } from "./main.js";
import { renderBoard } from "./Ui.js";

export function startBattle(player1, player2) {
	const p1Name = document.querySelector(".p1Name");
	p1Name.textContent = player1.name;
	const p2Name = document.querySelector(".p2Name");
	p2Name.textContent = player2.name;

	const p1Board = document.querySelector(".player1 > .board");
	const p2Board = document.querySelector(".player2 > .board");

	const p1 = {
		id: 1,
		opponentType: player2.type == "computer" ? "C" : "H",
		player: player1,
		boardDiv: p1Board,
	};

	const p2 = {
		id: 2,
		opponentType: "H",
		player: player2,
		boardDiv: p2Board,
	};

	let turn = p2; // turn to receive attack

	handleGameFlow(turn.boardDiv, turn.player);

	function handleGameFlow(cellsContainer, player) {
		updateGameState();
		const cells = cellsContainer.querySelectorAll(".cell");

		// if player is a computer generate random pos
		if (turn.id == 1 && turn.opponentType == "C") {
			let legal = false;
			while (!legal) {
				let x = Math.floor(Math.random() * 10);
				let y = Math.floor(Math.random() * 10);
				const attackedCell = Cell(x, y);
				if (!player.gameboard.hasBeenHit(attackedCell)) {
					legal = true;
					player.gameboard.receiveAttack(attackedCell);
					updateGameState();
					handlePlayerTurns();
				}
			}
		} else {
			cells.forEach((cell) => {
				const x = cell.getAttribute("x");
				const y = cell.getAttribute("y");
				const attackedCell = Cell(x, y);

				if (!player.gameboard.hasBeenHit(attackedCell)) {
					cell.addEventListener("click", () => {
						player.gameboard.receiveAttack(attackedCell);
						updateGameState();
						handlePlayerTurns();
					});
				}
			});
		}

		function handlePlayerTurns() {
			if (!player.gameboard.allShipsSunk()) {
				turn = turn.id == 1 ? p2 : p1;
				handleGameFlow(turn.boardDiv, turn.player);
			}
		}

		function updateGameState() {
			const gameStateText = document.querySelector(".gameState");
			const playerName = document.querySelector(".gameState > span");
			if (player.gameboard.allShipsSunk()) {
				renderBoard(p1.player.gameboard, p1.boardDiv);
				renderBoard(p2.player.gameboard, p2.boardDiv);
				let winner = turn.id == 1 ? player2 : player1;
				gameStateText.textContent = `Game Over! ${winner.name} is the winner!`;
				playAgain();
			} else if (turn.id == 1) {
				renderBoard(p1.player.gameboard, p1.boardDiv, true);
				renderBoard(p2.player.gameboard, p2.boardDiv);
				playerName.textContent = player2.name;
				playerName.classList.toggle("second");
			} else if (turn.id == 2) {
				renderBoard(p1.player.gameboard, p1.boardDiv);
				renderBoard(p2.player.gameboard, p2.boardDiv, true);
				playerName.textContent = player1.name;
			}
		}

		function playAgain() {
			const gameDiv = document.querySelector(".game");
			const playAgainBtn = document.createElement("button");
			playAgainBtn.classList.add("playAgainBtn");
			playAgainBtn.textContent = "Play Again";
			gameDiv.appendChild(playAgainBtn);
			playAgainBtn.addEventListener("click", () => {
				location.reload();
			});
		}
	}
}
