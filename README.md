# reactjs-karma-gulp

## Description

A boilerplate for React.js web application, Karma test runner, document generator.

- runtime modules
  - react 0.13.3
  - superagent 1.2.0

- gulp w/plugins
  - gulp 3.8.11
  - gulp-jshint 1.11.0
  - gulp-plumber 1.0.1
  - gulp-sass 2.0.1
  - browserify 10.2.1
  - jshint-jsx 0.4.1
  - minifyify 7.0.0
  - reactify 1.1.1
  - vinyl-source-stream 1.1.0

- karma w/plugins
  - karma 0.12.32
  - karma-browserify 4.2.1
  - karma-chrome-launcher 0.1.12
  - karma-cli 0.0.4
  - karma-mocha 0.1.10
  - babelify 6.1.1
  - espowerify 0.10.0
  - mocha 2.2.5
  - power-assert 0.11.0

- jsdoc3
  - jsdoc 3.3.0

- kss-node
  - kss 2.1.0

## Requirements

- node.js v0.10.x
- Google Chrome
- Python

## Usage

```
$ npm run
Available scripts in the reactjs-karma-gulp package:
  browserify
    ulimit -n 2560 && gulp browserify
  build
    ulimit -n 2560 && gulp build
  clean
    gulp clean
  jsdoc
    ulimit -n 2560 && gulp browserify --no-minify && jsdoc -r doc/js -d doc/jsdoc
  jsxhint
    gulp jsxhint
  karma
    ulimit -n 2560 && gulp karma
  kss
    gulp sass && kss-node --config kss-config.json
  sass
    gulp sass
  scss
    gulp scss
  start
    cd public && python -m SimpleHTTPServer 8080
  test
    ulimit -n 2560 && gulp test
  watch
    ulimit -n 2560 && gulp watch

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
