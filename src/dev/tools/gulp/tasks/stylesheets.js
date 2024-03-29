/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
 */

import mergeStream from 'merge-stream'
import source from '../sources/stylesheets';
import sourceLoader from '../tools/source-loader';
import themeLoader from '../tools/theme-loader';

export const stylesheetsTask = () => {
  const streams = mergeStream();
  themeLoader().forEach(name => {
    let sourcePaths = sourceLoader(name, 'scss');
    streams.add(source(name, sourcePaths));
  });
  return streams;
}
