const { withInfoPlist } = require('@expo/config-plugins');

/** @type {import('@expo/config-plugins').ConfigPlugin} */
const withWebView = (config) =>
  withInfoPlist(config, (config) => {
    config.modResults.NSCameraUsageDescription =
      '글 작성시 사진을 올리기 위해 사진 접근 권한을 허용하시겠습니까?';
    return config;
  });

module.exports = withWebView;
