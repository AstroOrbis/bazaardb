class ReservedKeyError extends Error {
	constructor () {
		super("The key you are trying to use is reserved. Try another key!");
		this.name = 'ReservedError'
	}
}

class KeyExistsError extends Error {
	constructor () {
		super("The key you are trying to use already exists. Try another key!");
		this.name = 'KeyExistsError'
	}
}

class KeyDoesNotExistError extends Error {
	constructor () {
		super("The key you are trying to use does not exist. Try another key!");
		this.name = 'KeyDoesNotExistError'
	}
}

module.exports = {
	ReservedKeyError,
	KeyExistsError,
	KeyDoesNotExistError
}
