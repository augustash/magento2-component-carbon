/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright 2020 August Ash, Inc. (https://www.augustash.com)
 */

/**
 * Stylelint config.
 */
export default {
  clearReportedMessages: true,
  debug: true,
  failAfterError: false,
  reporters: [
    {
      formatter: 'string',
      console: true
    },
  ],
  throwError: true,
};
