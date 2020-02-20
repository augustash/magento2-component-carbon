/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

import del from 'del';
import { projectRoot } from '../tools/config';

export const cleanTask = () => {
  return del([
    projectRoot + 'pub/static/**',
    '!' + projectRoot + 'pub/static/.htaccess'
  ]);
}
