const fs = require('fs');

class DB {
	constructor() {

		this.JSONObject = undefined || {
			"bazaardb": {
				"info": {
					"authors": [
						{
							"name": "Astro Orbis",
							"email": "astroorbis@gmail.com",
							"website": "https://astroorbis.com",
							"discord": "AstroOrbis#9797"
						},
						{
							"name": "Sam Roizen",
							"email": "sam@samroizen.com",
							"website": "https://samroizen.com",
							"discord": "N/A"
						}
					],
				"description": "A quick key-value store that focuses on simplicity.",
				"license": "MIT",
				"github": {
					"repo": "https://github.com/astroorbis/bazaardb",
					"note": "If you want, please contribute to the project! I would love to see what you can do with it."
				}
				},
				"stores": {}
			}
		};
	}

	/**
	 * @param  {string} key
	 * @param  {string} value
	 */
	add(key, value) {
		if (key == "bazaardb") {
			throw "Attempted to use reserved key";
		}
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
		if (key == "bazaardb") {
			throw "Attempted to use reserved key";
		}
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
		fs.writeFileSync('database.db', JSON.stringify(this.JSONObject));
	}

	clear() {
		this.JSONObject = {};
	}
	/**
	 * @param  {string} consolelog
	 */
	info(consolelog) {
		if (consolelog){
			console.log(this.JSONObject.bazaardb);
		}
		return this.JSONObject.bazaardb;
	}

}

module.exports = DB;