# reactjs-karma-gulp

## Description

A boilerplate for React.js web application, Karma test runner, document generator.

- runtime npm modules
  - react
  - react-dom
  - superagent

- gulp w/plugins
  - gulp
  - gulp-if
  - gulp-jshint
  - gulp-sass
  - gulp-sourcemaps
  - browserify
  - babelify
  - babel-preset-es2015
  - babel-preset-react
  - del
  - jshint-jsx
  - vinyl-buffer
  - vinyl-source-stream
  - watchify

- karma w/plugins
  - karma
  - karma-browserify
  - karma-chrome-launcher
  - karma-cli
  - karma-mocha
  - babelify
  - espowerify
  - mocha
  - power-assert
  - react-addons-test-utils

- static file server, api mock server
  - json-server

- jsdoc3
  - jsdoc

- kss-node
  - kss

## Requirements

- node.js
- Google Chrome
- Python

## Usage

```
$ npm run
Available scripts in the reactjs-karma-gulp package:
  build
    ulimit -n 2560; gulp build
  clean
    gulp del
  doc
    ulimit -n 2560; jsdoc -r public/js -d doc/jsdoc; kss-node --config kss-config.json
  lint
    gulp jsxhint
  server
    json-server --port 8080 --static ./public --watch mock.json
  test
    ulimit -n 2560; gulp karma
  watch
    ulimit -n 2560; gulp watch
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
