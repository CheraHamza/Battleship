const main = require("./main");
const Ship = main.Ship;
const Gameboard = main.Gameboard;
const Cell = main.Cell;

describe("Ship class", () => {
	test("given a ship of size 5 with no hits, isSunk returns false", () => {
		const ship = new Ship(5);

		expect(ship.isSunk()).toBe(false);
	});

	test("given a ship of size 1 with 1 hit, isSunk returns true", () => {
		const ship = new Ship(1);
		ship.hit();

		expect(ship.isSunk()).toBe(true);
	});
});

describe("Gameboard class", () => {
	test("isLegal: given a legal cell [4, 4], returns true", () => {
		const gameboard = new Gameboard();

		expect(gameboard.isLegal(Cell(4, 4))).toBe(true);
	});

	test("isLegal: given an illegal cell [10, 10], returns true", () => {
		const gameboard = new Gameboard();

		expect(gameboard.isLegal(Cell(10, 10))).toBe(false);
	});

	test("Deploy: deploying a ship of size 4 starting from cell [0, 0] horizontally, returns 1", () => {
		const gameboard = new Gameboard();
		const ship = new Ship();

		expect(gameboard.deployShip(ship, Cell(0, 0), "H")).toBe(1);
	});

	test("Deploy: deploying a ship of size 4 starting from cell [0, 9] horizontally, returns 0", () => {
		const gameboard = new Gameboard();
		const ship = new Ship(4);

		expect(gameboard.deployShip(ship, Cell(0, 9), "H")).toBe(0);
	});

	test("Deploy: deploying a ship into an occupied cell, returns 0", () => {
		const gameboard = new Gameboard();
		const ship1 = new Ship(1);
		const ship2 = new Ship(1);
		gameboard.deployShip(ship1, Cell(0, 0), "H");

		expect(gameboard.deployShip(ship2, Cell(0, 0), "H")).toBe(0);
	});

	test("Receive: a cell should be marked as hit after receiving an attack", () => {
		const gameboard = new Gameboard();
		gameboard.receiveAttack(Cell(0, 0));

		expect(gameboard.hasBeenHit(Cell(0, 0))).toBe(true);
	});

	test("ShipsSunk: a board with one ship of size 1, should report all ships has been sunk if the ship gets hit", () => {
		const gameboard = new Gameboard();
		const ship = new Ship(1);
		gameboard.deployShip(ship, Cell(0, 0), "H");
		gameboard.receiveAttack(Cell(0, 0));

		expect(gameboard.allShipsSunk()).toBe(true);

	})


});
