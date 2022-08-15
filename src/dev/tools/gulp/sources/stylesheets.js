/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import { dest, src } from 'gulp';
import { browserListConfig, themes, projectRoot } from '../tools/config';
import autoprefixer from 'gulp-autoprefixer';
import browserSyncLib from 'browser-sync';
import concat from 'gulp-concat';
import path from 'path';
import sassGlob from 'gulp-sass-glob';
import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass);

export default (name, themeSrcPaths) => {
  const browserSync = browserSyncLib.create();
  const theme = themes[name];
  const themeDestPath = path.join(projectRoot, theme.dest, 'css/');
  const outputName = theme.outputName || 'theme';

  return src(themeSrcPaths, { sourcemaps: theme.sourceMaps || false })
    .pipe(sassGlob())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: theme.outputStyle || 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer(browserListConfig.prefixes))
    .pipe(concat(outputName + '.css'))
    .pipe(dest(themeDestPath, { sourcemaps: '.' }))
    .pipe(browserSync.stream({match: '**/*.css'}));
};
