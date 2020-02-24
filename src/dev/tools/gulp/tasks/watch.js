/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import { series, watch } from 'gulp';
import { javascriptTask } from '../tasks/javascript';
import { lintScssTask } from '../tasks/lint-scss';
import { stylesheetsTask } from '../tasks/stylesheets';
import browserSyncLib from 'browser-sync';
import sourceLoader from '../tools/source-loader';
import themeLoader from '../tools/theme-loader';

export const watchTask = () => {
  const browserSync = browserSyncLib.create();
  themeLoader().forEach(name => {
    let themeScssPaths = sourceLoader(name, 'scss');
    let themeJsPaths = sourceLoader(name, 'js');

    watch(themeScssPaths, series(lintScssTask, stylesheetsTask))
      .on('change', browserSync.reload);

    watch(themeJsPaths, javascriptTask)
      .on('change', browserSync.reload);
  });
}
