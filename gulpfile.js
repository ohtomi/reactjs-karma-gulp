// gulpfile.js
var gulp = require('gulp');

var paths = {
  main: {
    js: './src/main/js/',
    css: './src/main/css/'
  },
  test: {
    js: './src/test/js/'
  },
  dest: {
    js: './public/js/',
    js_no_minify: './doc/js/',
    css: './public/css/'
  },
  doc: {
    jsdoc: './doc/jsdoc/',
    styleguide: './doc/styleguide/'
  }
};

gulp.task('clean', function(done) {
  var del = require('del');

  del([
    paths.dest.js + '/**/*.js',
    paths.dest.css + '/**/*.css'
  ], done);
});

gulp.task('browserify', function() {
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var reactify = require('reactify');
  var minifyify = require('minifyify');

  var taskArgs = process.argv.slice(2);
  var noMinify = taskArgs[0] === 'browserify' && taskArgs[1] === '--no-minify';
  var destDir = !noMinify ? paths.dest.js : paths.dest.js_no_minify;

  var b = browserify({
    entries: [paths.main.js + '/main.js'],
    transform: [reactify],
    debug: true
  });
  if (!noMinify) {
    b.plugin('minifyify', {output: paths.dest.js + '/bundle.map.json'});
  }

  b.bundle()
    .on('error', function(err) {
      console.log(err.toString());
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(destDir));
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

  gulp.src([paths.main.js + '/**/*.js'])
    .pipe(jshint({
      linter: require('jshint-jsx').JSXHINT
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  var sass = require('gulp-sass');

  gulp.src(paths.main.css + '/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.dest.css))
    .pipe(gulp.dest(paths.doc.styleguide));
});

gulp.task('scss', ['sass']);

gulp.task('watch', function() {
  gulp.watch([paths.main.js + '/**/*.js', paths.test.js + '/**/*.js'], ['browserify']);
  gulp.watch([paths.main.css + '/**/*.scss'], ['sass']);
});

gulp.task('build', ['browserify', 'sass']);
