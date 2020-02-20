/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import { src } from 'gulp';
import { projectRoot, stylelintConfig, themes } from '../tools/config';
import path from 'path';
import stylelint from 'gulp-stylelint';

export default (name) => {
  const theme = themes[name];
  const themeSrcPath = path.join(projectRoot, theme.src, theme.scssDir || 'scss/**/*.scss');

  return src(themeSrcPath, { sourcemaps: theme.sourceMaps || false })
    .pipe(stylelint(stylelintConfig));
};
