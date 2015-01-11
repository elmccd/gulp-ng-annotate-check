var through = require("through2");
var gutil   = require("gulp-util");
var path    = require("path");

var annotateDiff = require("./ngAnnotateCheck.js");

module.exports = function (param) {
	"use strict";

	// if necessary check for required param(s), e.g. options hash, etc.
	if (!param) {
		throw new gutil.PluginError("gulp-ng-annotate-check", "No param supplied");
	}
    //
	//console.log(param);

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function ngAnnotateCheck(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-ng-annotate-check", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			var diffObject = annotateDiff(String(file.contents), param.options);

			if (diffObject.diff.length) {
				param.callback(diffObject.diff, path.relative(file.cwd, file.path), file);
			}


			this.push(file);

		}
		return callback();
	}

	return through.obj(ngAnnotateCheck);
};
