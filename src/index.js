const fs = require('fs')

class BZDB {
	construct() {
		this.JSONObject = undefined || {};
	}

	add(key, value) {
		if (this.JSONObject[key] == undefined) {
			this.JSONObject[key] = value;
		} else {
			throw "Key already exists";
		}
	}

	edit(key, value) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			this.JSONObject[key] = value;
		}
	}

	get(key) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			return this.JSONObject[key];
		}
	}

	remove(key) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			delete this.JSONObject[key];
		}
	}

	dump(consolelog) {
		if (consolelog){
			console.log(this.JSONObject);
		}
		return this.JSONObject;
	}

	load(filename) {
		this.JSONObject =  JSON.parse(fs.readFileSync(filename));
	}

	export() {
		fs.writeFileSync('database.bzdb', JSON.stringify(this.JSONObject));
	}

	clear() {
		this.JSONObject = {};
	}
}

module.exports = BZDB