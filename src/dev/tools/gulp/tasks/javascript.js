/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import mergeStream from 'merge-stream'
import source from '../sources/javascript';
import sourceLoader from '../tools/source-loader';
import themeLoader from '../tools/theme-loader';

export const javascriptTask = () => {
  const streams = mergeStream();
  themeLoader().forEach(name => {
    let sourcePaths = sourceLoader(name, 'js');
    streams.add(source(name, sourcePaths));
  });
  return streams;
}
