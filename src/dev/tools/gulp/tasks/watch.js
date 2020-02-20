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
import { themes } from '../tools/config';
import browserSyncLib from 'browser-sync';
import path from 'path';
import themeLoader from '../tools/theme-loader';

export const watchTask = () => {
  const browserSync = browserSyncLib.create();
  themeLoader().forEach(name => {
    const theme = themes[name];
    const themeScssGlob = path.join(theme.src, theme.scssDir || 'scss/**/*.scss');
    const themeJsGlob = path.join(theme.src, theme.jsDir || 'js/**/*.js');

    watch(themeScssGlob, series(lintScssTask, stylesheetsTask))
      .on('change', browserSync.reload);

    watch(themeJsGlob, javascriptTask)
      .on('change', browserSync.reload);
  });
}
