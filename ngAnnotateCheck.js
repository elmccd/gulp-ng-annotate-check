var ngAnnotate = require("ng-annotate");
var diff       = require("diff");
var gutil      = require("gulp-util");
var extend      = require("extend");

var ngAnnotateCheck = function(sourceCode, ngAnnotateOptions) {

	var diffResults = "";
	var different = false;

	var res = ngAnnotate(sourceCode, extend(true, {
		"add": true,
		"remove": true
	}, ngAnnotateOptions || {}));

	if (res.errors) {
		console.log(res.errors);
	}

	var fileDiff = diff.diffWords(sourceCode, res.src);

	var showPart = function(part) {
	    return part &&
			(part.added || part.removed) &&
			part.value.replace(/[{}\(\)\[\]"';\s]/g, "") !== "";
	};

	var getFirstLines = function(fileDiff, index, nrOfLines) {
		var lastParts = fileDiff[index].value;
		if (fileDiff[index + 1]) {
			lastParts += fileDiff[index + 1].value;
		}
		if (fileDiff[index + 2]) {
			lastParts += fileDiff[index + 2].value;
		}
	    return lastParts.split("\n").slice(0, nrOfLines).join("\n") + "\n";
	};

	var getLastLines = function(fileDiff, index, nrOfLines) {
		var lastParts = fileDiff[index].value;
		if (fileDiff[index - 1]) {
			lastParts = fileDiff[index - 1].value + lastParts;
		}
		if (fileDiff[index - 2]) {
			lastParts = fileDiff[index - 2].value + lastParts;
		}
		var parts = lastParts.split("\n");
		return parts.slice(parts.length - nrOfLines, parts.length).join("\n");
	};

	fileDiff.forEach(function(part, index){
		var colorDefault = "grey";
		var color = part.added ? "green" : (part.removed ? "red" : colorDefault);

		if (showPart(part)) {
			if (!showPart(fileDiff[index - 1])) {
				diffResults += gutil.colors[colorDefault](getLastLines(fileDiff, index - 1, 2));
			}

			diffResults += gutil.colors[color](part.value);

			if (!showPart(fileDiff[index + 1])) {
				diffResults += gutil.colors[colorDefault](getFirstLines(fileDiff, index + 1, 2));
			}

			different = true;
		}

	});

	return {
		diff: diffResults
	};
};

module.exports = ngAnnotateCheck;
