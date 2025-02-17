import humanIcon from "../assets/human.svg";
import computerIcon from "../assets/computer.svg";
import { Player } from "./main";
import { setupPlayerBoards } from "./boardSetup";

export function playerSetup(player1, player2) {
	let p2Type = "computer";
	const p2TypeInput = document.querySelector(".p2 > .type");

	p2TypeInput.addEventListener("click", () => {
		const playerImg = document.querySelector(".p2 > img");
		p2Type = p2TypeInput.querySelector('input[name="p2Type"]:checked').value;
		playerImg.src = p2Type == "computer" ? computerIcon : humanIcon;
	});

	const playerSubmitButton = document.querySelector(".submitBtn");

	playerSubmitButton.addEventListener("click", () => {
		const p1Name = document.getElementById("p1Name").value;
		const p1Type = "human";
		const p2Name = document.getElementById("p2Name").value;

		player1 = new Player(p1Name, p1Type);
		player2 = new Player(p2Name, p2Type);

		const playerSetupContainer = document.querySelector(".playerSetup");
		playerSetupContainer.id = "hidden";

		const boardSetupContainer = document.querySelector(".boardSetup");
		boardSetupContainer.removeAttribute("id");

		setupPlayerBoards(player1, player2);
	});
}
