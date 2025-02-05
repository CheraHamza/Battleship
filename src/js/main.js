class Ship {
	#hits = 0;
	#size = 0;

	constructor(size) {
		this.#size = size;
	}

	getSize() {
		return this.#size;
	}

	hit() {
		this.#hits++;
	}

	isSunk() {
		return this.#hits == this.#size;
	}
}

function Cell(row, column) {
	return { x: row, y: column };
}

class Gameboard {
	board = {
		ships: [],
		Hits: [],
		addShip(shipInfo) {
			this.ships.push(shipInfo);
		},
		getShips() {
			return this.ships;
		},
		addHit(cell) {
			this.Hits.push(cell);
		},
		getHits() {
			return this.Hits;
		},
	};

	isLegal(cell) {
		if (cell.x > 9 || cell.x < 0 || cell.y > 9 || cell.y < 0) {
			return false;
		}
		return true;
	}

	isOccupied(cell) {
		const ships = this.board.getShips();
		let occupyingShipIndex = false;

		ships.forEach((ship, index) => {
			for (const occupiedCell of ship.occupiedCells) {
				if (cell.x == occupiedCell.x && cell.y == occupiedCell.y) {
					occupyingShipIndex = index;
				}
			}
		});

		return occupyingShipIndex;
	}

	hasBeenHit(cell) {
		const hits = this.board.getHits();
		let beenHit = false;

		for (const hit of hits) {
			if (cell.x == hit.x && cell.y == hit.y) {
				beenHit = true;
			}
		}
		return beenHit;
	}

	deployShip(ship, rearCell, orientation) {
		const size = ship.getSize();
		let occupiedCells = [];
		for (let i = 0; i < size; i++) {
			if (orientation == "H") {
				occupiedCells.push(Cell(rearCell.x, rearCell.y + i));
			}
			if (orientation == "V") {
				occupiedCells.push(Cell(rearCell.x + i, rearCell.y));
			}
		}

		let shipAllowed = true;

		for (const cell of occupiedCells) {
			if (this.isOccupied(cell) !== false || !this.isLegal(cell)) {
				shipAllowed = false;
			}
		}

		if (shipAllowed) {
			const shipInfo = {
				ship,
				rearCell,
				occupiedCells,
				orientation,
			};
			this.board.addShip(shipInfo);
			return 1; // ship deployed
		}

		return 0; // ship was not deployed
	}

	receiveAttack(cell) {
		if (!this.hasBeenHit(cell)) {
			const occupyingShipIndex = this.isOccupied(cell);
			if (occupyingShipIndex !== false) {
				this.board.ships[occupyingShipIndex].ship.hit();
			}
			this.board.addHit(cell);
			return 1; // attack was received
		}

		return 0; // cell has been hit before, attack not received
	}

	allShipsSunk() {
		const ships = this.board.getShips();
		let shipsSunk = true;
		for (const shipInfo of ships) {
			if (!shipInfo.ship.isSunk()) {
				shipsSunk = false;
			}
		}

		return shipsSunk;
	}
}

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.gameboard = new Gameboard();
	}
}

module.exports = { Ship, Gameboard, Cell, Player };
