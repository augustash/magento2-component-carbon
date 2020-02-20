/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import mergeStream from 'merge-stream'
import source from '../sources/lint-scss';
import themes from '../tools/theme-loader';

export const lintScssTask = () => {
  const streams = mergeStream();
  themes().forEach(name => {
    streams.add(source(name));
  });
  return streams;
}
