const fs = require('fs')

class BZDB {
	construct() {
		this.JSONObject = undefined || {};
	}

	add(key, value) {
		this.JSONObject[key] = value;
	}

	get(key) {
		return this.JSONObject[key];
	}

	remove(key) {
		delete this.JSONObject[key];
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
}

module.exports = BZDB