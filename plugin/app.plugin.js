const { withPlugins } = require('expo/config-plugins');

const withWebView = require('./withWebView');

const plugins = [withWebView];

/** @type {import('@expo/config-plugins').ConfigPlugin} */
module.exports = (config) => withPlugins(config, plugins);
