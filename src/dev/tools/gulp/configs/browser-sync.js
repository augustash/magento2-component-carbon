/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

/**
 * BrowserSync config.
 */
export default {
  enabled: false,
  notify: false,
  open: false,
  port: 3000,
  proxy: 'https://localhost',
  ssl: {
    cert: '/usr/local/etc/nginx/ssl/localhost.pem',
    key: '/usr/local/etc/nginx/ssl/localhost.key',
  },
};
