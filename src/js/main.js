class Ship {
	#hits = 0;
	#length = 0;

	constructor(length) {
		this.#length = length;
	}

	getLength() {
		return this.#length;
	}

	hit() {
		this.#hits++;
	}

	isSunk() {
		return this.#hits == this.#length;
	}
}



module.exports = { Ship };
