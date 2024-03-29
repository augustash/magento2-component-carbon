/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import { dest, src } from 'gulp';
import { browserSyncConfig, eslintConfig, themes, projectRoot } from '../tools/config';
import browserSyncLib from 'browser-sync';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import gulpIf from 'gulp-if';
import path from 'path';
import uglify from 'gulp-uglify';

export default (name, themeSrcPaths) => {
  const browserSync = browserSyncLib.create();
  const theme = themes[name];
  const themeDestPath = path.join(projectRoot, theme.dest, 'js/');
  const outputName = theme.outputName || 'theme';

  return src(themeSrcPaths, { sourcemaps: theme.sourceMaps || false })
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(concat(outputName + '.js'))
    .pipe(dest(themeDestPath, { sourcemaps: '.' }))
    .pipe(gulpIf(!browserSyncConfig.enabled, eslint.failAfterError()))
    .pipe(browserSync.stream({match: '**/*.js'}));
};
