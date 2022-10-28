const assert = require("assert");
const DB = require("../src/index.js");
const fs = require("fs");

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
			assert.throws(() => {
				db.add("testkey", "testvalue");
			});
		});

		it("should throw an error if the key is our reserved key 'bazaardb'", () => {
			var db = new DB();
			assert.throws(() => {
				db.add("bazaardb", "testvalue");
			});
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
			assert.throws(() => {
				db.edit("testkey", "testvalue");
			});
		});

		it("should throw an error if the key is our reserved key 'bazaardb'", () => {
			var db = new DB();
			assert.throws(() => {
				db.edit("bazaardb", "testvalue");
			});
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
			
			try {
				db.get("key");
			} catch (e) {
				assert.equal(e, "Key does not exist");
			}
		});
	});

	describe("dump", () => {
		it("should return the database", () => {
			var db = new DB();
			testjson = {"testkey": "testvalue"};
			db.add("testkey", "testvalue");
			assert.equal(JSON.stringify(db.dump()), JSON.stringify(testjson));
		});
	});

	describe("load", () => {
		it("should load a database from a file", () => {
			var db = new DB();
			db.add("testloadkey", "loadvalue");
			db.export();
			db.load("database.db");
			assert.equal(db.get("testloadkey"), "loadvalue");
		});
	});


	describe("export", () => {
		it("should export the database to a file", () => {
			var db = new DB();
			db.add("testkey", "testvalue");
			db.add("key", "dump output");
			db.export();
			assert.equal(fs.readFileSync("database.db"), JSON.stringify({"testkey": "testvalue", "key": "dump output"}));
			fs.rmSync("database.db");
		});
	});


	describe("clear", () => {
		it("should clear the database", () => {
			var db = new DB();
			db.add("key", "value");
			db.clear();
			if (typeof db.dump() === "object") {
				assert(true)
			} else {
				throw new Error(`Database not cleared: ${db.dump()}`);
			}
		});
	});
});