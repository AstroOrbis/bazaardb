const fs = require('fs')

class BZDB {
	construct() {
		this.JSONObject = undefined || {};
	}
	/**
	 * @param  {string} key
	 * @param  {string} value
	 */
	add(key, value) {
		if (this.JSONObject[key] == undefined) {
			this.JSONObject[key] = value;
		} else {
			throw "Key already exists";
		}
	}
	/**
	 * @param  {string} key
	 * @param  {string} value
	 */
	edit(key, value) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			this.JSONObject[key] = value;
		}
	}
	/**
	 * @param  {string} key
	 */
	get(key) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			return this.JSONObject[key];
		}
	}
	/**
	 * @param  {string} key
	 */
	remove(key) {
		if(this.JSONObject[key] == undefined) {
			throw "Key does not exist";
		} else {
			delete this.JSONObject[key];
		}
	}
	/**
	 * @param  {bool} consolelog
	 */
	dump(consolelog) {
		if (consolelog){
			console.log(this.JSONObject);
		}
		return this.JSONObject;
	}
	/**
	 * @param  {string} filename
	 */
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