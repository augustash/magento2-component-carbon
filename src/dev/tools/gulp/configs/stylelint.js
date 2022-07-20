/**
 * Carbon.
 *
 * Sass-based Boilerplate Frontend Theme
 *
 * @author    Peter McWilliams <pmcwilliams@augustash.com>
 * @copyright Copyright (c) 2022 August Ash (https://www.augustash.com)
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
