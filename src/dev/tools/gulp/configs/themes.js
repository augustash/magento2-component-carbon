/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

'use strict';

/**
 * Defined themes.
 */
module.exports = {
  dest: {
    css: 'app/design/frontend/Augustash/Sassy/web/css/',
    js: 'app/design/frontend/Augustash/Sassy/web/js/',
  },
  themes: [
    {
      area: 'frontend',
      name: 'Augustash/Sassy',
      css: {
        src: [
          'scss/**/*.scss',
          'styles/**/*.scss',
        ]
      },
      js: {
        src: [
          'js/**/*.js'
        ]
      }
    },
    {
      area: 'frontend',
      name: 'Heatwagon/Default',
      css: {
        src: [
          'scss/**/*.scss'
        ]
      },
      js: {
        src: [
          'js/**/*.js'
        ]
      }
    }
  ]
};
