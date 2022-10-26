const assert = require("assert");
const BZDB = require("../src/index.js");
const fs = require("fs");

describe("DB", () => {

	describe("add", () => {
		it("should add a key value pair to the database", () => {
			var db = new BZDB();
			db.add("testkey", "testvalue");
			assert.equal(db.get("testkey"), "testvalue");
		});
	});

	describe("edit", () => {
		it("should edit a key value pair in the database", () => {
			var db = new BZDB();
			db.add("testkey", "testvalue");
			db.edit("testkey", "testvalue2");
			assert.equal(db.get("testkey"), "testvalue2");
		});
	});

	describe("get", () => {
		it("should return the value of a key", () => {
			var db = new BZDB();
			db.add("testkey", "testvalue");
			db.add("testkey2", "This is not supposed to return");
			assert.equal(db.get("testkey"), "testvalue");
		});
	});

	describe("remove", () => {
		it("should remove a key value pair from the database", () => {
			var db = new BZDB();
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
			var db = new BZDB();
			testjson = {"testkey": "testvalue"};
			db.add("testkey", "testvalue");
			assert.equal(JSON.stringify(db.dump()), JSON.stringify(testjson));
		});
	});

	describe("load", () => {
		it("should load a database from a file", () => {
			var db = new BZDB();
			db.add("testloadkey", "loadvalue");
			db.export();
			db.load("database.bzdb");
			assert.equal(db.get("testloadkey"), "loadvalue");
		});
	});


	describe("export", () => {
		it("should export the database to a file", () => {
			var db = new BZDB();
			db.add("testkey", "testvalue");
			db.add("key", "dump output");
			db.export();
			assert.equal(fs.readFileSync("database.bzdb"), JSON.stringify({"testkey": "testvalue", "key": "dump output"}));
			fs.rmSync("database.bzdb");
		});
	});


	describe("clear", () => {
		it("should clear the database", () => {
			var db = new BZDB();
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