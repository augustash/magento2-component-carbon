/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import { src } from 'gulp';
import { stylelintConfig, themes } from '../tools/config';
import stylelint from 'gulp-stylelint';

export default (name, themeSrcPaths) => {
  const theme = themes[name];

  return src(themeSrcPaths, { sourcemaps: theme.sourceMaps || false })
    .pipe(stylelint(stylelintConfig));
};
