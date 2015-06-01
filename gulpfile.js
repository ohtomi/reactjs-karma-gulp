// gulpfile.js
var gulp = require('gulp');

var handleError = function(err) {
  console.log(err.toString());
};

gulp.task('clean', function(done) {
  var del = require('del');

  del([
    './public/js/**/*.js',
    './public/css/**/*.css'
  ], done);
});

gulp.task('browserify', function() {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var reactify = require('reactify');
  var minifyify = require('minifyify');

  browserify({
    entries: ['./src/main/js/main.js'],
    transform: [reactify],
    debug: true
  })
    .plugin('minifyify', {output: './public/js/bundle.map.json'})
    .bundle()
    .on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('karma', ['browserify'], function(done) {
  var karma = require('karma').server;

  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(exitStatus) {
    done(exitStatus ? 'There are failing unit tests' : undefined);
  });
});

gulp.task('test', ['karma']);

gulp.task('jsxhint', function() {
  var jshint = require('gulp-jshint');

  gulp.src(['./src/main/js/**/*.js'])
    .pipe(jshint({
      linter: require('jshint-jsx').JSXHINT
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  var sass = require('gulp-sass');

  gulp.src('./src/main/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
    .pipe(gulp.dest('./doc/styleguide/'));
});

gulp.task('scss', ['sass']);

gulp.task('watch', function() {
  gulp.watch(['./src/main/js/**/*.js', './src/test/js/**/*.js'], ['browserify']);
  gulp.watch(['./src/main/css/**/*.scss'], ['sass']);
});

gulp.task('build', ['browserify', 'sass']);
