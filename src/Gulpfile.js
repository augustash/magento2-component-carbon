/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

'use strict';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const configLoader = require('./dev/tools/gulp/tools/config-loader');
const extend = require('extend');
const reload = browserSync.reload;

/**
 * Config.
 */
configLoader.set('browser-sync', 'dev/tools/gulp/configs/browser-sync');
configLoader.set('themes', 'dev/tools/gulp/configs/themes');
const config = extend(true, configLoader.get('browser-sync'), configLoader.get('themes'));
const eslintRules = 'dev/tools/gulp/configs/eslintrc.js';
const sourceCssFiles = [];
const sourceJsFiles = [];

config.themes.forEach(theme => {
  theme.css.src.forEach(file => {
    sourceCssFiles.push(`app/design/${theme.area}/${theme.name}/${file}`);
  });
  theme.js.src.forEach(file => {
    sourceJsFiles.push(`app/design/${theme.area}/${theme.name}/${file}`);
  });
});

/**
 * Plugins.
 */
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const stylelint = require('gulp-stylelint');
const uglify = require('gulp-uglify');

/**
 * Tasks.
 */
function stylesheets() {
  return src(sourceCssFiles, { sourcemaps: true })
    .pipe(sassGlob())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(concat('theme.css'))
    .pipe(dest(config.dest.css, { sourcemaps: '.' }))
    .pipe(browserSync.stream({match: '**/*.css'}));
};

function javascript() {
  return src(sourceJsFiles, { sourcemaps: true })
    .pipe(eslint({
      configFile: eslintRules,
      useEslintrc: false
    }))
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(concat('theme.js'))
    .pipe(dest(config.dest.js, { sourcemaps: '.' }))
    .pipe(gulpIf(!config.browserSync.enabled, eslint.failAfterError()))
    .pipe(browserSync.stream({match: '**/*.js'}));
};

function lintCss() {
  return src(sourceCssFiles, { sourcemaps: true })
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        { formatter: 'verbose', console: true },
        { formatter: 'json', save: 'report.json' }
      ],
      debug: true
    }));
};

function watcher() {
  watch(sourceCssFiles, series(lintCss, stylesheets)).on('change', reload);
  watch(sourceJsFiles, javascript).on('change', reload);
};

function browserServe() {
  // build assets
  stylesheets();

  // start server
  browserSync.init({
    https: {
      cert: config.browserSync.ssl.cert,
      key: config.browserSync.ssl.key,
    },
    notify: config.browserSync.notify,
    open: config.browserSync.openAutomatically,
    port: config.browserSync.port,
    proxy: config.browserSync.proxy,
  });

  // watch for changes
  watcher();
};

/**
 * Exports.
 */
exports.css = series(lintCss, stylesheets);
exports.javascript = javascript;
exports.lintCss = lintCss;
exports.watcher = watcher;
exports.build = parallel(series(lintCss, stylesheets), javascript);
exports.serve = series(parallel(series(lintCss, stylesheets), javascript), browserServe);
exports.default = series(parallel(series(lintCss, stylesheets), javascript), watcher);
