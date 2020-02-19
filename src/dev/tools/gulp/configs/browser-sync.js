/**
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2020 August Ash (https://www.augustash.com)
 */

'use strict';

/**
 * BrowserSync Config.
 */
module.exports = {
  browserSync: {
    enabled: false,
    notify: false,
    openAutomatically: false,
    port: 3000,
    proxy: "https://b2c.heatwagon.test",
    ssl: {
      cert: "/usr/local/etc/nginx/ssl/localhost.pem",
      key: "/usr/local/etc/nginx/ssl/localhost.key",
    }
  }
};
