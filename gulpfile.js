// gulpfile.js

var gulp = require('gulp');
var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var karma = require('karma').server;
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

var handleError = function(err) {
  console.log(err.toString());
};

gulp.task('clean', function(done) {
  del([
    './public/js/**/*.js',
    './public/css/**/*.css'
  ], done);
});

gulp.task('browserify', function() {
  browserify({
    entries: ['./src/main/js/main.js'],
    transform: [reactify]
  })
    .bundle()
    .on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('karma', ['browserify'], function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(exitStatus) {
    done(exitStatus ? 'There are failing unit tests' : undefined);
  });
});

gulp.task('jsxhint', function() {
  gulp.src(['./src/main/js/**/*.js'])
    .pipe(jshint({
      linter: require('jshint-jsx').JSXHINT
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
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
