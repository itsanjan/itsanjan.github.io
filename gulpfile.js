// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const gulp = require("gulp");
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const pkg = require('./package.json');

const browserslist = ['last 2 versions'];

// Set the banner content
const banner = ['/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %>\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %>\n',
  ' */\n',
  '\n'
].join('');

// Copy third party libraries from /node_modules into /vendor
function vendorBootstrap() {
  return gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'));
}

function vendorFontAwesome() {
  return gulp.src([
      './node_modules/@fortawesome/**/*',
    ])
    .pipe(gulp.dest('./vendor'));
}

// CSS tasks
function cssExpanded() {
  return gulp
    .src("./scss/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer({ overrideBrowserslist: browserslist })]))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

function cssMinified() {
  return gulp
    .src("./scss/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .on("error", sass.logError)
    .pipe(postcss([
      autoprefixer({ overrideBrowserslist: browserslist }),
      cssnano()
    ]))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest("./css"));
}

// JS task
function js() {
  return gulp
    .src([
      './js/*.js',
      '!./js/*.min.js',
      '!./js/contact_me.js',
      '!./js/jqBootstrapValidation.js'
    ])
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// Tasks
const vendor = gulp.parallel(vendorBootstrap, vendorFontAwesome);
// Run sequentially: gulp-sass's underlying compiler shares state across
// concurrent invocations and corrupts variable resolution when run in parallel.
const css = gulp.series(cssExpanded, cssMinified);
gulp.task("vendor", vendor);
gulp.task("css", css);
gulp.task("js", js);

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*.js", "!./js/*.min.js"], js);
  gulp.watch("./**/*.html", browserSyncReload);
}

gulp.task("default", gulp.parallel(vendor, css, js));

// dev task
gulp.task("dev", gulp.parallel(watchFiles, browserSync));
