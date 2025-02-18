import "../css/main.css";
import "../css/player.css";
import "../css/board.css";
import "../css/game.css";
import shipIcon from "../assets/ship.svg";
import hitIcon from "../assets/hit.svg";
import shipHitIcon from "../assets/hit_ship.svg";
import { Cell } from "./main.js";
import { playerSetup } from "./playerSetup.js";

export function renderBoard(board, container, shipsHidden = false) {
	container.innerHTML = "";

	addTextChildElement(container, " ", "columnNbr");

	for (let i = 0; i < 10; i++) {
		addTextChildElement(container, i + 1, "columnNbr");
	}
	for (let i = 0; i < 10; i++) {
		addTextChildElement(container, i + 1, "rowNbr");

		for (let j = 0; j < 10; j++) {
			const cell = Cell(i, j);
			const cellDiv = document.createElement("div");
			cellDiv.classList.add("cell");
			cellDiv.setAttribute("x", i);
			cellDiv.setAttribute("y", j);

			const cellImg = document.createElement("img");
			cellImg.classList.add("cellImg");
			if (board.hasBeenHit(cell) && board.isOccupied(cell) !== false) {
				cellImg.src = shipHitIcon;
			} else if (board.hasBeenHit(cell)) {
				cellImg.src = hitIcon;
			} else if (board.isOccupied(cell) !== false && !shipsHidden) {
				cellImg.src = shipIcon;
			} else {
				cellDiv.classList.add("active");
			}

			cellDiv.appendChild(cellImg);

			container.appendChild(cellDiv);
		}
	}
}

function addTextChildElement(container, text, className) {
	const elementDiv = document.createElement("div");
	elementDiv.classList.add(className);
	elementDiv.textContent = text;

	container.appendChild(elementDiv);
}

const rulesDialog = document.querySelector("dialog");
const showButton = document.querySelector(".rules");
const closeButton = document.querySelector(".closeDialog");

showButton.addEventListener("click", () => {
	rulesDialog.showModal();
});

closeButton.addEventListener("click", () => {
	rulesDialog.close();
});

let player1, player2;

playerSetup(player1, player2);
