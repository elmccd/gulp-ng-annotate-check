/*global describe, it*/
"use strict";

var fs = require("fs");
var should = require("should");

require("mocha");


var ngAnnotateCheck = require("../ngAnnotateCheck.js");

describe("ngAnnotateCheck", function () {

	it("should return diff for files without annotations", function (done) {

		var fileContent = String(fs.readFileSync("test/fixtures/todo.js.txt"));

		var ngAnnotateObject = ngAnnotateCheck(fileContent);

		ngAnnotateObject.should.have.property("diff");
		ngAnnotateObject.diff.length.should.be.above(5);


		done();
	});

	it("should return empty string for files with annotations", function (done) {

		var fileContent = String(fs.readFileSync("test/fixtures/with-annotations.js.txt"));

		var ngAnnotateObject = ngAnnotateCheck(fileContent, {
			'single_quotes': true
		});


		ngAnnotateObject.should.have.property("diff");
		ngAnnotateObject.diff.length.should.be.equal(0);


		done();
	});

});
