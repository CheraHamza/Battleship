const main = require("./main");
const Ship = main.Ship;

describe("Ship class", () => {
	const Ship1 = new Ship(5);
	test("given a ship of length 5 with no hits, isSunk returns false", () => {
		expect(Ship1.isSunk()).toBe(false);
	});

	const Ship2 = new Ship(1);
	Ship2.hit();

	test("given a ship of length 1 with 1 hit, isSunk returns true", () => {
		expect(Ship2.isSunk()).toBe(true);
	});
});
