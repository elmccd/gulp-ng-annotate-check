var gulp = require("gulp");
var ngAnnotateCheck = require("./../index.js");

gulp.task("default", function () {
	gulp.src("files/**")
		.pipe(ngAnnotateCheck({
			options: {
				"single_quotes": true
			},
			callback: function (diff, fileName) {
				console.log(fileName);
				console.log(diff);
			}
		}));

});
