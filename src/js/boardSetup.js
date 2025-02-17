import shipIcon from "../assets/ship.svg";
import horizontalIcon from "../assets/Horientation.svg";
import verticalIcon from "../assets/Vorientation.svg";
import { renderBoard } from "./Ui";
import { Cell, Ship, Gameboard } from "./main";
import { startBattle } from "./gameSetup";

export function setupPlayerBoards(player1, player2) {
	const numberOfShipsPerPlayer = 5;
	let gameboard = new Gameboard();

	let human_Players = [player1];
	if (player2.type == "human") {
		human_Players.push(player2);
	}

	const player_Name_Display = document.querySelector(".playerName");
	player_Name_Display.textContent = player1.name;

	const remainingShipsDisplay = document.querySelector("#remainingShips");
	renderIcon(remainingShipsDisplay, shipIcon, numberOfShipsPerPlayer);

	let shipSize = 5;
	const shipSizeDisplay = document.querySelector("#shipSizeValue");
	renderIcon(shipSizeDisplay, shipIcon, shipSize);

	const orientationInput = document.querySelector(".orientation");

	orientationInput.addEventListener("click", () => {
		if (orientationInput.getAttribute("value") == "H") {
			orientationInput.src = verticalIcon;
			orientationInput.setAttribute("value", "V");
		} else {
			orientationInput.src = horizontalIcon;
			orientationInput.setAttribute("value", "H");
		}
	});

	const clearBoardButton = document.querySelector(".clearBtn");

	clearBoardButton.addEventListener("click", () => {
		shipSize = 5;
		renderIcon(shipSizeDisplay, shipIcon, shipSize);
		renderIcon(remainingShipsDisplay, shipIcon, numberOfShipsPerPlayer);
		gameboard = new Gameboard();
		renderBoard(gameboard, boardDiv);
		bindClickEventsToCells();
		deployButton.disabled = true;
		deployButton.classList.add("disabled");
	});

	const deployButton = document.querySelector(".deployBtn");

	deployButton.addEventListener("click", () => {
		const currentPlayer = human_Players.shift();
		currentPlayer.gameboard = gameboard;
		clearBoardButton.click();
		if (human_Players.length == 0) {
			const setupBoardDisplay = document.querySelector(".boardSetup");
			setupBoardDisplay.id = "hidden";
			if (player2.type == "computer") {
				toggleLoadingComponent();
				player2 = randomize_Player_Gameboard(player2);
				setTimeout(() => {
					toggleLoadingComponent();
					const game = document.querySelector(".game");
					game.removeAttribute("id");
				}, 2000);
			} else {
				const game = document.querySelector(".game");
				game.removeAttribute("id");
			}
			// initiate game
			startBattle(player1, player2);
		} else {
			player_Name_Display.classList.add("second");
			player_Name_Display.textContent = human_Players[0].name;
		}
	});

	const boardDiv = document.querySelector(".board");
	renderBoard(gameboard, boardDiv);
	bindClickEventsToCells();

	function bindClickEventsToCells() {
		let cellDivs = boardDiv.querySelectorAll(".cell");
		cellDivs.forEach((cell) => {
			cell.addEventListener("click", () => {
				let remainingShips = remainingShipsDisplay.childNodes.length;
				const x = Number(cell.getAttribute("x"));
				const y = Number(cell.getAttribute("y"));
				const orientation = orientationInput.getAttribute("value");

				const newShip = new Ship(shipSize);
				const newCell = Cell(x, y);

				const errorMsg = document.querySelector(".errorMsg");
				errorMsg.textContent = "";
				if (gameboard.deployShip(newShip, newCell, orientation)) {
					shipSize--;
					renderIcon(shipSizeDisplay, shipIcon, shipSize);
					remainingShips--;
					renderIcon(remainingShipsDisplay, shipIcon, remainingShips);
					renderBoard(gameboard, boardDiv);
					if (remainingShips > 0) {
						bindClickEventsToCells();
					} else {
						deployButton.disabled = false;
						deployButton.classList.remove("disabled");
					}
				} else {
					errorMsg.textContent = "Error: Invalid Placement";
				}
			});
		});
	}
}

function renderIcon(container, source, repeat) {
	container.innerHTML = "";
	for (let i = 0; i < repeat; i++) {
		const newIcon = document.createElement("img");
		newIcon.src = source;
		container.appendChild(newIcon);
	}
}

export function randomize_Player_Gameboard(player) {
	let gameboard = player.gameboard;
	let remainingShips = 5;
	let shipSize = 5;
	while (remainingShips > 0) {
		let deployed = false;
		const newShip = new Ship(shipSize--);
		do {
			let x = Math.floor(Math.random() * 10);
			let y = Math.floor(Math.random() * 10);
			let orientation = ["H", "V"].at(Math.floor(Math.random() * 2));
			const position = Cell(x, y);
			if (gameboard.deployShip(newShip, position, orientation)) {
				deployed = true;
				remainingShips--;
			}
		} while (!deployed);
	}

	return player;
}

export function toggleLoadingComponent() {
	const isLoading = document.querySelector(".loader-container");

	if (isLoading) {
		isLoading.remove();
	} else {
		const gameContainer = document.querySelector(".gameContainer");

		const loaderContainer = document.createElement("div");
		loaderContainer.className = "loader-container";
		gameContainer.appendChild(loaderContainer);

		const loader = document.createElement("div");
		loader.className = "loader";
		loaderContainer.appendChild(loader);

		const loaderTxt = document.createElement("div");
		loaderTxt.textContent = `Machine is deploying...`;
		loaderContainer.appendChild(loaderTxt);
	}
}
