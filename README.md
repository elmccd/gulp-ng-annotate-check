# gulp-ng-annotate-check
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if any angularJS annotations is not missing.
> Plugin is comparing source file with it's [ng-annotate](https://github.com/olov/ng-annotate) version and if they are not same it returns missing annotations.

## Usage

First, install `gulp-ng-annotate-check` as a development dependency:

```shell
npm install --save-dev gulp-ng-annotate-check
```

Then, add it to your `gulpfile.js`:

```javascript
var ngAnnotateCheck = require("gulp-ng-annotate-check");

gulp.src("./src/*.js")
	.pipe(ngAnnotateCheck({
	        options: {"single_quotes": true},
		callback: function (diff, fileName) {
				console.log(fileName);
				console.log(diff);
			}
		
	}));
```

## API

### ngAnnotateCheck(options)


#### options.callback
Type: `Function`
Required

Parameters: 1. `diff` String and 2.`fileName`


#### options.options
Type: `Object`  
Default: `{}`

Options passed to ng-annotate module. 


##### options.options.single_quotes
Type: `Boolean`  
Default: `false`

Set to true if you are using single quotes in your angular app.

It prevent from unnecessary differences.


[All options.options](https://github.com/olov/ng-annotate/blob/master/ng-annotate.js).


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
