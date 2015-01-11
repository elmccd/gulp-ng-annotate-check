(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-ng-annotate-check
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> ng-annotate-check plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-ng-annotate-check` as a development dependency:

```shell
npm install --save-dev gulp-ng-annotate-check
```

Then, add it to your `gulpfile.js`:

```javascript
var ng-annotate-check = require("gulp-ng-annotate-check");

gulp.src("./src/*.ext")
	.pipe(ng-annotate-check({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### ng-annotate-check(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-ng-annotate-check
[npm-image]: https://badge.fury.io/js/gulp-ng-annotate-check.png

[travis-url]: http://travis-ci.org/elmccd/gulp-ng-annotate-check
[travis-image]: https://secure.travis-ci.org/elmccd/gulp-ng-annotate-check.png?branch=master

[coveralls-url]: https://coveralls.io/r/elmccd/gulp-ng-annotate-check
[coveralls-image]: https://coveralls.io/repos/elmccd/gulp-ng-annotate-check/badge.png

[depstat-url]: https://david-dm.org/elmccd/gulp-ng-annotate-check
[depstat-image]: https://david-dm.org/elmccd/gulp-ng-annotate-check.png
