/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

import { dest, src } from 'gulp';
import { browserListConfig, themes, projectRoot } from '../tools/config';
import autoprefixer from 'gulp-autoprefixer';
import browserSyncLib from 'browser-sync';
import concat from 'gulp-concat';
import path from 'path';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';

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
    }))
    .pipe(autoprefixer(browserListConfig.prefixes))
    .pipe(concat(outputName + '.css'))
    .pipe(dest(themeDestPath, { sourcemaps: '.' }))
    .pipe(browserSync.stream({match: '**/*.css'}));
};
