const assert = require("assert");
const DB = require("../src/index.js");
const fs = require("fs");
const { KeyDoesNotExistError, KeyExistsError, ReservedKeyError } = require("../src/errors.js");


describe("DB", () => {

	describe("add", () => {
		it("should add a key value pair to the database", () => {
			var db = new DB();
			db.add("testkey", "testvalue");
			assert.equal(db.get("testkey"), "testvalue");
		});

		it("should throw an error if the key already exists", () => {
			var db = new DB();
			db.add("testkey", "testvalue");
			assert.throws(() => {db.add("testkey", "testvalue")}, KeyExistsError);
		});

		it("should throw an error if the key is our reserved key 'bazaardb'", () => {
			var db = new DB();
			assert.throws(() => {db.add("bazaardb", "testvalue")}, ReservedKeyError);
		});
	});

	describe("edit", () => {
		it("should edit a key value pair in the database", () => {
			var db = new DB();
			db.add("testkey", "testvalue");
			db.edit("testkey", "testvalue2");
			assert.equal(db.get("testkey"), "testvalue2");
		});


		it("should throw an error if the key does not exist", () => {
			var db = new DB();
			assert.throws(() => {db.edit("testkey", "testvalue")}, KeyDoesNotExistError);
		});

		it("should throw an error if the key is our reserved key 'bazaardb'", () => {
			var db = new DB();
			assert.throws(() => {db.edit("bazaardb", "testvalue")}, ReservedKeyError);
		});
	});

	describe("get", () => {
		it("should return the value of a key", () => {
			var db = new DB();
			db.add("testkey", "testvalue");
			db.add("testkey2", "This is not supposed to return");
			assert.equal(db.get("testkey"), "testvalue");
		});
	});

	describe("remove", () => {
		it("should remove a key value pair from the database", () => {
			var db = new DB();
			db.add("key", "dump output");
			db.remove("key");
			assert.throws(() => {db.get("key")}, KeyDoesNotExistError);
		});
	});

	describe("dump", () => {
		it("should return the database", () => {
			var db = new DB();
			db.export("dumptest.db")
			assert.equal(JSON.stringify(db.dump()), fs.readFileSync("dumptest.db"));
			fs.rmSync("dumptest.db");
		});
	});

	describe("load", () => {
		it("should load a database from a file", () => {
			var db = new DB();
			db.add("testloadkey", "loadvalue");
			db.export('loadtest.db');
			db.load("loadtest.db");
			assert.equal(db.get("testloadkey"), "loadvalue");
			fs.rmSync("loadtest.db");
		});
	});


	describe("export", () => {
		it("should export the database to a file", () => {
			var db = new DB();

			db.export('exporttest.db');

			assert.equal(fs.readFileSync("exporttest.db", {encoding: "utf-8"}), JSON.stringify({
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
			}));
			fs.rmSync("exporttest.db");
		});
	});


	describe("clear", () => {
		it("should clear the database", () => {
			var db = new DB();
			db.add("key", "value");
			db.clear();
			assert.throws(() => {db.get("key")}, KeyDoesNotExistError);
		});
	
	});

});